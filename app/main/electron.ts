/**
 * electron 主入口
 */
import path from 'path';
import customMenu from './customMenu';
import { app, BrowserWindow, ipcMain, dialog, Menu } from 'electron';

export interface MyBrowserWindow extends BrowserWindow {
  uid?: string;
}

function isDev() {
  return process.env.NODE_ENV === 'development'; // Node的全局 process 对象
}

function createWindow() {
  // 创建主应用窗口
  const mainWindow: MyBrowserWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    // 网页功能设置
    webPreferences: {
      devTools: true,
      nodeIntegration: true, // 注入node模块
      contextIsolation: false, // 取消上下文隔离
    },
  });
  mainWindow.uid = 'mainWindow';
  // 创建应用设置窗口
  const settingWindow: MyBrowserWindow = new BrowserWindow({
    width: 720,
    height: 240,
    resizable: false, // 设置该窗口不可拉伸宽高
    show: false,
    frame: false,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      contextIsolation: false, // 取消上下文隔离
    },
  });
  settingWindow.uid = 'settingWindow';
  if (isDev()) {
    mainWindow.loadURL(`http://127.0.0.1:7001/index.html`);
    settingWindow.loadURL(`http://127.0.0.1:7001/setting.html`);
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
    settingWindow.loadURL(`file://${path.join(__dirname, '../dist/setting.html')}`);
  }
  ipcMain.on('Electron:SettingWindow-hide-event', () => {
    if (settingWindow.isVisible()) {
      settingWindow.hide();
    }
  });
  ipcMain.on('Electron:SettingWindow-min-event', () => {
    if (settingWindow.isVisible()) {
      settingWindow.minimize();
    }
  });
}

// 等待ready事件的发生
app.whenReady().then(() => {
  createWindow();
  const menu = Menu.buildFromTemplate(customMenu);
  Menu.setApplicationMenu(menu);
  // 监听 activate 事件，如果没有窗口打开则打开一个窗口 (macOS)
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
app.on('ready', () => {
  const menu = Menu.buildFromTemplate(customMenu);
  Menu.setApplicationMenu(menu);
});

const ROOT_PATH = path.join(app.getAppPath(), '../'); // 需要使用'../'否则路径为dist文件。

// ipcMain.on('get-root-path', (event, arg) => {
//   event.reply('reply-root-path', ROOT_PATH); // 应该是向render进程发送消息，传递路径。
// });
ipcMain.handle('get-root-path', ()=>{return ROOT_PATH});

// 应用设置，保存自定义存储路径
ipcMain.on('open-save-resume-path', (event, arg) => {
  // dialog显示原生系统对话框,用于打开和保存文件,提醒等。
  dialog
    .showOpenDialog({
      properties: ['openDirectory'],
    })
    .then((result) => {
      event.reply('reply-save-resume-path', result.filePaths);
    })
    .catch((err) => {
      event.reply('reply-save-resume-path', err);
    });
});

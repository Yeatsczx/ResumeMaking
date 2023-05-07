/**
 * electron 主入口
 */
import path from 'path';
import customMenu from './customMenu';
import './userData';
import { app, BrowserWindow, ipcMain, dialog, Menu, crashReporter } from 'electron';
// import fs, { promises as fsPromiseAPIs } from 'fs';

crashReporter.start({ uploadToServer: false });
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
    icon: path.join(__dirname, '../dist/assets/favicon.ico'),
    // 网页功能设置
    webPreferences: {
      devTools: true,
      nodeIntegration: true, // 注入node模块
      contextIsolation: false, // 取消上下文隔离
      webSecurity: false,
    },
  });
  mainWindow.uid = 'mainWindow';
  // 创建应用设置窗口
  // const settingWindow: MyBrowserWindow = new BrowserWindow({
  //   width: 720,
  //   height: 240,
  //   resizable: false, // 设置该窗口不可拉伸宽高
  //   show: false,
  //   frame: false,
  //   webPreferences: {
  //     devTools: true,
  //     nodeIntegration: true,
  //     webSecurity: false,
  //     contextIsolation: false, // 取消上下文隔离
  //   },
  // });
  // settingWindow.uid = 'settingWindow';
  if (isDev()) {
    mainWindow.loadURL(`http://127.0.0.1:7001/index.html`);
    // settingWindow.loadURL(`http://127.0.0.1:7001/setting.html`);
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
    // settingWindow.loadURL(`file://${path.join(__dirname, '../dist/setting.html')}`);
  }
  // ipcMain.on('Electron:SettingWindow-hide-event', () => {
  //   if (settingWindow.isVisible()) {
  //     settingWindow.hide();
  //   }
  // });
  // ipcMain.on('Electron:SettingWindow-min-event', () => {
  //   if (settingWindow.isVisible()) {
  //     settingWindow.minimize();
  //   }
  // });
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

// let port1: any;
// 接受渲染进程传过来的store数据
// ipcMain.on('render-post-message-to-main', (event, params) => {
//   console.log('[Main receive]render-post-message-to-main', params);

//   // 获取到 port1
//   let port1 = event.ports[0];

//   // 需要调用 port1 的 start()
//   port1.start();
// });

// app.on('before-quit', (event) => {
//   event.preventDefault();
//   ipcMain.on('render-post-message-to-main', (event, params) => {
//     console.log('[Main receive]render-post-message-to-main', params);

//     // 获取到 port1
//     let port1 = event.ports[0];

//     // 需要调用 port1 的 start()
//     port1.start();
//     port1.postMessage('getResumeCache');
//     // port1 绑定事件监听，之后渲染进程一发送的消息都会在这里接收到
//     port1.on('message', (event: any) => {
//       const data = event.data;
//       console.log('[Main receive]message', data);
//       const jsonPath = path.join(__dirname, 'resumeCache/index.json');
//       fsPromiseAPIs.writeFile(jsonPath, JSON.stringify(data), 'utf-8').then(() => {
//         app.quit();
//       });
//     });
//   });

//   // event.preventDefault();
// });

const ROOT_PATH = path.join(app.getAppPath(), '../'); // 需要使用'../'否则路径为dist文件。

// ipcMain.on('get-root-path', (event, arg) => {
//   event.reply('reply-root-path', ROOT_PATH); // 应该是向render进程发送消息，传递路径。
// });
ipcMain.handle('get-root-path', () => {
  return isDev() ? ROOT_PATH : __dirname;
});

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

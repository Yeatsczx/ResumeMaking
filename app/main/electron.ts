/**
 * @desc electron 主入口
 */
import path from 'path';
import { app, BrowserWindow, ipcMain, dialog } from 'electron';

function isDev() {
  // 👉 还记得我们配置中通过 webpack.DefinePlugin 定义的构建变量吗
  return process.env.NODE_ENV === 'development';//Node的全局 process 对象
}

let currentSettingWindow: BrowserWindow;

function createWindow() {
  // 创建主应用窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      devTools: true,
      nodeIntegration: true, // 在渲染进程中就能使用 node。
      contextIsolation: false,
    },
  });

  // 创建应用设置窗口
  const settingWindow = new BrowserWindow({
    width: 720,
    height: 240,
    resizable: false, // 👈 我们设置该窗口不可拉伸宽高
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  currentSettingWindow = settingWindow;

  if (isDev()) {
    // 👇 看到了吗，在开发环境下，我们加载的是运行在 7001 端口的 React
    mainWindow.loadURL(`http://127.0.0.1:7001`);
    settingWindow.loadURL(`http://127.0.0.1:7001/setting.html`);
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
    settingWindow.loadURL(`file://${path.join(__dirname, '../dist/setting.html')}`);
  }
}

app.whenReady().then(() => {
  createWindow();
  // 监听 app 模块的 activate 事件。如果没有任何浏览器窗口是打开的，则调用 createWindow() 方法。(macOS)
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
  // 在Windows和Linux上，关闭所有窗口通常会完全退出一个应用程序。
  // 为了实现这一点，你需要监听 app 模块的 'window-all-closed' 事件。如果用户
  // 不是在 macOS(darwin) 上运行程序，则调用 app.quit()。
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
})
const ROOT_PATH = path.join(app.getAppPath(), '../');

ipcMain.on('get-root-path', (event, arg) => {
  event.reply('reply-root-path', ROOT_PATH); // 应该是向render进程发送消息，传递路径。
});

// 应用设置，保存自定义存储路径
ipcMain.on('open-save-resume-path', (event, arg) => {
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


// 监听主进程与渲染进程通信
import { ipcRenderer } from 'electron';
/**
 * @description 发送store中的数据到主进程
 */
export default function useSendResumeCacheHook() {
  return (resumeCatch: any) => {
    const { port1, port2 } = new MessageChannel();
    // 给主进程传输消息端口 por1
    ipcRenderer.postMessage('render-post-message-to-main', '我是渲染进程一通过 ipcRenderer.postMessage 发送过来的', [
      port1,
    ]);
    // 把 port2 赋值给 portToMain，方便其他模块获取
    let portToMain = port2;
    // port2 绑定事件监听，之后主进程发送的消息都会在这里接收到
    portToMain.onmessage = (event) => {
      // const data = event.data;
      // console.log('[Renderer receive]message', data);
      portToMain.postMessage(resumeCatch);
    };
  };
}

import { app, ipcMain } from 'electron';
import path from 'path';
import fileAction from '@common/utils/file';

// 👇 1. 得到应用程序设置文件的文件夹，然后查看 resumeCache 目录
const resumeCachePath = path.resolve(app.getPath('userData'), 'resumeCache');

// 👇 2 resumeCache 文件夹是否可读
fileAction
  .canRead(resumeCachePath)
  .then(() => {
    // 👇 2.1 resumeCache 可读情况下，判断是否存在 theme.config.json
    fileAction.hasFile(`${resumeCachePath}/index.json`).catch(() => {
      // 2.1.1 不存在则默认创建
      createresumeCacheJson();
    });
  })
  .catch(() => {
    // 👇 2.3 resumeCache 文件夹不可读，说明不存在此文件夹，则新增文件夹
    fileAction.mkdirDir(resumeCachePath).then(() => {
      // 2.3.1 并默认创建文件
      createresumeCacheJson();
    });
  });

// 创建默认 theme.config.json
const createresumeCacheJson = () => {
  fileAction?.write(
    `${resumeCachePath}/index.json`,
    JSON.stringify({
      base: {
        avatar: '',
        username: '陈政晓',
        area: '四川·成都',
        school: '西南石油大学',
        major: '软件工程',
        degree: '本科',
        hometown: '四川',
        onSchoolTime: {
          beginTime: '2021.09',
          endTime: '2025.06',
        },
      },
      contact: {
        phone: '147****7746',
        email: '1930998954@qq.com',
        github: 'https://github.com/Yeatsczx',
        juejin: 'https://juejin.cn/user/237942497623806',
      },
      work: {
        job: '前端工程师',
        city: '上海｜成都｜北京',
        cityList: ['上海', '成都', '北京'],
      },
      skill:
        '熟悉 Vue.js，了解数据双向绑定原理、阅读过 NextTick 源码｜熟悉 React，了解并使用 Hooks 特性，阅读过 redux 源码，开发 rc-redux-model 中间件｜阅读过 Antd 部分优秀组件源码，并参考借鉴，开发组内 UI 组件库｜了解 Vscode，开发组内项目辅助工具 vscode-beehive-extension 插件｜了解 Webpack 编译原理，了解 babel 转码原理，编写过 babel 插件｜了解 Electron，了解 Node.js 以及 Git 团队协作开发工具｜了解设计模式，对于特定场景，能采用合适的设计模式进行解决｜了解 MYSQL，了解数据库优化常用方法｜了解基于微信公众号应用开发，采用 Taro 开发微信小程序，具备良好的网络基础知识',
      skillList: [
        '熟悉 Vue.js，了解数据双向绑定原理、阅读过 NextTick 源码',
        '熟悉 React，了解并使用 Hooks 特性，阅读过 redux 源码，开发 rc-redux-model 中间件',
        '阅读过 Antd 部分优秀组件源码，并参考借鉴，开发组内 UI 组件库',
        '了解 Vscode，开发组内项目辅助工具 vscode-beehive-extension 插件',
        '了解 Webpack 编译原理，了解 babel 转码原理，编写过 babel 插件',
        '了解 Electron，了解 Node.js 以及 Git 团队协作开发工具',
        '了解设计模式，对于特定场景，能采用合适的设计模式进行解决',
        '了解 MYSQL，了解数据库优化常用方法',
        '了解基于微信公众号应用开发，采用 Taro 开发微信小程序，具备良好的网络基础知识',
      ],
      evaluation:
        '具备良好语言表达能力和沟通能力，能快速融入团队，适应新环境|具有代码洁癖，前后端分离，自我学习能力强，对新技术具有钻研精神',
      certificate: '四川xx大赛参与奖',
      certificateList: ['四川xx大赛参与奖'],
      schoolExperience: [
        {
          beginTime: '2021.09',
          endTime: '2022.06',
          post: '文艺部会长',
          department: '校团委学生会',
          content:
            '计划、组织、协调各年级学生组织的文艺和文化娱乐活动｜承办好学生会部的学生文艺晚会。有效地与社团部开展合作项目',
          parseContent: [
            '计划、组织、协调各年级学生组织的文艺和文化娱乐活动',
            '承办好学生会部的学生文艺晚会。有效地与社团部开展合作项目',
          ],
          date: 1621145137865,
        },
      ],
      workExperience: [
        {
          beginTime: '2021.09',
          endTime: '2022.04',
          post: '前端工程师',
          department: '四川xx大学网络中心',
          content:
            '担任xx工作室前端工程师，与四川xx大学网络中心合作，围绕微信企业号开发或主导多个应用｜任职期间基于微信企业号开发校内闲余市场，采用Vue.js主导开发，并与四川xxx科技有限公司合作，主导开发该公司官网及后台管理',
          parseContent: [
            '担任xx工作室前端工程师，与四川xx大学网络中心合作，围绕微信企业号开发或主导多个应用',
            '任职期间基于微信企业号开发校内闲余市场，采用Vue.js主导开发，并与四川xxx科技有限公司合作，主导开发该公司官网及后台管理',
          ],
          date: 1621145137865,
        },
      ],
      projectExperience: [
        {
          beginTime: '2021.03',
          endTime: '2021.05',
          projectName: 'visResumeMook 可视化简历平台',
          post: '前端工程师',
          content:
            'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版｜通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档｜通过 indexDB 方式实现历史简历缓存，通过可视化拖拽形式，自定义组件模版',
          parseContent: [
            'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版',
            '通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档',
            '通过 indexDB 方式实现历史简历缓存，通过可视化拖拽形式，自定义组件模版',
          ],
          date: 1621145137865,
        },
      ],
    }),
    'utf8'
  );
};

// 👇 响应渲染进程想得到的 userData 路径，因为 app 模块只能在主进程中使用
ipcMain.on('Electron:get-userData-path', (event, arg) => {
  event.reply('Electron:reply-userData-path', app.getPath('userData'));
});

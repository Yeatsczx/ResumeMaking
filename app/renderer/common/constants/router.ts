// 模块路径
const ROUTER = {
  root: '/',
  resume: '/resume/:fromPath/:templateId/:templateIndex', // /来源/模版ID/模版索引
  templateList: '/templateList',
};
export default ROUTER;

export const ROUTER_KEY = {
  root: 'root',
  resume: 'resume',
  templateList: 'templateList',
};

// 入口模块，TS 定义类型必须为 TSRouter.Item
export const ROUTER_ENTRY: TSRouter.Item[] = [
  {
    url: 'https://github.com/Yeatsczx/ResumeMaking',
    key: 'intro',
    text: '介绍',
  },
  {
    url: ROUTER.resume,
    key: ROUTER_KEY.resume,
    text: '简历',
  },
  {
    url: ROUTER.templateList,
    key: ROUTER_KEY.templateList,
    text: '模版',
  },
  {
    url: 'https://github.com/Yeatsczx/ResumeMaking',
    key: 'code',
    text: '源码',
  },
];

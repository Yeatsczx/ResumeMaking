module.exports = {
  presets: [
    '@babel/preset-env', // 一个智能预设,根据配置的目标浏览器或者运行环境，选择对应的语法包，从而将代码进行转换
    ['@babel/preset-react', { runtime: 'automatic' }], // 一个用来编译 React jsx 语法的预设, react 语法包
    '@babel/preset-typescript', // 一个用来编译 TypeScript 语法的预设
  ],
  plugins: [
    '@babel/plugin-transform-runtime', // 方便使用 babel-runtime,自动引入所需polyfill
    [
      '@babel/plugin-transform-modules-commonjs', // 将 ECMAScript modules 转成 CommonJS.
      {
        allowTopLevelThis: true,
        lazy: true, // 延迟初始化依赖项,改善模块的初始加载时间
      },
    ],
  ],
};

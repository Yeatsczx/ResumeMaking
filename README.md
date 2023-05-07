# ResumeMaking
简历平台桌面应用   
 •  简介：一款轻巧适用的简历平台桌面应用，用户可使用软件提供的模板编写简历并导出 PDF 文件。

 •  难点：1. 利用 Node.js 操作电脑本地文件实现持久性数据存储并且利用本地文件存储实现了简历数据的记忆功能。

          2. 利用 render props 抽离通用逻辑，封装组件，组件只需传入数据源与更新数据的方法，实现表单复杂数据的录入。

 •  特色：1. 自定义组件，自定义了 ReButton、ReInput、ReModal、ReUpload 等组件，实现功能通用。

          2. 自定义 Hooks，定义多个公共 Hooks，例如 Redux 数据的更新。

          3. 利用 Webpack 自定义搭建运行环境，利用 cache 缓存编译结果等配置提升打包构建速度近 10 倍，优化代码性能。

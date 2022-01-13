# mishuweb-tamplate

项目地址：[msc-template-test](https://github.com/mishuweb-cli/msc-template-test)

脚手架：[mishuweb-cli](https://github.com/XueWenPeng/mishuweb-cli)

## 项目介绍

一个高度自由配置的 `webpack5 + react17 + typescript` 前端项目模板。

在开发层面，配置了 eslint-airbnb、stylelint、prettier 规范，并设置了 pre-commit 提交校验让不同的开发者的代码在提交之后能保持相同的风格；

在业务代码层面，初始只使用了 react、react-router、axios 三个依赖，后续开发依赖完全随心所欲；

在生产层面，配置了缓存、代码压缩、分包来提升构建性能和压缩打包体积，配置了打包分析工具

相关配置可根据需求自由更改。

### 开发环境配置

`开发服务：` webpack-dev-server

`格式与规范：` eslint， eslint-config-airbnb， prettier， stylelint， pre-commit

`业务代码：` typescript， react, react-router, axios, sass

### 生产环境配置

`打包` mini-css-extract， terser， splitChunks

## 项目开发

`npm run dev` 启动 webpackDevServer，通过[localhost:2333](http://localhost:2333/)访问

`npm run lint` 执行代码检查

`npm run build` 打包代码

`npm run changelog` 生成提交记录文档

### 项目结构

```js
├── .vscode
│   └── setting.json // vscode编辑器配置，例如：保存自动格式化代码
├── public
│   ├── favicon.ico // 项目图标
│   └── index.html // 项目模板文件
├── script // webpack 配置目录
│   ├── config
|   │   ├── webpack.common.js // webpack 通用配置
|   │   ├── webpack.dev.js // webpack 开发环境配置
|   │   └── webpack.prod.js // webpack 生产环境配置
│   ├── server
|   │   ├── chooseport.js // webpackDevServer 端口配置
|   │   ├── index.js // webpackDevServer 启动文件
|   │   └── logger.js // webpackDevServer 控制台输出信息
│   ├── conf.js // webpack 配置常量
│   ├── env.js // 环境变量
│   └── paths.js // 路径相关配置
├── src // 项目主目录
│   ├── api // 请求相关
|   │   ├── config.ts // axios通用配置
|   │   ├── request.ts // axios请求封装
|   │   └── utils.ts // 请求的错误处理、方法
│   ├── components // 通用组件目录
|   │   └── ...
│   ├── pages // 业务组件目录
│   │   └── ...
│   ├── routes // 路由
|   │   ├── config.ts // 路由配置
|   │   └── index.tsx // 渲染路由（使用React.lazy懒加载）
│   ├── typings
|   │   └── index.d.ts // ts公共类型文件
│   ├── utils // 公共方法
|   │   └── index.ts
│   ├── App.scss // 公共样式
│   ├── App.tsx // 路由、状态管理、国际化等顶层组件
│   ├── index.tsx // 项目入口文件
├── .babelrc.js // babel配置
├── .commitlintrc.js // commitlint配置
├── .editorconfig // vscode 编辑配置（需要配合EditorConfig for VS Code插件使用）
├── .eslintignore // eslint校验不生效的文件配置
├── .eslintrc.js // eslint配置
├── .gitignore // git不检查的文件配置
├── .npmrc // npm配置
├── .prettierignore // prettier格式校验不生效的文件配置
├── .prettierrc // prettier格式校验配置
├── .stylelintrc.js // stylelint配置
├── package.json // 项目配置
├── README.md // 项目介绍文档
├── tsconfig.json // typescript配置
```

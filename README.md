# vue-music

> 模仿QQ音乐、网易云音乐打造的Vue2.x移动端音乐播放器

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
``` bash
技术栈
Vue全家桶（构建工具Vue-cli，vue-router路由,vuex状态管理，vue-resource）

Webpack

Es6

Stylus

Axios

jsonp
```

``` bash
项目结构
|-- build                            // webpack配置文件
|-- config                           // 项目打包路径
|-- src                              // 源码目录 
|   |-- api                          // QQ音乐Api文件
|       |-- index.js                 
|   |-- base                         // 基础组件
|       |-- confirm                  // 确认
|       |-- listview                 // 列表
|       |-- loading                  // 加载
|       |-- no-result                // 暂无结果
|       |-- progress-bar             // 进度条
|       |-- progress-circle          // 进度圆
|       |-- scroll                   // 滚动
|       |-- search-box               // 搜索框
|       |-- search-list              // 搜索列表
|       |-- slider                   // 轮播图
|       |-- songlist                 // 歌曲列表
|       |-- switches                 // 切换
|       |-- top-tip                  // 顶部提醒
|    |-- common                       // 公共部分
|       |-- fonts                    // 字体图标
|       |-- image                    // 图片
|       |-- js                       // 基础js
|       |-- stylus                   // 预处理css
|   |-- components                   // 业务组件
|       |-- add-song.vue             // 添加歌曲
|       |-- disc.vue                 // 详情
|       |-- my-header.vue            // 头部界面
|       |-- music-list.vue           // 歌曲列表
|       |-- player.vue               // 播放器
|       |-- playlist.vue             // 播放列表
|       |-- rank.vue                 // 歌曲排行
|       |-- recommend.vue            // 歌曲推荐
|       |-- search.vue               // 搜索
|       |-- singer.vue               // 歌手界面
|       |-- singer-detail.vue        // 歌手详情
|       |-- suggest.vue              // 搜索结果列表
|       |-- tab.vue                  // 切换
|       |-- top-list.vue             // 排行
|       |-- user-center.vue          // 用户中心
|   |-- router                       // Vue 路由
|       |-- index.js
|   |-- store                        // Vuex Store文件
|       |-- index.js       
|       |-- state.js       
|       |-- mutation-types.js       
|       |-- mutations.js       
|       |-- actions.js       
|       |-- getters.js                  
|   |-- App.vue                      // App入口文件
|   |-- main.js                      // 程序入口文件，加载Vuex,Vue-router等插件
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 代码编写规格
|-- .eslintignore                    // Eslint 忽略的文件
|-- .eslintrc.js                     // EsLint 配置 暂未使用 
|-- .gitignore                       // git ingnore
|-- .postcssrc.js                    // post css 配置文件
|-- README.md                        // README
|-- index.html                       // 入口html文件
|-- package.json                     // 项目及工具的依赖配置文件
```

import{_ as s,o as a,c as t,U as o}from"./chunks/framework.4c05f43b.js";const h=JSON.parse('{"title":"接口的组成","description":"","frontmatter":{},"headers":[],"relativePath":"Node/接口-json-server.md","filePath":"Node/接口-json-server.md"}'),n={name:"Node/接口-json-server.md"},l=o(`<h1 id="接口的组成" tabindex="-1">接口的组成 <a class="header-anchor" href="#接口的组成" aria-label="Permalink to &quot;接口的组成&quot;">​</a></h1><p>一个接口一般由如下几个部分组成</p><ul><li>请求方法</li><li>接口地址（URL）</li><li>请求参数</li><li>响应结果</li></ul><p>一个接口示例 <a href="https://gitee.com/link?target=https%3A%2F%2Fwww.free-api.com%2Fdoc%2F325" target="_blank" rel="noreferrer">https://www.free-api.com/doc/325</a> 体验一下： <a href="https://gitee.com/link?target=https%3A%2F%2Fapi.asilu.com%2Fidcard%2F%3Fid%3D371522199111299668" target="_blank" rel="noreferrer">https://api.asilu.com/idcard/?id=371522199111299668</a></p><h2 id="restful-api" tabindex="-1">RESTful API <a class="header-anchor" href="#restful-api" aria-label="Permalink to &quot;RESTful API&quot;">​</a></h2><p>RESTful API 是一种特殊风格的接口，主要特点有如下几个：</p><ul><li>URL 中的路径表示 资源，路径中不能有 动词，例如create , delete , update 等这些都不能有</li><li>操作资源要与 HTTP 请求方法 对应</li><li>操作结果要与 HTTP 响应状态码 对应</li></ul><p>规则示例：</p><table><thead><tr><th><strong>操作</strong></th><th><strong>请求类型</strong></th><th><strong>URL</strong></th><th><strong>返回</strong></th></tr></thead><tbody><tr><td>新增歌曲</td><td>POST</td><td>/song</td><td>返回新生成的歌曲信息</td></tr><tr><td>删除歌曲</td><td>DELETE</td><td>/song/10</td><td>返回一个空文档</td></tr><tr><td>修改歌曲</td><td>PUT</td><td>/song/10</td><td>返回更新后的歌曲信息</td></tr><tr><td>修改歌曲</td><td>PATCH</td><td>/song/10</td><td>返回更新后的歌曲信息</td></tr><tr><td>获取所有歌曲</td><td>GET</td><td>/song</td><td>返回歌曲列表数组</td></tr><tr><td>获取单个歌曲</td><td>GET</td><td>/song/10</td><td>返回单个歌曲信息</td></tr></tbody></table><p>扩展阅读： <a href="https://gitee.com/link?target=https%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2014%2F05%2Frestful_api.html" target="_blank" rel="noreferrer">https://www.ruanyifeng.com/blog/2014/05/restful_api.html</a></p><h2 id="json-server" tabindex="-1">json-server <a class="header-anchor" href="#json-server" aria-label="Permalink to &quot;json-server&quot;">​</a></h2><p>json-server 本身是一个 JS 编写的工具包，可以快速搭建 RESTful API 服务 官方地址: <a href="https://gitee.com/link?target=https%3A%2F%2Fgithub.com%2Ftypicode%2Fjson-server" target="_blank" rel="noreferrer">https://github.com/typicode/json-server</a> 操作步骤：</p><ul><li>全局安装 json-server</li></ul><p><code>npm i -g json-server</code></p><ul><li>创建 JSON 文件（db.json），编写基本结构</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">song</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">干杯</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">singer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">五月天</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">当</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">singer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">动力火车</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">不能说的秘密</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">singer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">周杰伦</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">	]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ul><li>以 JSON 文件所在文件夹作为工作目录，执行如下命令</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">json</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">watch db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span></code></pre></div><p>默认监听端口为 3000</p><h2 id="接口测试工具" tabindex="-1">接口测试工具 <a class="header-anchor" href="#接口测试工具" aria-label="Permalink to &quot;接口测试工具&quot;">​</a></h2><p>介绍几个接口测试工具 apipost <a href="https://gitee.com/link?target=https%3A%2F%2Fwww.apipost.cn%2F" target="_blank" rel="noreferrer">https://www.apipost.cn/</a> (中文) apifox <a href="https://gitee.com/link?target=https%3A%2F%2Fwww.apifox.cn%2F" target="_blank" rel="noreferrer">https://www.apifox.cn/</a> (中文) postman <a href="https://gitee.com/link?target=https%3A%2F%2Fwww.postman.com%2F" target="_blank" rel="noreferrer">https://www.postman.com/</a> (英文)</p><p>接口文档生成 <a href="https://www.bilibili.com/video/BV1gM411W7ex?p=160" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1gM411W7ex?p=160</a></p>`,22),p=[l];function e(r,c,F,i,D,y){return a(),t("div",null,p)}const u=s(n,[["render",e]]);export{h as __pageData,u as default};

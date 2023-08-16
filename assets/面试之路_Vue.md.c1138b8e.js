import{_ as a,o as e,c as s,U as n}from"./chunks/framework.4c05f43b.js";const C=JSON.parse('{"title":"Vue面试题","description":"","frontmatter":{},"headers":[],"relativePath":"面试之路/Vue.md","filePath":"面试之路/Vue.md"}'),t={name:"面试之路/Vue.md"},l=n(`<h1 id="vue面试题" tabindex="-1">Vue面试题 <a class="header-anchor" href="#vue面试题" aria-label="Permalink to &quot;Vue面试题&quot;">​</a></h1><p><img src="https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230810/image.3no67a0sxhm0.webp" alt="alt"></p><h2 id="一、vue-基础" tabindex="-1">一、Vue 基础 <a class="header-anchor" href="#一、vue-基础" aria-label="Permalink to &quot;一、Vue 基础&quot;">​</a></h2><h3 id="_1-vue的基本原理" tabindex="-1">1. Vue的基本原理 <a class="header-anchor" href="#_1-vue的基本原理" aria-label="Permalink to &quot;1. Vue的基本原理&quot;">​</a></h3><p>当一个Vue实例创建时，Vue会遍历data中的属性，用 Object.defineProperty（vue3.0使用proxy ）将它们转为 getter/setter，并且在内部追踪相关依赖，在属性被访问和修改时通知变化。 每个组件实例都有相应的 watcher 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的setter被调用时，会通知watcher重新计算，从而致使它关联的组件得以更新。</p><p><img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1678713141767-719a328a-c3dc-43d0-af9b-cabf82dc7dd7.png#averageHue=%23f5dc96&amp;clientId=ub2e1406f-05ee-4&amp;from=paste&amp;height=483&amp;id=u50561b78&amp;originHeight=589&amp;originWidth=946&amp;originalType=binary&amp;ratio=1.2200000286102295&amp;rotation=0&amp;showTitle=false&amp;size=189225&amp;status=done&amp;style=none&amp;taskId=u4117aba6-c590-45d3-881c-12d6bf8702b&amp;title=&amp;width=775.4098178814321" alt="image.png"></p><h3 id="_2-双向数据绑定的原理" tabindex="-1">2. 双向数据绑定的原理 <a class="header-anchor" href="#_2-双向数据绑定的原理" aria-label="Permalink to &quot;2. 双向数据绑定的原理&quot;">​</a></h3><p>版本1 Vue.js 是采用<strong>数据劫持</strong>结合<strong>观察者模式</strong>的方式，通过 Object.defineProperty() 来劫持各个属性的setter，getter，在数据变动时发布消息给观察者，触发相应的监听回调。Watcher调用 组件中的 render函数 去生成虚拟DOM 对比老的DOM 通过diff算法以最小的代价更新DOM节点 是页面实现更新</p><p>版本2 Object.defineProperty() 里的方法 setter与getter方法的观察者模式来实现 一旦属性发生了变化 setter，getter 方法通调用Watcher(观察者) ,Watcher调用 组件中的 render函数 去生成虚拟DOM 对比老的DOM 通过diff算法以最小的代价更新DOM节点 是页面实现更新</p><h1 id="proxy的优势如下" tabindex="-1">proxy的优势如下 <a class="header-anchor" href="#proxy的优势如下" aria-label="Permalink to &quot;proxy的优势如下&quot;">​</a></h1><ul><li>Proxy 可以直接监听对象而非属性，可以直接监听数组的变化；</li><li>Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；</li><li>Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；</li></ul><h2 id="vue组件通信" tabindex="-1">Vue组件通信 <a class="header-anchor" href="#vue组件通信" aria-label="Permalink to &quot;Vue组件通信&quot;">​</a></h2><p>父子组件之间的通信 兄弟组件之间的通信 祖孙与后代组件之间的通信 非关系组件间之间的通信</p><p>常用的组件通信一共有8种</p><ol><li>通过 props 传递</li><li>通过 $emit 触发自定义事件</li><li>使用 ref</li><li>EventBus</li><li>$parent 或$root</li><li>attrs 与 listeners</li><li>Provide 与 Inject</li><li>Vuex</li></ol><h2 id="父传子" tabindex="-1">父传子 <a class="header-anchor" href="#父传子" aria-label="Permalink to &quot;父传子&quot;">​</a></h2><p>props 在父组件上传一些属性和值，然后子组件进行接收 Father.vue组件</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Children</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jack</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">age</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">18</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><p>Children.vue</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const props = defineProps({</span></span>
<span class="line"><span style="color:#A6ACCD;">// 字符串形式</span></span>
<span class="line"><span style="color:#A6ACCD;">name:String // 接收的类型参数</span></span>
<span class="line"><span style="color:#A6ACCD;">// 对象形式</span></span>
<span class="line"><span style="color:#A6ACCD;">age:{</span></span>
<span class="line"><span style="color:#A6ACCD;">type:Number, // 接收的类型为数值</span></span>
<span class="line"><span style="color:#A6ACCD;">defaule:18, // 默认值为18</span></span>
<span class="line"><span style="color:#A6ACCD;">require:true // age属性必须传递</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span></code></pre></div><h2 id="子传父" tabindex="-1">子传父 <a class="header-anchor" href="#子传父" aria-label="Permalink to &quot;子传父&quot;">​</a></h2><p><code>$emit</code> 触发自定义事件 子组件通过<code>$emit</code>触发自定义件，<code>$emit</code>第二个参数为传递的数值，父组件绑定监听器获取到子组件传递过来的参数 Children.vue</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$emit</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">add</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> good)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> add </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span></code></pre></div><p>Father.vue</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Children</span><span style="color:#89DDFF;"> @add=&quot;cartAdd($event)&quot; /&gt;</span></span></code></pre></div><h2 id="ref" tabindex="-1">$ref <a class="header-anchor" href="#ref" aria-label="Permalink to &quot;$ref&quot;">​</a></h2><h2 id="登录权限" tabindex="-1">登录权限 <a class="header-anchor" href="#登录权限" aria-label="Permalink to &quot;登录权限&quot;">​</a></h2><p>首先,在路由配置中设置meta: { requireAuth: true } 表示需要认证才能访问 之后再路由守卫中</p><div class="language-Vue"><button title="Copy Code" class="copy"></button><span class="lang">Vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 路由守卫，登录判断，以及主子页面之间的切换</span></span>
<span class="line"><span style="color:#A6ACCD;">router.beforeEach((to, from, next) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">const { requiredLogin } = to.meta;</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span></code></pre></div><p>然后再从本地存储localstore中获取login，看看用户有没有登录，如果登录了，则能获取到login且为真，之后放行，执行next,如果不能获取，则表示用户没有登录，那么就跳转到登录页面</p><div class="language-Vue"><button title="Copy Code" class="copy"></button><span class="lang">Vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">router.beforeEach((to, from, next) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">const { requiredLogin } = to.meta;</span></span>
<span class="line"><span style="color:#A6ACCD;">const isLogin = localStorage.getItem(&quot;isLogin&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">// 判断是否已经登录并是否页面需要登录权限，如果是，跳转到登录页面，若否，则放行</span></span>
<span class="line"><span style="color:#A6ACCD;">if (!isLogin &amp;&amp; requiredLogin) {</span></span>
<span class="line"><span style="color:#A6ACCD;">next(&quot;login&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">} else {</span></span>
<span class="line"><span style="color:#A6ACCD;">next();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span></code></pre></div><p>用户登录状态的持久化: 当用户登录成功后，将用户的身份标识或认证令牌存储在 localStorage中。这样，在用户刷新页面或重新打开应用时，可以检查localStorage中是否存在有效的登录信息，从而保持用户的登录状态。</p><h2 id="登录中如果token失效了-你是怎么处理的" tabindex="-1">登录中如果token失效了，你是怎么处理的 <a class="header-anchor" href="#登录中如果token失效了-你是怎么处理的" aria-label="Permalink to &quot;登录中如果token失效了，你是怎么处理的&quot;">​</a></h2><p>1.清除失效的token：localStorage.removeItem(&#39;token&#39;)</p><p>在前端，你可以清除本地存储（例如localStorage或sessionStorage）中的token以及与之相关的任何认证信息。这可以通过调用相应的方法（如localStorage.removeItem(&#39;token&#39;)）来实现。</p><ol start="2"><li>重定向到登录页：redirect</li><li>提示用户重新登录</li></ol><h2 id="pinia-和-vuex-的区别" tabindex="-1">Pinia 和 Vuex 的区别 <a class="header-anchor" href="#pinia-和-vuex-的区别" aria-label="Permalink to &quot;Pinia 和 Vuex 的区别&quot;">​</a></h2><p>Pinia和Vuex--状态管理库</p><p>使得 在vue开发中可以分成<strong>数据流</strong>开发和<strong>UI组件</strong>开发两部分<br> 区别：<br> 在Vuex中，你需要定义state、mutations、actions和getters来管理状态。 而在Pinia 中，你只需要定义一个类似state的响应式对象，和用一些方法来代替actions、 mutations和getters这些复杂的方法。</p><h2 id="ref-和-reactive" tabindex="-1">ref 和 reactive <a class="header-anchor" href="#ref-和-reactive" aria-label="Permalink to &quot;ref 和 reactive&quot;">​</a></h2><p>ref 将 <strong>静态值</strong> 变为 响应式对象 reactive 将<strong>对象</strong> 变为 响应式对象</p>`,41),o=[l];function p(r,i,c,d,u,h){return e(),s("div",null,o)}const g=a(t,[["render",p]]);export{C as __pageData,g as default};

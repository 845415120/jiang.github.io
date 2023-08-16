import{_ as t,r as p,o as e,c as o,b as n,d as s,e as l,a as c}from"./app-03f59e97.js";const i={},u=c(`<h1 id="jsx基础" tabindex="-1"><a class="header-anchor" href="#jsx基础" aria-hidden="true">#</a> JSX基础</h1><h2 id="_1-jsx介绍" tabindex="-1"><a class="header-anchor" href="#_1-jsx介绍" aria-hidden="true">#</a> 1. JSX介绍</h2><p><code>目标任务:</code>   能够理解什么是JSX，JSX的底层是什么</p><p>概念：JSX是 JavaScript XML（HTML）的缩写，表示在 JS 代码中书写 HTML 结构 作用：在React中创建HTML结构（页面UI结构） 优势：</p><ol><li>采用类似于HTML的语法，降低学习成本，会HTML就会JSX</li><li>充分利用JS自身的可编程能力创建HTML结构</li></ol><p>注意：JSX 并不是标准的 JS 语法，是 JS 的语法扩展，浏览器默认是不识别的，脚手架中内置的 <a href="@babel/plugin-transform-react-jsx">@babel/plugin-transform-react-jsx</a> 包，用来解析该语法 <img src="https://cdn.nlark.com/yuque/0/2022/png/274425/1654489661908-d354840e-78b8-43ad-a882-8129742c794e.png?x-oss-process=image%2Fresize%2Cw_915%2Climit_0#averageHue=%23fbf6f5&amp;from=url&amp;id=ArGPj&amp;originHeight=576&amp;originWidth=915&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""></p><h2 id="_2-jsx中使用js表达式" tabindex="-1"><a class="header-anchor" href="#_2-jsx中使用js表达式" aria-hidden="true">#</a> 2. JSX中使用js表达式</h2><p><code>目标任务:</code>   能够在JSX中使用表达式 <strong>语法</strong><code>{ JS 表达式 }</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;柴柴&#39;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">你好，我叫</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>   <span class="token comment">//    &lt;h1&gt;你好,我叫柴柴&lt;/h1&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可以使用的表达式</strong></p><ol><li>字符串、数值、布尔值、null、undefined、object（ [] / {} ）</li><li>1 + 2、&#39;abc&#39;.split(&#39;&#39;)、[&#39;a&#39;, &#39;b&#39;].join(&#39;-&#39;)</li><li>fn()</li></ol><p><strong>特别注意</strong></p><blockquote><p>if 语句/ switch-case 语句/ 变量声明语句，这些叫做语句，不是表达式，不能出现在 <code>{}</code> 中！！</p></blockquote><h2 id="_3-jsx列表渲染" tabindex="-1"><a class="header-anchor" href="#_3-jsx列表渲染" aria-hidden="true">#</a> 3. JSX列表渲染</h2><p><code>目标任务:</code>   能够在JSX中实现列表渲染</p><blockquote><p>页面的构建离不开重复的列表结构，比如歌曲列表，商品列表等，我们知道vue中用的是v-for，react这边如何实现呢？</p></blockquote><p>实现：使用数组的<code>map</code> 方法</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// 来个列表</span>
<span class="token keyword">const</span> songs <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;痴心绝对&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;像我这样的人&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;南山南&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>App<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>
          songs<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意点：需要为遍历项添加 <code>key</code> 属性 <img src="https://cdn.nlark.com/yuque/0/2022/png/274425/1654489746660-d500357d-1e62-4016-a25f-d36594fdfead.png#averageHue=%23321011&amp;clientId=u3ca1a750-0855-4&amp;from=drop&amp;id=u1dd4d571&amp;originHeight=165&amp;originWidth=1540&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=26391&amp;status=done&amp;style=none&amp;taskId=u489fab30-8418-4a9e-833a-daecda16bef&amp;title=" alt="jsx03.png"></p><ol><li>key 在 HTML 结构中是看不到的，是 React 内部用来进行性能优化时使用</li><li>key 在当前列表中要唯一的字符串或者数值（String/Number）</li><li>如果列表中有像 id 这种的唯一值，就用 id 来作为 key 值</li><li>如果列表中没有像 id 这种的唯一值，就可以使用 index（下标）来作为 key 值</li></ol><h2 id="_4-jsx条件渲染" tabindex="-1"><a class="header-anchor" href="#_4-jsx条件渲染" aria-hidden="true">#</a> 4. JSX条件渲染</h2><p><code>目标任务:</code>   能够在JSX中实现条件渲染</p><p>作用：根据是否满足条件生成HTML结构，比如Loading效果 实现：可以使用 <code>三元运算符</code> 或   <code>逻辑与(&amp;&amp;)运算符</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// 来个布尔值</span>
<span class="token keyword">const</span> flag <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>App<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token comment">/* 条件渲染字符串 */</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token punctuation">{</span>flag <span class="token operator">?</span> <span class="token string">&#39;react真有趣&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;vue真有趣&#39;</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token comment">/* 条件渲染标签/组件 */</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token punctuation">{</span>flag <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">this is span</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-jsx样式处理" tabindex="-1"><a class="header-anchor" href="#_5-jsx样式处理" aria-hidden="true">#</a> 5. JSX样式处理</h2><p><code>目标任务:</code>   能够在JSX中实现css样式处理</p><ul><li>行内样式 - style</li></ul><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>App<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">this is a div</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>行内样式 - style - 更优写法</li></ul><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">const</span> styleObj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span>red
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>App<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span> styleObj <span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">this is a div</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>类名 - className（推荐）</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.title</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>类名 - className - 动态类名控制</li></ul><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token string">&#39;./app.css&#39;</span>
<span class="token keyword">const</span> showTitle <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>App<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span> showTitle <span class="token operator">?</span> <span class="token string">&#39;title&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">this is a div</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-jsx注意事项" tabindex="-1"><a class="header-anchor" href="#_6-jsx注意事项" aria-hidden="true">#</a> 6. JSX注意事项</h2><p><code>目标任务:</code>   掌握JSX在实际应用时的注意事项</p><ol><li>JSX必须有一个根节点，如果没有根节点，可以使用<code>&lt;&gt;&lt;/&gt;</code>（幽灵节点）替代</li><li>所有标签必须形成闭合，成对闭合或者自闭合都可以</li><li>JSX中的语法更加贴近JS语法，属性名采用驼峰命名法  <code>class -&gt; className</code>  <code>for -&gt; htmlFor</code></li><li>JSX支持多行（换行），如果需要换行，需使用<code>()</code> 包裹，防止bug出现</li></ol><h2 id="格式化配置" tabindex="-1"><a class="header-anchor" href="#格式化配置" aria-hidden="true">#</a> 格式化配置</h2><p><code>目标任务:</code>   基于vscode配置格式化工具，提高开发效率</p><ol><li>安装vsCode prettier插件</li><li>修改配置文件 <code>setting.json</code></li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;git.enableSmartCommit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 修改注释颜色</span>
  <span class="token property">&quot;editor.tokenColorCustomizations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;comments&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;fontStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#82e0aa&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 配置文件类型识别</span>
  <span class="token property">&quot;files.associations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;*.js&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;*.json&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jsonc&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;*.cjson&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jsonc&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;*.wxss&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;*.wxs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;extensions.ignoreRecommendations&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files.exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;**/.DS_Store&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;**/.git&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;**/.hg&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;**/.svn&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;**/CVS&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;**/node_modules&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;**/tmp&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// &quot;javascript.implicitProjectConfig.experimentalDecorators&quot;: true,</span>
  <span class="token property">&quot;explorer.confirmDragAndDrop&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript.updateImportsOnFileMove.enabled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prompt&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;git.confirmSync&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.tabSize&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.fontWeight&quot;</span><span class="token operator">:</span> <span class="token string">&quot;500&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[json]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.tabCompletion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;vsicons.projectDetection.autoReload&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Monaco, &#39;Courier New&#39;, monospace, Meslo LG M for Powerline&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[html]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.html-language-features&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  <span class="token property">&quot;debug.console.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
  <span class="token property">&quot;vsicons.dontShowNewVersionMessage&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.minimap.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;emmet.extensionsPath&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// vue eslint start 保存时自动格式化代码</span>
  <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// eslint配置项，保存时自动修复错误</span>
  <span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;source.fixAll&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;vetur.ignoreProjectWarning&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 让vetur使用vs自带的js格式化工具</span>
  <span class="token comment">// uni-app和vue 项目使用</span>
  <span class="token property">&quot;vetur.format.defaultFormatter.js&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode-typescript&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;javascript.format.semicolons&quot;</span><span class="token operator">:</span> <span class="token string">&quot;remove&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// // 指定 *.vue 文件的格式化工具为vetur</span>
  <span class="token property">&quot;[vue]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;octref.vetur&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// // 指定 *.js 文件的格式化工具为vscode自带</span>
  <span class="token property">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.typescript-language-features&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// // 默认使用prettier格式化支持的文件</span>
  <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;prettier.jsxBracketSameLine&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 函数前面加个空格</span>
  <span class="token property">&quot;javascript.format.insertSpaceBeforeFunctionParenthesis&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;prettier.singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;prettier.semi&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// eslint end</span>
  <span class="token comment">// react</span>
  <span class="token comment">// 当按tab键的时候，会自动提示</span>
  <span class="token property">&quot;emmet.triggerExpansionOnTab&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;emmet.showAbbreviationSuggestions&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;emmet.includeLanguages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// jsx的提示</span>
    <span class="token property">&quot;javascript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vue-html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;wxml&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// end</span>
  <span class="token property">&quot;[jsonc]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.json-language-features&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// @路径提示</span>
  <span class="token property">&quot;path-intellisense.mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceRoot}/src&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;security.workspace.trust.untrustedFiles&quot;</span><span class="token operator">:</span> <span class="token string">&quot;open&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;git.ignoreMissingGitWarning&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;window.zoomLevel&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="阶段小练习" tabindex="-1"><a class="header-anchor" href="#阶段小练习" aria-hidden="true">#</a> 阶段小练习</h2><p><img src="https://cdn.nlark.com/yuque/0/2022/png/274425/1654489923710-91b3abce-8f29-4550-9a3d-ff11f70efa55.png#averageHue=%23fdfcfc&amp;clientId=u3ca1a750-0855-4&amp;from=drop&amp;id=u6511f26b&amp;originHeight=342&amp;originWidth=787&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=23104&amp;status=done&amp;style=none&amp;taskId=ua322cfaa-8d30-46f4-8b96-864021a1b85&amp;title=" alt="jsx-demo.png"></p><p>练习说明</p>`,44),r={href:"https://gitee.com/react-course-series/react-jsx-demo",target:"_blank",rel:"noopener noreferrer"},d=n("li",null,[s("按照图示，完成 "),n("code",null,"评论数据渲染"),s("  "),n("code",null,"tab内容渲染"),s("  "),n("code",null,"评论列表点赞和点踩"),s("  三个视图渲染")],-1);function k(v,m){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,n("ol",null,[n("li",null,[s("拉取准备好的项目模块到本地 ，安装依赖，run起来项目 "),n("a",r,[s("https://gitee.com/react-course-series/react-jsx-demo"),l(a)])]),d])])}const g=t(i,[["render",k],["__file","02-JSX基础.html.vue"]]);export{g as default};

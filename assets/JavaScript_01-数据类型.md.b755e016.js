import{_ as s,o as a,c as l,U as n}from"./chunks/framework.4c05f43b.js";const C=JSON.parse('{"title":"数据类型","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/01-数据类型.md","filePath":"JavaScript/01-数据类型.md"}'),o={name:"JavaScript/01-数据类型.md"},e=n(`<h1 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h1><ul><li><strong>基本数据类型（值类型）</strong>：String 字符串、Number 数值、BigInt 大型数值(number类型无法安全地表示大于 (253-1)、Boolean 布尔值、Null 空值、Undefined 未定义、Symbol(用于创建对象的唯一标识符)。</li><li><strong>引用数据类型（引用类型）</strong>：Object 对象。</li></ul><h3 id="栈内存和堆内存" tabindex="-1">栈内存和堆内存 <a class="header-anchor" href="#栈内存和堆内存" aria-label="Permalink to &quot;栈内存和堆内存&quot;">​</a></h3><p>JS 中，所有的<strong>变量</strong>都是保存在<strong>栈内存</strong>中的。</p><ul><li><strong>基本数据类型：</strong></li></ul><p>基本数据类型的值，直接保存在栈内存中。值与值之间是独立存在，修改一个变量不会影响其他的变量。</p><ul><li><strong>引用数据类型：</strong></li></ul><p>对象是保存到<strong>堆内存</strong>中的。每创建一个新的对象，就会在堆内存中开辟出一个新的空间；而<strong>变量保存了对象的内存地址</strong>（对象的引用），保存在栈内存当中。如果两个变量保存了同一个对象的引用，当一个通过一个变量修改属性时，另一个也会受到影响。</p><h2 id="_1-字符串-string" tabindex="-1">1.字符串 String <a class="header-anchor" href="#_1-字符串-string" aria-label="Permalink to &quot;1.字符串 String&quot;">​</a></h2><h3 id="_1-语法" tabindex="-1">(1)语法 <a class="header-anchor" href="#_1-语法" aria-label="Permalink to &quot;(1)语法&quot;">​</a></h3><p>字符串型可以是引号中的任意文本，其语法为：双引号 <code>&quot;&quot;</code> 或者单引号 <code>&#39;&#39;</code>。</p><h2 id="字符串的扩展" tabindex="-1">字符串的扩展 <a class="header-anchor" href="#字符串的扩展" aria-label="Permalink to &quot;字符串的扩展&quot;">​</a></h2><ul><li>includes(str)：判断是否包含指定的字符串</li><li>startsWith(str)：判断是否以指定字符串开头</li><li>endsWith(str)：判断是否以指定字符串结尾</li><li>repeat(count)：重复指定次数</li></ul><h3 id="_2-字符串转义符" tabindex="-1">(2)字符串转义符 <a class="header-anchor" href="#_2-字符串转义符" aria-label="Permalink to &quot;(2)字符串转义符&quot;">​</a></h3><p>类似HTML里面的特殊字符，字符串中也有特殊字符，我们称之为转义符转义符都是\\开头的，常用的转义符及其说明如下：</p><table><thead><tr><th>转义符</th><th>解释说明</th></tr></thead><tbody><tr><td><code>\\\\n</code></td><td>换行符， n是 newline 的意思</td></tr><tr><td><code>\\\\\\\\</code></td><td>\\</td></tr><tr><td><code>\\\\&#39;</code></td><td>单引号&#39;</td></tr><tr><td><code>\\\\&quot;</code></td><td>双引号&quot;</td></tr><tr><td><code>\\\\t</code></td><td>tab 缩进</td></tr><tr><td><code>\\\\b</code></td><td>空格，b 是 blank 的意思</td></tr></tbody></table><h4 id="举例" tabindex="-1">举例 <a class="header-anchor" href="#举例" aria-label="Permalink to &quot;举例&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">我说:&quot;今天</span><span style="color:#A6ACCD;">\\t</span><span style="color:#C3E88D;">天气真不错！&quot;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\\\\\\\\\\\</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(str1)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(str2)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>上方代码的打印结果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">我说:&quot;今天 天气真不错！&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> \\\\\\</span></span></code></pre></div><h3 id="_3-获取字符串的长度length" tabindex="-1">(3)获取字符串的长度length <a class="header-anchor" href="#_3-获取字符串的长度length" aria-label="Permalink to &quot;(3)获取字符串的长度length&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(str</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="charat获取对应索引位置的字符" tabindex="-1">charAt获取对应索引位置的字符 <a class="header-anchor" href="#charat获取对应索引位置的字符" aria-label="Permalink to &quot;charAt获取对应索引位置的字符&quot;">​</a></h3><p>concat 拼接字符串,返回新的拼接 字符串结果,不影响原始值</p><h3 id="_4-字符串拼接" tabindex="-1">(4)字符串拼接 <a class="header-anchor" href="#_4-字符串拼接" aria-label="Permalink to &quot;(4)字符串拼接&quot;">​</a></h3><p>多个字符串之间可以使用加号 <code>+</code> 进行拼接。<br><strong>拼接语法</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">字符串 + 任意数据类型 = 拼接之后的新字符串;</span></span></code></pre></div><h3 id="字面量" tabindex="-1">字面量 <a class="header-anchor" href="#字面量" aria-label="Permalink to &quot;字面量&quot;">​</a></h3><p>字面量是在源代码中一个固定的表示法，通俗来说，就是字面量如何表达这个值。</p><ul><li>数字字面量：<code>1</code>、<code>0</code></li><li>字符串字面量：<code>mphy</code>、<code>aaa</code></li><li>布尔字面量：<code>true</code>、<code>false</code></li></ul><h3 id="_5-模板字符串-模板字面量-语法" tabindex="-1">(5)模板字符串（模板字面量）语法 : $ <a class="header-anchor" href="#_5-模板字符串-模板字面量-语法" aria-label="Permalink to &quot;(5)模板字符串（模板字面量）语法 : $ { }&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">qianguyihao</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">26</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//字符串拼接</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">我是</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,age:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> age)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//传统写法</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">我是</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">,age:</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">}\`</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//ES6 写法。注意语法格式</span></span></code></pre></div><p>在模板字符串中插入表达式<br>模板字符串中可以调用函数<br>模板字符串支持嵌套使用</p><h2 id="_2-数字型-number" tabindex="-1">2.数字型 Number <a class="header-anchor" href="#_2-数字型-number" aria-label="Permalink to &quot;2.数字型 Number&quot;">​</a></h2><h4 id="数字型进制" tabindex="-1">数字型进制 <a class="header-anchor" href="#数字型进制" aria-label="Permalink to &quot;数字型进制&quot;">​</a></h4><p>常见：二进制、八进制、十进制、十六进制</p><ul><li><code>0123</code>: <code>0</code> 开头表示八进制</li><li><code>0b11</code>: <code>0b</code> 开头表示二进制</li><li><code>0x11</code>: <code>0x</code> 开头表示十六进制</li><li>直接打印出来会转化为十进制</li></ul><p><strong>NaN</strong>：是一个特殊的数字，表示 Not a Number，非数值。在进行数值运算时，如果得不到正常结果，就会返回 NaN。</p><h4 id="isnan" tabindex="-1">isNaN() <a class="header-anchor" href="#isnan" aria-label="Permalink to &quot;isNaN()&quot;">​</a></h4><p><code>isNaN</code> 方法用来判断一个变量和或者一个值是数字类型，若不是数字类型则返回 <code>true</code>；否则返回 <code>false</code>。</p><h4 id="tofixed" tabindex="-1">tofixed <a class="header-anchor" href="#tofixed" aria-label="Permalink to &quot;tofixed&quot;">​</a></h4><p>返回包含指定小数点位数的字符串</p><h2 id="_3-布尔型-boolean-值-true-false" tabindex="-1">3.布尔型 Boolean 值:true/false <a class="header-anchor" href="#_3-布尔型-boolean-值-true-false" aria-label="Permalink to &quot;3.布尔型 Boolean  值:true/false&quot;">​</a></h2><h2 id="_4-undefined" tabindex="-1">4.Undefined <a class="header-anchor" href="#_4-undefined" aria-label="Permalink to &quot;4.Undefined&quot;">​</a></h2><p>如果一个变量声明未赋值 就是 undefined 未定义数据类型</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;"> 和数字相加 最后的结果是 </span><span style="color:#89DDFF;">NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined+</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined+NaN</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined+</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">aaa</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// undefinedaaa</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined+undefined</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// NaN</span></span></code></pre></div><h2 id="_5-空值-null" tabindex="-1">5.空值 Null <a class="header-anchor" href="#_5-空值-null" aria-label="Permalink to &quot;5.空值 Null&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null+</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null+undefined</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null+NaN</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null+</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">aaa</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// nullaaa</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null+null</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 0</span></span></code></pre></div>`,48),p=[e];function t(c,r,i,D,y,d){return a(),l("div",null,p)}const F=s(o,[["render",t]]);export{C as __pageData,F as default};

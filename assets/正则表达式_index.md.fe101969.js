import{_ as s,o as a,c as n,U as l}from"./chunks/framework.4c05f43b.js";const C=JSON.parse('{"title":"正则表达式","description":"","frontmatter":{},"headers":[],"relativePath":"正则表达式/index.md","filePath":"正则表达式/index.md"}'),o={name:"正则表达式/index.md"},t=l(`<h1 id="正则表达式" tabindex="-1">正则表达式 <a class="header-anchor" href="#正则表达式" aria-label="Permalink to &quot;正则表达式&quot;">​</a></h1><h3 id="边界符" tabindex="-1">边界符 <a class="header-anchor" href="#边界符" aria-label="Permalink to &quot;边界符&quot;">​</a></h3><p>正则表达式中的边界符（位置符）用来提示字符所处的位置，主要有两个字符。</p><table><thead><tr><th>边界符</th><th>说明</th></tr></thead><tbody><tr><td><code>^</code></td><td>表示匹配行首的文本（以谁开始）</td></tr><tr><td><code>$</code></td><td>表示匹配行尾的文本（以谁结束）</td></tr></tbody></table><p>如果 <code>^</code> 和 <code>$</code> 在一起，表示必须是 <strong>精确匹配</strong>（不能多不能少，只能是这些）。</p><h3 id="字符类" tabindex="-1">字符类 <a class="header-anchor" href="#字符类" aria-label="Permalink to &quot;字符类&quot;">​</a></h3><p>字符类表示有一系列字符可供选择，只要匹配其中一个就可以了。所有可供选择的字符都放在方括号内。</p><h4 id="方括号" tabindex="-1"><code>[]</code> 方括号 <a class="header-anchor" href="#方括号" aria-label="Permalink to &quot;\`[]\` 方括号&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">/[</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">]/</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">andy</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// true</span></span></code></pre></div><p>正则含义：后面的字符串只要包含 <code>abc</code> 中任意一个字符，都返回 <code>true</code>。</p><h4 id="方括号内部-范围符" tabindex="-1"><code>[-]</code>  方括号内部 <code>-</code> 范围符 <a class="header-anchor" href="#方括号内部-范围符" aria-label="Permalink to &quot;\`[-]\`  方括号内部 \`-\` 范围符&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">a-z</span><span style="color:#89DDFF;">]</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// true</span></span></code></pre></div><p>含义：方括号内部加上 <code>-</code> 表示范围，这里表示 <code>a</code> 到 <code>z</code> 26个英文字母都可以。</p><h4 id="方括号内部-取反符" tabindex="-1"><code>[^]</code>  方括号内部 取反符 <code>^</code> <a class="header-anchor" href="#方括号内部-取反符" aria-label="Permalink to &quot;\`[^]\`  方括号内部 取反符 \`^\`&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">/[^</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">]/</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">andy</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// false</span></span></code></pre></div><p>方括号内部加上 <code>^</code> 表示 <strong>取反</strong>，只要包含方括号内的字符，都返回 <code>false</code> 。</p><h3 id="量词符" tabindex="-1">量词符 <a class="header-anchor" href="#量词符" aria-label="Permalink to &quot;量词符&quot;">​</a></h3><p>量词符用来设定 <strong>某个模式出现的次数</strong>。</p><table><thead><tr><th>量词</th><th>说明</th></tr></thead><tbody><tr><td><code>*</code></td><td>重复次数 ≥ 0</td></tr><tr><td><code>+</code></td><td>重复次数 ≥ 1</td></tr><tr><td><code>?</code></td><td>重复 0 次或 1 次</td></tr><tr><td><code>{n}</code></td><td>重复 n 次</td></tr><tr><td><code>{n,}</code></td><td>重复次数 ≥ n</td></tr><tr><td><code>{n,n}</code></td><td>重复 n 次到 m 次</td></tr></tbody></table><h3 id="预定义类" tabindex="-1">预定义类 <a class="header-anchor" href="#预定义类" aria-label="Permalink to &quot;预定义类&quot;">​</a></h3><table><thead><tr><th>预定类</th><th>说明</th></tr></thead><tbody><tr><td><code>\\\\d</code></td><td>匹配 0-9 之间的任一数字，相当于 <code>[0-9]</code></td></tr><tr><td><code>\\\\D</code></td><td>匹配所有 0-9 以外的字符，相当于 <code>[^0-9]</code></td></tr><tr><td><code>\\\\w</code></td><td>匹配任意的字母、数字和下划线，相当于 <code>[A-Za-z0-9_]</code></td></tr><tr><td><code>\\\\W</code></td><td>除所有字母、数字和下划线以外的字符，相当于 <code>[^A-Za-z0-9_]</code></td></tr><tr><td><code>\\\\s</code></td><td>匹配空格（包括换行符、制表符、空格符等），相等于<code>[\\\\t\\\\r\\\\n\\\\v\\\\f]</code></td></tr><tr><td><code>\\\\S</code></td><td>匹配非空格的字符，相当于 <code>[^\\\\t\\\\r\\\\n\\\\v\\\\f]</code></td></tr></tbody></table><h3 id="正则表达式参数" tabindex="-1">正则表达式参数 <a class="header-anchor" href="#正则表达式参数" aria-label="Permalink to &quot;正则表达式参数&quot;">​</a></h3><p>当 <code>replace</code> 中第一个参数为正则表达式的时候，还有一个 <code>switch</code> 参数可选。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">表达式</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">[switch]</span></span></code></pre></div><p><code>switch</code>（也称为修饰符）按照什么样的模式来匹配. 有三种值：</p><ul><li><code>g</code>：全局匹配</li><li><code>i</code>：忽略大小写</li><li><code>gi</code>：全局匹配 + 忽略大小写</li></ul><h2 id="常见正则表达式" tabindex="-1">常见正则表达式 <a class="header-anchor" href="#常见正则表达式" aria-label="Permalink to &quot;常见正则表达式&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> 电话正则 </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">34578</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{9}</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">g</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15901234567</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ^ 表示匹配行首的文本（以谁开始）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// [] 限制用那些字符</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \\d 匹配 0-9 之间的任一数字，相当于 [0-9]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// {}表示重复的次数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// $ 表示匹配行尾的文本（以谁结束）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// g 表示全局模式 匹配所有出现的字符</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> QQ </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">1-9</span><span style="color:#89DDFF;">][</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">]{4,9}</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">g</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// QQ号最少5位最多10位</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// {4,9} 表示重复的次数的范围 4-9次</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> 十六进制颜色 </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">#</span><span style="color:#89DDFF;">?[</span><span style="color:#C3E88D;">0-9a-fA-F</span><span style="color:#89DDFF;">]{6}/</span><span style="color:#F78C6C;">g</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// #48D1CC</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ? 前面的字符可有可无</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> Email </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">([</span><span style="color:#C3E88D;">A-Za-z0-9_\\-</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">]+)</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">([</span><span style="color:#C3E88D;">A-Za-z0-9_\\-</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">]+)</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">([</span><span style="color:#C3E88D;">A-Za-z</span><span style="color:#89DDFF;">]{2,6})</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">g</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// - . 需要转义</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> url </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">((</span><span style="color:#C3E88D;">https</span><span style="color:#89DDFF;">?|</span><span style="color:#C3E88D;">ftp</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;">\\/\\/</span><span style="color:#89DDFF;">)?([</span><span style="color:#C3E88D;">\\da-z</span><span style="color:#A6ACCD;">\\.\\-</span><span style="color:#89DDFF;">]+)</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">([</span><span style="color:#C3E88D;">a-z</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">]{2,6})/</span><span style="color:#F78C6C;">g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> HTML </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#C3E88D;">&lt;</span><span style="color:#89DDFF;">([</span><span style="color:#C3E88D;">a-z</span><span style="color:#89DDFF;">]+)([^</span><span style="color:#C3E88D;">&gt;</span><span style="color:#89DDFF;">]+)*(</span><span style="color:#C3E88D;">&gt;</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">*)</span><span style="color:#C3E88D;">&lt;</span><span style="color:#A6ACCD;">\\/</span><span style="color:#C3E88D;">1&gt;</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">\\s</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">\\/</span><span style="color:#C3E88D;">&gt;</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">gm</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// m 匹配多行</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// * 0到无穷大</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \\s 表示空格</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> 日期 </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">]{4}</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">1-9</span><span style="color:#89DDFF;">]|</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">0-2</span><span style="color:#89DDFF;">])(</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">1-9</span><span style="color:#89DDFF;">]|[</span><span style="color:#C3E88D;">12</span><span style="color:#89DDFF;">][</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">]|</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">01</span><span style="color:#89DDFF;">])</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">g</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2021</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">01</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1[0-2]  匹配10-12</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// [12][0-9] 匹配 10-29</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3[01] 匹配 30 31</span></span></code></pre></div>`,28),p=[t];function e(c,r,D,y,d,i){return a(),n("div",null,p)}const h=s(o,[["render",e]]);export{C as __pageData,h as default};

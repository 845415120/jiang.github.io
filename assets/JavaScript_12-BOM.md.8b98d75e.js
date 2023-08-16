import{_ as s,o as a,c as n,U as l}from"./chunks/framework.4c05f43b.js";const C=JSON.parse('{"title":"BOM","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/12-BOM.md","filePath":"JavaScript/12-BOM.md"}'),o={name:"JavaScript/12-BOM.md"},p=l(`<h1 id="bom" tabindex="-1">BOM <a class="header-anchor" href="#bom" aria-label="Permalink to &quot;BOM&quot;">​</a></h1><h2 id="常见概念" tabindex="-1">常见概念 <a class="header-anchor" href="#常见概念" aria-label="Permalink to &quot;常见概念&quot;">​</a></h2><h3 id="javascript的组成" tabindex="-1">JavaScript的组成 <a class="header-anchor" href="#javascript的组成" aria-label="Permalink to &quot;JavaScript的组成&quot;">​</a></h3><p>JavaScript基础分为三个部分：</p><ul><li>ECMAScript：JavaScript的语法标准。包括变量、表达式、运算符、函数、if语句、for语句等。</li><li><strong>DOM</strong>：文档对象模型（Document object Model），操作<strong>网页上的元素</strong>的API。比如让盒子移动、变色、轮播图等。</li><li><strong>BOM</strong>：浏览器对象模型（Browser Object Model），操作<strong>浏览器部分功能</strong>的API。比如让浏览器自动滚动。</li></ul><h3 id="常见的-bom-对象" tabindex="-1">常见的 BOM 对象 <a class="header-anchor" href="#常见的-bom-对象" aria-label="Permalink to &quot;常见的 BOM 对象&quot;">​</a></h3><p>BOM可以让我们通过JS来操作浏览器。BOM中为我们提供了一些对象，来完成对浏览器相关的操作。<br>常见的 BOM对象有：</p><ul><li>Window：代表整个浏览器的窗口，同时 window 也是网页中的全局对象。</li><li>Navigator：代表当前浏览器的信息，通过该对象可以识别不同的浏览器。</li><li>Location：代表当前浏览器的地址栏信息，通过 Location 可以获取地址栏信息，或者操作浏览器跳转页面。</li><li>History：代表浏览器的历史记录，通过该对象可以操作浏览器的历史记录。由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页，而且该操作只在当次访问时有效。</li><li>Screen：代表用户的屏幕信息，通过该对象可以获取用户的显示器的相关信息。</li></ul><p>备注：这些 BOM 对象都是作为 window 对象的属性保存的，可以通过window对象来使用，也可以直接使用。比如说，我可以使用 <code>window.location.href</code>，也可以直接使用 <code>location.href</code>，二者是等价的。</p><p>备注2：不要忘了，之前学习过的<code>document</code>也是在<code>window</code>中保存的。</p><p>这篇文章，我们先来讲一下 几个常见的 BOM 对象。</p><h2 id="navigator-和-navigator-useragent" tabindex="-1">Navigator 和 <code>navigator.userAgent</code> <a class="header-anchor" href="#navigator-和-navigator-useragent" aria-label="Permalink to &quot;Navigator 和 \`navigator.userAgent\`&quot;">​</a></h2><p><code>Navigator</code>代表当前浏览器的信息，通过该对象可以识别不同的浏览器。</p><p>由于历史原因，Navigator对象中的大部分属性都已经不能帮助我们识别浏览器了。</p><p><strong>一般我们只会使用</strong><code>**navigator.userAgent**</code><strong>来获取浏览器的信息</strong>。</p><p>userAgent 的值是一个字符串，简称 <strong>UA</strong>，这个字符串中包含了用来描述浏览器信息的内容，不同的浏览器会有不同的userAgent。</p><p><strong>代码举例</strong>：（获取当前浏览器的UA）</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Document</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">        &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> ua </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> navigator</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">userAgent</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 获取当前浏览器的 userAgent</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">            console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">qianguyihao 当前浏览器的UA是：</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> ua)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">firefox</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">i</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(ua)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">是火狐浏览器</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">chrome</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">i</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(ua)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">是Chrome浏览器</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">msie</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">i</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(ua)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">是IE浏览器</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ActiveXObject</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> window) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">是 IE11 浏览器</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="在电脑上模拟移动端浏览器" tabindex="-1">在电脑上模拟移动端浏览器 <a class="header-anchor" href="#在电脑上模拟移动端浏览器" aria-label="Permalink to &quot;在电脑上模拟移动端浏览器&quot;">​</a></h3><p>不同浏览器（包括微信内置的浏览器）的 userAgent 信息，是不一样的，我们可以根据 <code>navigator.userAgent</code>属性来获取。</p><p>比如说，我们在电脑浏览器上，按F12，然后在控制台输入<code>navigator.userAgent</code>，如下：</p><p><img src="http://img.smyhvae.com/20180425_1656.png#id=DwRxy&amp;originHeight=668&amp;originWidth=1064&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""></p><p>上图显示，MacOS上的Chrome浏览器的 userAgent 是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.117 Safari/537.36&quot;</span></span></code></pre></div><p>我们还可以在电脑浏览器的控制台里可以添加很多设备，通过这种方式，可以模拟移动端浏览器的场景，非常有用，请务必掌握。操作如下：</p><p>（1）需要点击 edit，手动添加：</p><p><img src="http://img.smyhvae.com/20191127_1903.png#id=HgBly&amp;originHeight=479&amp;originWidth=1114&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""></p><p>（2）添加时，根据 User agent 来识别不同的浏览器：</p><p><img src="http://img.smyhvae.com/20191127_1918.png#id=kjrbY&amp;originHeight=470&amp;originWidth=1105&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""></p><h3 id="不同浏览器的-useragent" tabindex="-1">不同浏览器的 userAgent <a class="header-anchor" href="#不同浏览器的-useragent" aria-label="Permalink to &quot;不同浏览器的 userAgent&quot;">​</a></h3><p>iOS 版微信浏览器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Mozilla/5.0 (iPhone; CPU iPhone OS 9_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13E233 MicroMessenger/6.3.15 NetType/WIFI Language/zh_CN</span></span></code></pre></div><p>Android 版微信浏览器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Mozilla/5.0 (Linux; Android 5.0.1; GT-I9502 Build/LRX22C; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36 MicroMessenger/6.1.0.78_r1129455.543 NetType/WIFI</span></span></code></pre></div><p>iOS 版本QQ浏览器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_2 like Mac OS X) AppleWebKit/604.4.7 (KHTML, like Gecko) Mobile/15C202 QQ/7.3.5.473 V1_IPH_SQ_7.3.5_1_APP_A Pixel/1125 Core/UIWebView Device/Apple(iPhone X) NetType/WIFI QBWebViewType/1</span></span></code></pre></div><p>Android 版 QQ浏览器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Mozilla/5.0 (Linux; Android 4.4.2; PE-TL20 Build/HuaweiPE-TL20; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/043807 Mobile Safari/537.36 V1_AND_SQ_7.3.2_762_YYB_D QQ/7.3.2.3350 NetType/WIFI WebP/0.3.0 Pixel/1080</span></span></code></pre></div><p><strong>参考链接</strong>：</p><ul><li><a href="https://blog.csdn.net/taambernk520/article/details/80801574" target="_blank" rel="noreferrer">微信、QQ在Android和iOS的UserAgent</a></li><li><a href="http://www.cnblogs.com/7z7chn/p/5370352.html" target="_blank" rel="noreferrer">判断微信内置浏览器的UserAgent</a></li><li><a href="https://gist.github.com/wjp2013/fff34c063cf0cf227d65" target="_blank" rel="noreferrer">微信内置浏览器UserAgent的判断</a></li></ul><h2 id="history-对象" tabindex="-1">History 对象 <a class="header-anchor" href="#history-对象" aria-label="Permalink to &quot;History 对象&quot;">​</a></h2><p>History对象：可以用来操作浏览器的向前或向后翻页。</p><h3 id="history对象的属性" tabindex="-1">History对象的属性 <a class="header-anchor" href="#history对象的属性" aria-label="Permalink to &quot;History对象的属性&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span></span></code></pre></div><p>解释：获取浏览器历史列表中的 url 数量。注意，只是统计当次的数量，如果浏览器关了，数量会重置为1。</p><h3 id="history对象的方法" tabindex="-1">History对象的方法 <a class="header-anchor" href="#history对象的方法" aria-label="Permalink to &quot;History对象的方法&quot;">​</a></h3><p><strong>方法1</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">history.back();</span></span></code></pre></div><p>解释：用来回退到上一个页面，作用和浏览器的「回退按钮」一样。</p><p><strong>方法2</strong>：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forward</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>解释：用来跳转下一个页面，作用和浏览器的「前进按钮」一样。</p><p><strong>方法3</strong>：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">go</span><span style="color:#A6ACCD;">( int n)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 需要整数作为参数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 代码举例：</span></span>
<span class="line"><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">go</span><span style="color:#A6ACCD;">( </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> )</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 向前跳转一个页面，相当于 history.forward()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">go</span><span style="color:#A6ACCD;">( </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> )</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 表示向前跳转两个页面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">go</span><span style="color:#A6ACCD;">( </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> )</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 刷新当前页面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">go</span><span style="color:#A6ACCD;">( </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> )</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 向后跳转一个页面，相当于 history.back()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">go</span><span style="color:#A6ACCD;">( </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> )</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 向后跳转两个页面</span></span></code></pre></div><p>解释：向前/向后跳转 n 个页面。</p><p>备注：浏览器的前进按钮、后退按钮，在这个位置：</p><p><img src="http://img.smyhvae.com/20180201_2146.png#id=svQoH&amp;originHeight=216&amp;originWidth=372&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""></p><h2 id="location-对象" tabindex="-1">Location 对象 <a class="header-anchor" href="#location-对象" aria-label="Permalink to &quot;Location 对象&quot;">​</a></h2><p>Location 对象：封装了浏览器地址栏的 URL 信息。</p><p>下面介绍一些常见的属性和方法。</p><h3 id="location-对象的属性-location-href" tabindex="-1">Location 对象的属性：location.href <a class="header-anchor" href="#location-对象的属性-location-href" aria-label="Permalink to &quot;Location 对象的属性：location.href&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">location.href</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">location.href = &#39;https://xxx&#39;;</span></span></code></pre></div><p>解释：获取当前页面的 url 路径（或者设置 url 路径）；或者跳转到指定路径。</p><p>举例1：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">href)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 获取当前页面的url 路径</span></span></code></pre></div><p>举例2：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">href </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">www.baidu.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 跳转到指定的页面链接。通俗理解就是：跳转到其他的页面</span></span></code></pre></div><p>从上方的<strong>举例2</strong>中可以看出：如果直接将<code>location.href</code>属性修改为一个绝对路径（或相对路径），则页面会自动跳转到该路径，并生成相应的历史记录。</p><p><strong>window.location.href 是异步代码：</strong></p><p>需要特别注意的是：window.location.href的赋值，并不会中断Javascript的执行立即进行页面跳转。因为 LocationChange 行为在浏览器内核中是起定时器异步执行的。异步执行的好处是为了防止代码调用过深，导致栈溢出，另外也是为了防止递归进入加载逻辑，导致状态紊乱，保证导航请求是顺序执行的。</p><p>解决办法：在 location.href 的下一行，加上 return 即可。意思是，执行了 location.href 之后，就不要再继续往下执行了。</p><p>参考链接：<a href="https://juejin.cn/post/6844904040518647815" target="_blank" rel="noreferrer">location.href的异步机制</a></p><h3 id="location-对象的方法" tabindex="-1">Location 对象的方法 <a class="header-anchor" href="#location-对象的方法" aria-label="Permalink to &quot;Location 对象的方法&quot;">​</a></h3><p><strong>方法1</strong>：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">assign</span><span style="color:#A6ACCD;">(str)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>解释：用来跳转到其他的页面，作用和直接修改<code>location.href</code>一样。</p><p><strong>方法2</strong>：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reload</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>解释：用于重新加载当前页面，作用和刷新按钮一样。</p><p>代码举例：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reload</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 重新加载当前页面。</span></span>
<span class="line"><span style="color:#A6ACCD;">    location</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reload</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 在方法的参数中传递一个true，则会强制清空缓存刷新页面。</span></span></code></pre></div><p><strong>方法3</strong>：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>解释：使用一个新的页面替换当前页面，调用完毕也会跳转页面。但不会生成历史记录，不能使用「后退按钮」后退。</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2>`,85),e=[p];function t(r,c,i,y,D,F){return a(),n("div",null,e)}const h=s(o,[["render",t]]);export{C as __pageData,h as default};

import{_ as s,c as n,o as a,a as l}from"./app.211e2b21.js";const p="/images/build_vitepress_blog/ba61c3d4b8b4e8c69b5cfa658390a435b926d4ec76962b0921907b95fc6906cf.png",e="/images/build_vitepress_blog/1d9d43341f1bb4c5b1a2101a0190a6f4639d9fa191e3a3c4eaec98dc92c042c2.png",o="/images/build_vitepress_blog/3ad9ad49d345d945c9345bc501320e42d3cc9d983f59de4f26eed41fe6894207.png",c="/images/build_vitepress_blog/8577f3149fa91838b18e6aa74ec6c6a8552d2d22831de29f274b568c1dc3a4c7.png",A=JSON.parse('{"title":"\u5982\u4F55\u901A\u8FC7 Vitepress \u642D\u5EFA\u4E00\u4E2A\u535A\u5BA2","description":"","frontmatter":{"layout":"doc","title":"\u5982\u4F55\u901A\u8FC7 Vitepress \u642D\u5EFA\u4E00\u4E2A\u535A\u5BA2"},"headers":[{"level":1,"title":"\u5982\u4F55\u901A\u8FC7 Vitepress \u642D\u5EFA\u4E00\u4E2A\u535A\u5BA2","slug":"\u5982\u4F55\u901A\u8FC7-vitepress-\u642D\u5EFA\u4E00\u4E2A\u535A\u5BA2","link":"#\u5982\u4F55\u901A\u8FC7-vitepress-\u642D\u5EFA\u4E00\u4E2A\u535A\u5BA2","children":[{"level":2,"title":"\u4E0D\u5E9F\u8BDD,\u76F4\u63A5\u5F00\u5DE5\u5427","slug":"\u4E0D\u5E9F\u8BDD-\u76F4\u63A5\u5F00\u5DE5\u5427","link":"#\u4E0D\u5E9F\u8BDD-\u76F4\u63A5\u5F00\u5DE5\u5427","children":[]},{"level":2,"title":"\u7814\u7A76\u4E00\u4E0B\u914D\u7F6E\u5427","slug":"\u7814\u7A76\u4E00\u4E0B\u914D\u7F6E\u5427","link":"#\u7814\u7A76\u4E00\u4E0B\u914D\u7F6E\u5427","children":[]},{"level":2,"title":"\u7814\u7A76\u4E00\u4E0B\u7F16\u8F91\u5668\u5427","slug":"\u7814\u7A76\u4E00\u4E0B\u7F16\u8F91\u5668\u5427","link":"#\u7814\u7A76\u4E00\u4E0B\u7F16\u8F91\u5668\u5427","children":[]}]}],"relativePath":"daily/blog/build_vitepress_blog.md","lastUpdated":1692244713000}'),r={name:"daily/blog/build_vitepress_blog.md"},t=l(`<h1 id="\u5982\u4F55\u901A\u8FC7-vitepress-\u642D\u5EFA\u4E00\u4E2A\u535A\u5BA2" tabindex="-1">\u5982\u4F55\u901A\u8FC7 Vitepress \u642D\u5EFA\u4E00\u4E2A\u535A\u5BA2 <a class="header-anchor" href="#\u5982\u4F55\u901A\u8FC7-vitepress-\u642D\u5EFA\u4E00\u4E2A\u535A\u5BA2" aria-hidden="true">#</a></h1><h2 id="\u4E0D\u5E9F\u8BDD-\u76F4\u63A5\u5F00\u5DE5\u5427" tabindex="-1">\u4E0D\u5E9F\u8BDD,\u76F4\u63A5\u5F00\u5DE5\u5427 <a class="header-anchor" href="#\u4E0D\u5E9F\u8BDD-\u76F4\u63A5\u5F00\u5DE5\u5427" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">\u563F\u563F\u563F</p><p>\u63A8\u8350\u76F4\u63A5\u770B\u6587\u6863,\u4F46\u662F\u6211\u8FD8\u662F\u4F1A\u6284\u4E00\u4E0B,\u8981\u4E0D\u600E\u4E48\u6C34\u6587\u7AE0\u5462,\u563F\u563F\u563F</p></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// 1\u3001\u521B\u5EFA\u9879\u76EE\u5E76\u521D\u59CB\u5316package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir my_blog </span></span>
<span class="line"><span style="color:#A6ACCD;">cd my_blog</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//2\u3001\u5B89\u88C5vitePress\u548Cvue3.0</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm i vitepress vue </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//3\u3001\u521B\u5EFA\u6587\u4EF6\u5939docs\uFF0C\u5E76\u5728\u5176\u4E2D\u6DFB\u52A0\u4E00\u4E2Amd\u6587\u6863index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir docs </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> echo </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"># Hello VitePress</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> docs</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">md</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//4\u3001\u5728package.json\u4E2D\u6DFB\u52A0scripts\u811A\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress dev docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress build docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">serve</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress serve docs</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#676E95;">//5\u3001\u901A\u8FC7\u547D\u4EE4\u8FD0\u884C\u9879\u76EE</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm dev</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u03B5=(\xB4\u03BF\uFF40*)))\u5509,\u611F\u89C9\u7167\u7740\u6587\u6863\u6284\u8FD9\u4E2A,\u597D\u50BB,\u4E0D\u6284\u4E86,\u5927\u5BB6\u8FD8\u662F\u7167\u7740\u6587\u6863\u770B\u770B\u5427,\u6211\u4EEC\u6765\u5199\u70B9\u9AD8\u7EA7\u7684</p><p><a href="https://process1024.github.io/vitepress/guide/getting-started" target="_blank" rel="noreferrer">\u4E2D\u6587\u6587\u6863\u{1F604}\u{1F44D}</a> \u{1F4AF}</p><h2 id="\u7814\u7A76\u4E00\u4E0B\u914D\u7F6E\u5427" tabindex="-1">\u7814\u7A76\u4E00\u4E0B\u914D\u7F6E\u5427 <a class="header-anchor" href="#\u7814\u7A76\u4E00\u4E0B\u914D\u7F6E\u5427" aria-hidden="true">#</a></h2><p>\u56DE\u5F52\u521D\u5FC3,\u6211\u539F\u6765\u5C31\u662F\u4E3A\u4E86\u5E94\u4ED8\u5907\u6848\u68C0\u67E5,\u6240\u4EE5\u5148\u914D\u7F6E\u4E00\u4E0B\u5907\u6848\u4FE1\u606F\u5427,<a href="https://process1024.github.io/vitepress/guide/theme-footer" target="_blank" rel="noreferrer">\u6587\u6863\u5728\u8FD9\u91CC</a></p><ol><li>\u5148\u65B0\u5EFA\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6<code>config.ts</code>,\u6587\u4EF6\u7ED3\u6784\u5982\u4E0B:</li></ol><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500 docs</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u251C\u2500 .vitepress</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  \u2514\u2500 config.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2514\u2500 index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500 package.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="2"><li>\u6DFB\u52A0\u914D\u7F6E,<code>config.ts</code>\u5982\u4E0B( \u914D\u7F6E\u5982\u4E0B,\u53BB\u9664\u6389\u5176\u4ED6\u914D\u7F6E )</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vitepress</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">themeConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">footer</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;a href=&quot;https://beian.miit.gov.cn/&quot;&gt;\u82CFICP\u59072020067590\u53F7&lt;/a&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">copyright</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Copyright \xA9 2022-12-06 \uFF5E present Wukoon</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5404\u79CD\u914D\u7F6E\u5F88\u591A,\u6587\u6863\u5199\u5F97\u5F88\u7EC6,<a href="https://process1024.github.io/vitepress/guide/theme-introduction" target="_blank" rel="noreferrer">\u67E5\u770B\u6587\u6863,\u597D\u597D\u5B66\u4E60</a></p><div class="tip custom-block"><p class="custom-block-title">\u03B5=(\xB4\u03BF\uFF40*)))\u5509</p><p>\u6240\u4EE5\u8BF4,\u5199\u6559\u7A0B\u5F88\u9EBB\u70E6,\u56E0\u4E3A\u6587\u6863\u660E\u660E\u5199\u5F97\u5F88\u5168,\u6284\u5199\u4E00\u904D\u771F\u7684\u597D\u50BB,\u5B9E\u5728\u662F\u4E0D\u60F3\u6284,\u4F46\u662F\u6C34\u6587\u7AE0\u662F\u521A\u9700\u554A,\u5F97\u5199\u70B9\u6587\u6863\u91CC\u9762\u6CA1\u6709\u7684.</p></div><h2 id="\u7814\u7A76\u4E00\u4E0B\u7F16\u8F91\u5668\u5427" tabindex="-1">\u7814\u7A76\u4E00\u4E0B\u7F16\u8F91\u5668\u5427 <a class="header-anchor" href="#\u7814\u7A76\u4E00\u4E0B\u7F16\u8F91\u5668\u5427" aria-hidden="true">#</a></h2><p>\u6211\u89C9\u5F97\u8FD9\u4E2A\u53EF\u4EE5\u5199\u5199,\u6BD5\u7ADF,\u8FD9\u662F\u4E00\u4E2ABlog,\u5199\u6587\u7AE0\u624D\u662F\u91CD\u8981\u7684,\u4F5C\u4E3A\u4E00\u4E2A\u7A0B\u5E8F\u5458,\u6211\u51B3\u5B9A\u4E07\u7269\u5F52\u4E8E<code>vscode</code>,\u5199blog,\u9700\u8981\u89E3\u51B3\u7684\u7B2C\u4E00\u4E2A\u95EE\u9898\u5C31\u662F\u56FE\u7247\u5B58\u50A8,\u4FD7\u8BDD\u8BF4,\u65E0\u56FE\u8A00\u{1F426}</p><p>\u6DFB\u52A0\u63D2\u4EF6(Markdown Image) <img src="`+p+'" alt="\u56FE 1"><br> \u8FD9\u4E2A\u63D2\u4EF6\u652F\u6301\u5F88\u591A\u56FE\u5E8A\u8BBE\u7F6E,\u4F46\u662F\u6700\u7B80\u5355\u7684\u5C31\u662F\u5B58\u5728\u9879\u76EE\u91CC\u9762,\u6BD5\u7ADFgithub\u4E0D\u8981\u94B1,\u867D\u7136\u901F\u5EA6\u6709\u70B9\u6162,\u4F46\u662F\u6240\u6709\u6587\u7AE0\u548C\u56FE\u7247\u90FD\u5728\u81EA\u5DF1\u624B\u4E0A,\u662F\u4E0D\u662F\u5B89\u5168\u611F\u6EE1\u6EE1.</p><p>\u6DFB\u52A0<strong>\u9879\u76EE\u914D\u7F6E</strong>(\u8FD9\u79CD\u63D2\u4EF6,\u6BCF\u4E2A\u9879\u76EE\u914D\u7F6E\u90FD\u4E0D\u4E00\u6837,\u6240\u4EE5\u6DFB\u52A0\u5728\u9879\u76EE\u914D\u7F6E\u4E2D\u6BD4\u8F83\u597D):</p><p><img src="'+e+`" alt="\u56FE 2"></p><p>\u8FD9\u65F6\u5019,\u9879\u76EE\u4E2D\u4F1A\u591A\u4E00\u4E2A\u6587\u4EF6<code>.vscode/setting.json</code></p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">markdown-image.local.path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/docs/public/images</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">markdown-image.base.fileNameFormat</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\${mdname}/\${hash}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">markdown-image.local.referencePath</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/images/\${mdname}/</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u89E3\u91CA\u4E00\u4E0B\u914D\u7F6E:</p><ol><li>\u672C\u5730\u56FE\u7247\u5B58\u50A8\u4F4D\u7F6E<code>/docs/public/images</code>,<code>public/images</code>\u76EE\u5F55\u5728\u7F16\u8BD1\u4E4B\u540E\u4F1A\u88AB\u62F7\u8D1D\u5230\u8F93\u51FA\u76EE\u5F55\u7684\u6839\u76EE\u5F55\u4E0B,\u53EF\u4EE5\u901A\u8FC7<code>images/XXXXX</code>\u6765\u8BBF\u95EE.</li><li>\u5B58\u50A8\u6587\u4EF6\u683C\u5F0F\u4E3A <code>\u6587\u4EF6\u540D/hash</code> ,\u7528\u6587\u4EF6\u540D\u505A\u4E00\u4E0B\u9694\u79BB,\u4FBF\u4E8E\u627E\u5230\u56FE\u7247.</li><li>\u81EA\u52A8\u63D2\u5165\u6587\u6863\u65F6\u4EE3\u7801 <code>[\u56FE 1](/images/\u6587\u4EF6\u540D/hash.png)</code></li></ol><p>\u914D\u7F6E\u5B8C\u6210\u540E,\u5C31\u53EF\u4EE5\u76F4\u63A5\u5728 markdown \u6587\u6863\u4E2D\u76F4\u63A5\u7C98\u8D34\u622A\u56FE\u4E86,Mac \u7248\u672C\u7684\u5FEB\u6377\u952E\u4E3A<code>Option+shift+v</code>,\u622A\u56FE\u56DE\u81EA\u52A8\u4FDD\u5B58,\u5E76\u63D2\u5165<code>markdown</code>\u56FE\u7247\u94FE\u63A5,\u5341\u5206\u7684\u4E1D\u6ED1.</p><p>\u6CA1\u6709<code>emoji</code>\u7684\u6587\u6863,\u591A\u5C11\u6709\u70B9\u65E0\u804A,\u4F46\u662F\u5728markdown\u4E2D\u52A0\u5165emoji\u6709\u70B9\u9EBB\u70E6,\u6240\u4EE5\u9700\u8981\u52A0\u4E00\u4E2A\u63D2\u4EF6\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898</p><p>\u6DFB\u52A0\u63D2\u4EF6(:emojisense:) <img src="`+o+'" alt="\u56FE 3"></p><p>\u73B0\u5728\u53EF\u4EE5\u5F00\u59CB\u5FEB\u4E50\u8F93\u5165\u4E86,\u5728markdown\u6587\u6863\u4E2D,\u952E\u5165<code>::</code> \u5F39\u51FA\u63D0\u793A.</p><p><img src="'+c+'" alt="\u56FE 4"></p><div class="tip custom-block"><p class="custom-block-title">\u5C31\u8FD9\u6837\u5427</p><p>\u5199\u5230\u8FD9\u91CC,\u4E00\u4E2ABlog\u5C31\u5DEE\u4E0D\u591A\u4E86,\u5199\u6587\u6863\u4E5F\u5F88\u65B9\u4FBF\u4E86, \u4F46\u662F\u5199\u4E86blog\u4E0D\u662F\u4E3A\u4E86\u81EA\u5DF1\u770B\u554A,\u9700\u8981\u90E8\u7F72\u51FA\u53BB,\u4E0D\u88C5\u5F97\u513F,\u5199\u5565blog \u{1F60E} ,\u770B\u4E0B\u4E00\u7BC7\u6587\u7AE0,\u6211\u4EEC\u901A\u8FC7 github page \u6765\u90E8\u7F72\u5427</p></div>',29),i=[t];function D(d,y,b,F,C,u){return a(),n("div",null,i)}const g=s(r,[["render",D]]);export{A as __pageData,g as default};
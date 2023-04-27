import{_ as s,b as n,a,J as l}from"./chunks/framework.218694e7.js";const b=JSON.parse('{"title":"sort","description":"","frontmatter":{},"headers":[{"level":2,"title":"sort\u7684\u539F\u578B","slug":"sort\u7684\u539F\u578B"},{"level":2,"title":"sort\u6837\u5217","slug":"sort\u6837\u5217"},{"level":2,"title":"sort\u7684\u53C2\u6570\u539F\u7406","slug":"sort\u7684\u53C2\u6570\u539F\u7406"},{"level":2,"title":"\u5F15\u7528","slug":"\u5F15\u7528"}],"relativePath":"cppbook/stl/algorithm/sort.md","lastUpdated":1659197332000}'),p={name:"cppbook/stl/algorithm/sort.md"},o=l(`<h1 id="sort" tabindex="-1">sort <a class="header-anchor" href="#sort" aria-hidden="true">#</a></h1><p>stl\u7B97\u6CD5\u4E2D\u7684sort\u5185\u90E8\u6709\u4E09\u79CD\u6392\u5E8F<code>\u5FEB\u901F\u6392\u5E8F</code>,<code>\u63D2\u5165\u6392\u5E8F</code>,<code>\u5806\u6392\u5E8F</code>.\u5F53\u6570\u636E\u91CF\u5927\u65F6\u91C7\u7528Quick Sort\uFF0C\u5206\u6BB5\u9012\u5F52\u6392\u5E8F\uFF0C\u4E00\u65E6\u5206\u6BB5\u540E\u7684\u6570\u636E\u91CF\u5C0F\u4E8E\u67D0\u4E2A\u95E8\u69DB\uFF0C\u4E3A\u907F\u514DQuick Sort\u7684\u9012\u5F52\u8C03\u7528\u5E26\u6765\u8FC7\u5927\u7684\u989D\u5916\u8D1F\u8377\uFF0C\u5C31\u6539\u7528Insertion Sort\u3002\u5982\u679C\u9012\u5F52\u5C42\u6B21\u8FC7\u6DF1\uFF0C\u8FD8\u4F1A\u6539\u7528Heap Sort</p><p>stl\u4E2D\u7684sort\u5BF9\u4E09\u79CD\u6392\u5E8F\u7B97\u6CD5\u8FDB\u884C\u7EFC\u5408,\u5F62\u6210---Introspective Sorting(\u5185\u7701\u5F0F\u6392\u5E8F)\u3002</p><p>\u4E00\u822C\u800C\u8A00sort\u8981\u6BD4\u6211\u4EEC\u624B\u5199\u7684qsort\u8981\u5FEB\u4E0A\u5F88\u591A</p><p>\u5982\u679C\u8981\u5BF9<code>list</code>\u8FDB\u884C\u6392\u5E8F,\u7528<code>list</code>\u81EA\u5E26\u7684<code>sort</code>,<code>list.sort</code></p><h2 id="sort\u7684\u539F\u578B" tabindex="-1">sort\u7684\u539F\u578B <a class="header-anchor" href="#sort\u7684\u539F\u578B" aria-hidden="true">#</a></h2><p>\u9ED8\u8BA4:</p><div class="language-c line-numbers-mode"><button class="copy"></button><span class="lang">c</span><pre><code><span class="line"><span style="color:#A6ACCD;">template </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">class RandomAccessIterator</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sort</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">RandomAccessIterator first</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> RandomAccessIterator last</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5E26\u6BD4\u8F83\u51FD\u6570:</p><div class="language-c line-numbers-mode"><button class="copy"></button><span class="lang">c</span><pre><code><span class="line"><span style="color:#A6ACCD;">template </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">class RandomAccessIterator</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> class Compare</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sort</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">RandomAccessIterator first</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> RandomAccessIterator last</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Compare comp</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="sort\u6837\u5217" tabindex="-1">sort\u6837\u5217 <a class="header-anchor" href="#sort\u6837\u5217" aria-hidden="true">#</a></h2><div class="language-c line-numbers-mode"><button class="copy"></button><span class="lang">c</span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">// cout</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">algorithm</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// sort</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">vector</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;">// vector</span></span>
<span class="line"><span style="color:#A6ACCD;">using namespace std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">myfunction</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> j</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">);</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> myclass </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">bool</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">operator</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> i</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> j</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">);}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> myobject</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> myints</span><span style="color:#C792EA;">[]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">32</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">71</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">45</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">26</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">53</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">33</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">  vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">myvector</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">myints</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> myints</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">);</span><span style="color:#F07178;">               </span><span style="color:#676E95;font-style:italic;">// 32 71 12 45 26 80 53 33</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u4F7F\u7528\u9ED8\u8BA4 (operator &lt;):</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">sort</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">myvector</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">begin</span><span style="color:#89DDFF;">(),</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">myvector</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">begin</span><span style="color:#89DDFF;">()+</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">);</span><span style="color:#F07178;">           </span><span style="color:#676E95;font-style:italic;">//(12 32 45 71)26 80 53 33</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u4F7F\u7528\u51FD\u6570</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">sort</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">myvector</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">begin</span><span style="color:#89DDFF;">()+</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">myvector</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#89DDFF;">(),</span><span style="color:#F07178;"> myfunction</span><span style="color:#89DDFF;">);</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 12 32 45 71(26 33 53 80)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u4F7F\u7528\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">sort</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">myvector</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">begin</span><span style="color:#89DDFF;">(),</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">myvector</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#89DDFF;">(),</span><span style="color:#F07178;"> myobject</span><span style="color:#89DDFF;">);</span><span style="color:#F07178;">     </span><span style="color:#676E95;font-style:italic;">//(12 26 32 33 45 53 71 80)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u5BF9\u6570\u7EC4\u8FDB\u884C\u6392\u5E8F</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">sort</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">myints</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">myints</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">);</span><span style="color:#F07178;">     </span><span style="color:#676E95;font-style:italic;">//(12 26 32 33 45 53 71 80)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u8F93\u51FA</span></span>
<span class="line"><span style="color:#F07178;">  cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">myvector contains:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;">::iterator it</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">myvector</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">begin</span><span style="color:#89DDFF;">();</span><span style="color:#F07178;"> it</span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;">myvector</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#89DDFF;">();</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">it</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#F07178;">    cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">it</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="sort\u7684\u53C2\u6570\u539F\u7406" tabindex="-1">sort\u7684\u53C2\u6570\u539F\u7406 <a class="header-anchor" href="#sort\u7684\u53C2\u6570\u539F\u7406" aria-hidden="true">#</a></h2><p>\u5F53\u51FD\u6570\u540D\u4F5C\u4E3A<code>typename</code>\u91CC\u4F20\u9012\u7684\u662F\u51FD\u6570\u6307\u9488\u7C7B\u578B.</p><div class="language-c line-numbers-mode"><button class="copy"></button><span class="lang">c</span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">using namespace std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">template</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">typename _Compare</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__sort__</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">_Compare __com</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> a</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    a </span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    b</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">bool</span><span style="color:#F07178;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">__com</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">res:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> res </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">comp</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> a</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">bool</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(*</span><span style="color:#F07178;">comp_point</span><span style="color:#89DDFF;">)(</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;,</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> comp</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> x</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">bool</span><span style="color:#F07178;"> res11 </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">comp_point</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">__sort__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">comp</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u6211\u4EEC\u518D\u770B\u770B\u4EFF\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570:</p><div class="language-c line-numbers-mode"><button class="copy"></button><span class="lang">c</span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">using namespace std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">template</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">typename _Compare</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__sort__</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">_Compare __com</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> a</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    a </span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    b</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">bool</span><span style="color:#F07178;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">__com</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;">//\u8C03\u7528\u91CD\u8F7D\u7684()</span></span>
<span class="line"><span style="color:#F07178;">    cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">res:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> res </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> comp</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">bool</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">operator</span><span style="color:#89DDFF;">()(</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">const</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> a</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> x</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    comp xxx</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//\u5B9A\u4E49\u4E00comp\u7C7B\u578B\u7684xxx,\u5E76\u8C03\u7528\u6784\u9020\u51FD\u6570</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">__sort__</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">comp</span><span style="color:#89DDFF;">());</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//comp():\u58F0\u660E\u4E00\u4E2A\u533F\u540D\u7684comp\u7C7B\u578B\u6570\u636E</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">__sort__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">xxx</span><span style="color:#89DDFF;">);</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u672C\u8D28\u548C\u4E0A\u9762\u7684\u4E00\u6837</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="\u5F15\u7528" tabindex="-1">\u5F15\u7528 <a class="header-anchor" href="#\u5F15\u7528" aria-hidden="true">#</a></h2><ul><li><a href="http://www.cnblogs.com/imAkaka/articles/2407877.html" target="_blank" rel="noreferrer">STL sort\u6E90\u7801\u5256\u6790</a></li></ul>`,19),e=[o];function t(c,r,F,y,D,i){return a(),n("div",null,e)}var C=s(p,[["render",t]]);export{b as __pageData,C as default};
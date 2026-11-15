---
title: "How to simulate Googlebot using Chrome"
description: "The Chromebot technique: a simple, no-code way to set up Google Chrome so it behaves like the Googlebot crawler, to quickly replicate and debug crawling and indexing issues."
date: 2021-03-22
category: Technical SEO
read_time: "11 min read"
---

<p style="font-size:20px; line-height:1.7; color:#2B3052;">At DeepCrawl I helped <strong>debug thousands of technical SEO issues each year</strong> on some of the largest enterprise websites in the world.</p>

<p>I created a Googlebot simulator in Chrome to quickly replicate and debug complex technical SEO issues. I called it the <strong>Chromebot technique</strong>.</p>

<p>In this guide, I'm going to explain how to make your own Googlebot simulator in Google Chrome to debug complex technical SEO issues.</p>

<p><a href="#how-to-set-up-the-googlebot-simulator">Jump to the Googlebot Chrome technique</a>.</p>

<h2>What is the Chromebot technique?</h2>
<p>The Chromebot technique is a simple non-code solution which allows a human to configure Chrome settings so they act like a Googlebot crawler (not rendering).</p>
<p>It can help SEO specialists identify unique crawling and indexing issues on a website.</p>

<h2>Why use this technique?</h2>
<p>I've used this technique a lot at DeepCrawl when debugging countless client crawling and indexing issues.</p>
<p>It's a fairly simple but effective non-code technique to help technical SEOs think more like a search engine crawler and less like a human.</p>
<p>Many websites can do funny things when Googlebot requests pages.</p>

<h2>How do you know Googlebot crawler's settings?</h2>
<p>All of the settings are based on the time I spent chatting with engineers, studying the documentation around Googlebot, and updating <a href="https://www.deepcrawl.com/knowledge/guides/javascript-rendering/" target="_blank" rel="noopener">DeepCrawl's Page Rendering Service documentation</a>.</p>
<p>I've listed the original documents that I've based the settings on:</p>
<ul>
  <li><a href="https://developers.google.com/search/docs/guides/fix-search-javascript" target="_blank" rel="noopener">Fix Search-related JavaScript problems</a></li>
  <li><a href="https://developers.google.com/search/docs/guides/rendering" target="_blank" rel="noopener">Understand rendering on Google Search</a></li>
  <li><a href="https://www.stateofdigital.com/javascript-seo-crawling-indexing/" target="_blank" rel="noopener">JavaScript and SEO: The Difference Between Crawling and Indexing</a></li>
</ul>

<h2>What do you need for this technique?</h2>
<p>All you need is <a href="https://www.google.com/chrome/canary/" target="_blank" rel="noopener">Google Chrome Canary</a> and a Virtual Private Network (VPN).</p>

<h2>Why simulate Googlebot in Google Chrome?</h2>
<p>There are four core benefits to using this technique which I will briefly explain.</p>

<h3>Debugging in Google Chrome</h3>
<p>I have debugged hundreds of websites in my time at DeepCrawl. Third party web crawling tools are amazing but I've always found that they have limits.</p>
<p>When trying to interpret results from these tools I always turn to Chrome to help understand and debug complex issues.</p>
<p>Google Chrome is still my favourite non-SEO tool to debug issues and when configured it can even simulate Googlebot to validate what crawling tools are picking up.</p>

<h3>Googlebot uses Chromium</h3>
<p>Gary clarified that Googlebot uses its own custom built solution for fetching and downloading content from the web, which is then passed on to the indexing systems.</p>

<figure>
  <img src="{{ '/assets/blog/gary-illyes-googlebot-tweet.png' | relative_url }}" width="566" height="445" alt="Gary Illyes replying on Twitter that Google uses its own distributed client implementation, not curl or wget, to crawl the web." loading="lazy" style="max-width:566px; margin:0 auto;">
  <figcaption>Gary Illyes on how Googlebot fetches pages</figcaption>
</figure>

<p>There is no evidence to suggest that the Googlebot crawler uses Chromium or Chrome. However, Joshua Giardino at iPullRank makes a great argument about Google using <a href="https://ipullrank.com/googlebot-is-chrome" target="_blank" rel="noopener">Chromium to create a browser based web crawler</a>.</p>
<p>Google Chrome is also based on the <a href="https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/" target="_blank" rel="noopener">open-source Chromium project</a>, as are many other browsers.</p>
<p>It makes sense then to use a Chromium browser to simulate Googlebot web crawling to better understand your website.</p>

<h3>Unique SEO insights</h3>
<p>Using Google Chrome to quickly interpret web pages like Googlebot can help you understand exactly why there are crawling or indexing issues in minutes.</p>
<p>Rather than spending time waiting for a web crawler to finish running, I can use this technique to quickly debug potential crawling and indexing issues.</p>
<p>I then use the crawling data to see the extent of an issue.</p>

<h3>Googlebot isn't human</h3>
<p>The web is becoming more complex and dynamic.</p>
<p>It's important to remember that when debugging crawling and indexing issues you are a human and Googlebot is a machine. Many modern sites treat these two users differently.</p>
<p>Google Chrome, which was designed to help humans navigate the web, can now help a human view a site like a bot.</p>

<h2 id="how-to-set-up-the-googlebot-simulator">How to set up the Googlebot simulator</h2>
<p>Right, enough of the why. Let me explain how to create your own Googlebot simulator.</p>

<h3>Download Google Chrome</h3>
<p>I'd recommend downloading <a href="https://www.google.com/chrome/canary/" target="_blank" rel="noopener">Chrome Canary</a> and not using your own Google Chrome browser (or if you've switched to Firefox then use Google Chrome).</p>
<p>The main reason for this is because you will be changing browser settings, which can be a pain if you forget to reset them or have a million tabs open. Save yourself some time and just use Canary as your dedicated Googlebot simulator.</p>

<h3>Download or use a VPN</h3>
<p>If you are outside the United States then make sure you have access to a Virtual Private Network (VPN), so you can switch your IP address to the US.</p>
<p>This is because by default <a href="https://support.google.com/webmasters/answer/6144055" target="_blank" rel="noopener">Googlebot crawls from the US</a>, and to truly simulate crawl behaviour you have to pretend to be accessing a site from the US.</p>

<h3>Chrome settings</h3>
<p>Once you have these downloaded and set up it's time to configure Chrome settings.</p>
<p>I have provided an explanation of why you need to configure each setting. The original idea of using Chromebot came to me when I rewrote the <a href="https://www.deepcrawl.com/knowledge/guides/javascript-rendering/" target="_blank" rel="noopener">Page Rendering Service guide</a>.</p>

<h3>1. Web Dev Tools</h3>
<p>The Web Developer Tools UI is an important part of viewing your website like Googlebot. To make sure you can navigate around the console you will need to move the Web Dev Tools into a separate window.</p>
<p>Remember that your DevTools window is linked to the tab you opened it in. If you close that tab in Google Chrome the settings and DevTools window will also close.</p>
<p>It is very simple to do this, all you need to do is:</p>
<ol>
  <li>Right-click on a web page and click Inspect (or CTRL+SHIFT+I).</li>
  <li>Navigate to the right side, click on the 3 vertical dots, and select the far left dock side option.</li>
</ol>
<figure>
  <img src="{{ '/assets/blog/chromebot-devtools-dock-side.webp' | relative_url }}" width="1024" height="343" alt="Chrome DevTools menu with the undock into separate window option highlighted under Dock side." loading="lazy">
</figure>
<p>The Web Dev Tools console is now in a separate window.</p>

<h3>2. User-agent token</h3>
<p>A user-agent string (a line of text) is a way for applications to identify themselves to servers or networks. To simulate Googlebot we need to update the browser's user-agent to let a website know we are Google's web crawler.</p>
<p><strong>Command Menu</strong></p>
<p>Use the Command Menu (CTRL + Shift + P) and type "Show network conditions" to open the network conditions tab in DevTools and update the user-agent.</p>
<p><strong>Manual</strong></p>
<p>Navigate to the separate Web Dev Tools window and press the Esc button. This will open up the console.</p>
<figure>
  <img src="{{ '/assets/blog/chromebot-devtools-console-open.webp' | relative_url }}" width="1024" height="546" alt="Chrome DevTools in a separate window with the console drawer open at the bottom." loading="lazy">
</figure>
<p>Click on the three little dots on the left of the console tab.</p>
<figure>
  <img src="{{ '/assets/blog/chromebot-console-three-dots.webp' | relative_url }}" width="549" height="127" alt="The three dots menu on the left of the DevTools console tab." loading="lazy">
</figure>
<p>In the list of options, click on Network conditions. This will open the network conditions tab next to the console tab.</p>
<figure>
  <img src="{{ '/assets/blog/chromebot-network-conditions-menu.webp' | relative_url }}" width="761" height="608" alt="DevTools drawer menu with Network conditions highlighted." loading="lazy">
</figure>
<p>In the network conditions tab, untick the user agent "Use browser default" option (called "Select automatically" in older versions of Chrome).</p>
<figure>
  <img src="{{ '/assets/blog/chromebot-user-agent-select-automatically.webp' | relative_url }}" width="893" height="292" alt="Network conditions tab with the user agent Select automatically checkbox unticked." loading="lazy">
</figure>
<p>Google Chrome will now allow you to change the user-agent string of your browser to Googlebot or Googlebot Smartphone.</p>
<figure>
  <img src="{{ '/assets/blog/chromebot-user-agent-dropdown.webp' | relative_url }}" width="679" height="551" alt="User agent dropdown in DevTools showing the Googlebot, Googlebot Desktop and Googlebot Smartphone options." loading="lazy">
</figure>
<p>I usually set it to Googlebot Smartphone, as Google uses mobile-first indexing by default. Although I'd recommend checking in Google Search Console to see which Googlebot crawls your website most often.</p>
<figure>
  <img src="{{ '/assets/blog/chromebot-googlebot-smartphone-selected.webp' | relative_url }}" width="790" height="242" alt="Network conditions tab with Googlebot Smartphone selected as the user agent." loading="lazy">
</figure>
<p>The Googlebot user-agent will automatically use the <a href="https://www.chromestatus.com/features/schedule" target="_blank" rel="noopener">dev beta Chrome version</a>, not the stable version. This isn't usually an issue for 99% of websites, but if you need to you can input the custom user-agent from stable Chrome.</p>
<figure>
  <img src="{{ '/assets/blog/chromebot-googlebot-user-agent-chrome-version.webp' | relative_url }}" width="1281" height="121" alt="Googlebot Smartphone user-agent string with the Chrome version number highlighted." loading="lazy">
</figure>
<p>Now you've changed the user-agent, close the console (press Esc again).</p>

<h3>3. Enable stateless crawling</h3>
<p>Googlebot <a href="https://www.seroundtable.com/google-crawls-stateless-24138.html" target="_blank" rel="noopener">crawls web pages stateless</a> across page loads.</p>
<p>The Google Search developer <a href="https://developers.google.com/search/docs/guides/rendering" target="_blank" rel="noopener">documentation states</a> that this means each new page crawled uses a fresh browser and does not use the cache, cookies, or location to discover and crawl web pages.</p>
<p>Our Googlebot simulator also needs to replicate being stateless (as much as it can) across each new page loaded. To do this you'll need to disable the cache, cookies, and location in Chrome.</p>

<p><strong>Disable the cache</strong></p>
<p>Use the Command Menu (CTRL + Shift + P) and type "Disable cache" to disable the cache when DevTools is open. Or, manually, go to the Network panel in DevTools and check "Disable cache".</p>
<figure>
  <img src="{{ '/assets/blog/chromebot-disable-cache.webp' | relative_url }}" width="748" height="140" alt="Disable cache ticked in the Chrome DevTools Network panel." loading="lazy">
</figure>

<p><strong>Disable cookies</strong></p>
<p>In Chrome navigate to <em>chrome://settings/cookies</em>. In the cookies settings choose the option to "Block third-party cookies".</p>
<figure>
  <img src="{{ '/assets/blog/chromebot-disable-cookies.webp' | relative_url }}" width="850" height="849" alt="Chrome cookies and other site data settings page." loading="lazy">
</figure>

<p><strong>Disable location</strong></p>
<p>In Chrome navigate to <em>chrome://settings/content/location</em>. Toggle "Ask before accessing (recommended)" to "Blocked".</p>
<figure>
  <img src="{{ '/assets/blog/chromebot-disable-location.webp' | relative_url }}" width="891" height="530" alt="Chrome location settings page with access blocked." loading="lazy">
</figure>

<h3>4. Disable Service Workers</h3>
<p>Googlebot disables interfaces relying on the <a href="https://developers.google.com/search/docs/guides/rendering#disabled-interfaces" target="_blank" rel="noopener">Service Worker specification</a>. This means it bypasses the Service Worker, which might cache data, and fetches URLs from the server.</p>
<p>To do this navigate to the Application panel in DevTools, go to Service Workers, and check the "Bypass for network" option.</p>
<figure>
  <img src="{{ '/assets/blog/chromebot-service-workers-bypass.webp' | relative_url }}" width="880" height="272" alt="Application panel in Chrome DevTools with Service Workers selected and Bypass for network ticked." loading="lazy">
</figure>
<p>Once disabled the browser will be forced to always request a resource from the network and not use a Service Worker.</p>

<h3>5. Disable JavaScript</h3>
<p>The Googlebot crawler <a href="https://www.stateofdigital.com/javascript-seo-crawling-indexing/" target="_blank" rel="noopener">does not execute any JavaScript</a> when crawling.</p>
<figure>
  <img src="{{ '/assets/blog/chromebot-wrs-10000ft-view.webp' | relative_url }}" width="950" height="535" alt="Slide showing crawled HTML and resources going into the Web Rendering Service to produce the rendered DOM tree." loading="lazy">
  <figcaption>Googlebot &amp; JavaScript: A Closer Look at the WRS, TechSEO Boost 2019</figcaption>
</figure>
<p>The crawling and rendering sub-systems are further explained in the <a href="https://developers.google.com/search/docs/guides/javascript-seo-basics#how-googlebot-processes-javascript" target="_blank" rel="noopener">Understand the JavaScript SEO basics guide</a> and <a href="https://www.youtube.com/watch?v=Qxd_d9m9vzo" target="_blank" rel="noopener">Googlebot &amp; JavaScript: A Closer Look at the WRS</a> at TechSEO Boost 2019.</p>

<figure>
  <img src="{{ '/assets/blog/googlebot-crawl-render-index.png' | relative_url }}" width="880" height="608" alt="Diagram of how Googlebot works: crawl queue, crawler, processing, render queue, renderer and index." loading="lazy">
  <figcaption>How Googlebot crawls and renders the web. Source: Google Search Central</figcaption>
</figure>

<p>Googlebot is a very complex system and even this <a href="https://www.seroundtable.com/google-no-two-waves-indexing-29225.html" target="_blank" rel="noopener">diagram is an oversimplification</a>. However, the Googlebot crawler must first fetch, download, and inspect a web page regardless of rendering.</p>
<p>It's important to make sure we can inspect server-side HTML, HTTP status codes, and resources without JavaScript in our Googlebot simulator.</p>
<p><strong>Command Menu</strong></p>
<p>Use the Command Menu (CTRL + Shift + P) and type "Disable JavaScript" to quickly disable JavaScript.</p>
<p><strong>Manual</strong></p>
<p>To disable JavaScript in Chrome, navigate to DevTools and click on the settings cog.</p>
<figure>
  <img src="{{ '/assets/blog/chromebot-devtools-settings-cog.webp' | relative_url }}" width="880" height="258" alt="The settings cog in the top right of Chrome DevTools." loading="lazy">
</figure>
<p>Then check the "Disable JavaScript" box.</p>
<figure>
  <img src="{{ '/assets/blog/chromebot-disable-javascript-setting.webp' | relative_url }}" width="820" height="485" alt="Chrome DevTools settings with Disable JavaScript ticked under Debugger." loading="lazy">
</figure>
<p>Now when you use your Googlebot simulator you'll only be inspecting the initial server-side HTML. This will help you understand if there are any link, content, or HTTP status code issues causing the crawler problems.</p>

<h3>6. Network panel</h3>
<p>Finally, it is time to configure the Network panel. It is in this area of DevTools where you will be spending a lot of time as Googlebot.</p>
<figure>
  <img src="{{ '/assets/blog/chromebot-network-panel.webp' | relative_url }}" width="1024" height="292" alt="Chrome DevTools Network panel showing status, scheme, domain, remote address, type, size, time and priority columns." loading="lazy">
</figure>
<p>The <a href="https://developer.chrome.com/docs/devtools/network/" target="_blank" rel="noopener">Network panel</a> is used to make sure resources are being fetched and downloaded. It is in this panel that you can inspect the metadata, HTTP headers, content, etc. of each individual URL downloaded when requesting a page.</p>
<p>However, before we can inspect the resources (HTML, CSS, IMG) downloaded from the server like Googlebot, we need to update the columns to display the most important information in the panel.</p>
<p>Go to the Network panel in DevTools (now a separate window). On the table in the panel, right-click on the column headers and select the headings listed below to be added as columns (remove any others not listed).</p>
<figure>
  <img src="{{ '/assets/blog/chromebot-network-columns.webp' | relative_url }}" width="1024" height="409" alt="Right-click menu on the Network panel column headers with Status, Scheme, Domain, Remote Address, Type, Size, Time and Priority ticked." loading="lazy">
</figure>
<p>I have also provided a brief explanation of each heading and why they should be added.</p>

<table>
  <thead>
    <tr><th>Column</th><th>Why it matters</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Status</strong></td><td>The HTTP status code of the URL being downloaded from the server. <a href="https://webmasters.googleblog.com/2008/11/date-with-googlebot-part-ii-http-status.html" target="_blank" rel="noopener">Googlebot will alter its crawling behaviour</a> depending on the type of HTTP status code. It is one of the most critical pieces of information to understand when auditing URLs.</td></tr>
    <tr><td><strong>Scheme</strong></td><td>Displays the insecure http:// or secure https:// scheme of the resource being downloaded. Googlebot prefers to <a href="https://webmasters.googleblog.com/2015/12/indexing-https-pages-by-default.html" target="_blank" rel="noopener">crawl and index HTTPS URLs</a>, so it's important to understand the scheme being used by resources on a page.</td></tr>
    <tr><td><strong>Domain</strong></td><td>Displays the domain the resources were downloaded from. It's important to understand if important content relies on an external CDN, API, or subdomain, as Googlebot might have trouble fetching the content.</td></tr>
    <tr><td><strong>Remote address</strong></td><td>The IP address of the host the resources are downloaded from. As the <a href="https://www.deepcrawl.com/knowledge/technical-seo-library/crawl-budget/" target="_blank" rel="noopener">crawl budget of a website is based on the IP address of the host</a> and not the domain, it is important to take into account the IP address of each URL fetched.</td></tr>
    <tr><td><strong>Type</strong></td><td>The MIME type of the requested resource. Make sure important URLs are labelled with the correct MIME type, as <a href="https://twitter.com/JohnMu/status/1034759576430755840" target="_blank" rel="noopener">different Googlebots are interested in different types of content</a> (HTML, CSS, IMG).</td></tr>
    <tr><td><strong>Size</strong></td><td>The combined size of the response headers plus the response body, as delivered by the server. Improving site speed helps both your <a href="https://developers.google.com/search/blog/2017/01/what-crawl-budget-means-for-googlebot#crawl-rate-limit" target="_blank" rel="noopener">users and Googlebot access your site quicker</a>.</td></tr>
    <tr><td><strong>Time</strong></td><td>The total duration, from the start of the request to the receipt of the final byte in the response. Your server's response time can affect the <a href="https://webmasters.googleblog.com/2017/01/what-crawl-budget-means-for-googlebot.html" target="_blank" rel="noopener">crawl rate limit of Googlebot</a>. If the server slows down, the crawler will crawl your website less.</td></tr>
    <tr><td><strong>Priority</strong></td><td>The browser's best guess of which resources to load first. This is not how Googlebot prioritises URLs to crawl, but it can be useful to see which resources the browser prioritises (using its own heuristics).</td></tr>
    <tr><td><strong>Last Modified</strong></td><td>The date and time the origin server believes the resource was last modified. This <a href="https://www.deepcrawl.com/knowledge/hangout-library/last-modified/" target="_blank" rel="noopener">can be used by Googlebot, in combination with other signals,</a> to help prioritise crawling on a site.</td></tr>
  </tbody>
</table>

<h2>Switch to a US IP address</h2>
<p>Once you have updated the Network panel columns in Chrome DevTools your Googlebot simulator is almost ready.</p>
<p>If you want to use it straight away you need to switch to a US IP address.</p>
<p>Googlebot crawls from the <a href="https://twitter.com/googlewmc/status/930013394492633088" target="_blank" rel="noopener">United States of America</a>. For this reason, I'd always recommend changing your IP address to the US when using your Googlebot simulator.</p>
<p>It's the best way to understand how your website behaves when visited by Googlebot. For example, if a site is blocking visitors with US IP addresses or geo-redirects visitors based on their location, this might cause issues with Google crawling and indexing a website.</p>

<h2>I, Googlebot Chrome</h2>
<p>Once your IP address is switched you are ready to go and have your own Googlebot simulator.</p>
<figure>
  <img src="{{ '/assets/blog/chromebot-angular-test.webp' | relative_url }}" width="880" height="466" alt="The Googlebot simulator in action: angular.io with JavaScript disabled next to the DevTools Network panel." loading="lazy">
</figure>
<p>If you want to test to see if it works, go to <a href="https://angular.io/" target="_blank" rel="noopener">angular.io</a> or <a href="https://www.eventbrite.com/" target="_blank" rel="noopener">eventbrite.com</a>. These websites require JavaScript to load content and links. With JavaScript disabled these sites won't load content properly in the interface.</p>

<h2>Frequently asked questions</h2>

<h3>Does the simulator work for just one tab?</h3>
<p>Yes. DevTools settings only apply to the tab you currently have open. Opening a new tab will cause the Disable JavaScript and user-agent settings to be reset.</p>
<p>Other Chrome based settings (cookies, service workers) will still be configured.</p>

<h3>Does this help to debug JavaScript SEO issues?</h3>
<p>Yes, this technique can be used to debug JavaScript SEO issues on a website when comparing view-source to rendered HTML. Although there might be better extensions and tools to do this at scale.</p>

<h3>Do I need to update the settings every time?</h3>
<p>Once your tab is closed you'll need to update the following settings:</p>
<ul>
  <li>Disable JavaScript</li>
  <li>Update the user-agent token</li>
</ul>
<p>All other settings will have been saved by the browser.</p>

<h3>Why do I need to use Chrome Canary?</h3>
<p>I only suggest using it to stop you from messing up your normal Chrome browser and having to spend time going back and forth between settings.</p>
<p>If you use Firefox or Safari then just download the normal Google Chrome.</p>

<h3>I've already built this in headless Chrome or through some other automation?</h3>
<p>First off, well done! If you're like me and don't (currently) have the time or capacity to learn new coding languages, then this non-code method is a great way to get started.</p>

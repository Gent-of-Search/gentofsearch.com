---
title: "How to debug JavaScript SEO issues in Chrome"
description: "In this guide, I will talk about how to use a very simple manual technique to efficiently diagnose rendering issues on a website."
date: 2022-05-26
category: Technical SEO
read_time: "6 min read"
---

<p>I have talked about <a href="{{ '/blog/chrome-googlebot-simulator/' | relative_url }}">how to simulate the Googlebot crawler</a> to debug crawling and indexing issues.</p>
<p>In this guide, I will talk about how to use a very simple manual technique to efficiently diagnose rendering issues in Google's index.</p>

<hr>

<p><strong>Note:</strong> The technique of using rendered HTML from Google tools was dreamed up by Oliver Mason, SEO Consultant at <a href="https://ohgm.co.uk/" target="_blank" rel="noopener">ohgm</a>. The original technical SEO, who writes edge case studies.</p>

<hr>

<h2>How to manually diagnose rendering issues</h2>
<p>Right, onto debugging rendering issues in Google Search.</p>

<h3>Step 1: Find the right page</h3>
<p>Find the page you want to inspect and open it in 2 tabs in Google Chrome.</p>
<p>I usually try to focus on page templates on large websites. This helps to see issues which might scale across the website.</p>
<p>In this example, I wanted to test to see if Google was having any issues rendering the content of my newsletters over at The SEO Sprint (which uses the Substack platform).</p>

<figure>
  <img src="{{ '/assets/blog/debug-js-substack-newsletter-page.png' | relative_url }}" width="882" height="709" alt="A newsletter post on The SEO Sprint, hosted on Substack, open in Google Chrome." loading="lazy">
</figure>

<h3>Step 2: Grab the rendered HTML from the index</h3>
<p>Once you've found the page and have it open in two tabs, all you need to do is head over to either the <a href="https://support.google.com/webmasters/answer/9012289" target="_blank" rel="noopener">Google Search Console URL Inspection tool</a> or the <a href="https://search.google.com/test/mobile-friendly" target="_blank" rel="noopener">Mobile-friendly testing tool</a>. The tool you use will depend on your level of access.</p>
<p>The URL Inspection tool uses the <a href="https://support.google.com/webmasters/answer/9012289" target="_blank" rel="noopener">rendered HTML from the most recent crawl</a> in Google's index.</p>
<p>This rendered HTML is the <a href="https://youtu.be/Qxd_d9m9vzo?t=1953" target="_blank" rel="noopener">artifact that Google stores in its search index</a>, which is used to <a href="https://www.google.com/search/howsearchworks/how-search-works/ranking-results/" target="_blank" rel="noopener">assess the quality and relevance of your content</a>.</p>

<figure>
  <img src="{{ '/assets/blog/debug-js-url-inspection-view-crawled-page.png' | relative_url }}" width="1600" height="726" alt="Google Search Console URL Inspection tool with the View Crawled Page panel open." loading="lazy">
  <figcaption>Google URL Inspection tool &gt; View Crawled Page</figcaption>
</figure>

<p>It is for this reason that gaining access to Google Search Console is critical to really understand how Google renders your pages.</p>
<p>This doesn't mean that the mobile-friendly tool is not useful in debugging rendering issues, <a href="https://youtu.be/2snXeMR6jRU?t=977" target="_blank" rel="noopener">but due to the different configuration settings</a> between GSC testing tools and Googlebot's systems the results might be different.</p>
<p>For the best results always go with the Google URL Inspection tool &gt; View Crawled Page (not the live test version).</p>
<p>If you don't have access to GSC then use the mobile-friendly test tool.</p>

<h3>Capture rendered HTML from Google's index</h3>
<p>Once you've picked the tool follow these steps:</p>
<ol>
  <li>Submit the chosen URL into the URL Inspection tool.</li>
  <li>Navigate to the "View Crawled Page" button.</li>
  <li>This will open the Crawled page &gt; HTML sidebar. All you need to do is click on the <strong>Copy</strong> icon.</li>
</ol>

<figure>
  <img src="{{ '/assets/blog/debug-js-copy-rendered-html.png' | relative_url }}" width="1591" height="775" alt="The HTML tab of View Crawled Page in the URL Inspection tool, with the copy icon to copy Google's rendered HTML." loading="lazy">
  <figcaption>Copying the Google rendered HTML from the GSC URL Inspection tool</figcaption>
</figure>

<h3>Step 3: Inspect the rendered HTML from Google</h3>
<p>Now head back over to your two tabs.</p>
<p>Right-click and inspect the element on one of the tabs. This will open Chrome DevTools and display the rendered HTML in your browser.</p>
<p>Right-click on the <code>&lt;html&gt;</code> element at the very top of the code and then choose Edit as HTML. Hit CTRL+A to highlight all the rendered HTML from the browser and hit delete.</p>

<figure>
  <img src="{{ '/assets/blog/debug-js-edit-as-html.png' | relative_url }}" width="1470" height="709" alt="Chrome DevTools Elements panel with the html element open in Edit as HTML mode." loading="lazy">
</figure>

<p>Next, paste the copied rendered HTML from Google Search Console into the editable HTML of the page.</p>

<figure>
  <img src="{{ '/assets/blog/debug-js-paste-rendered-html.png' | relative_url }}" width="1470" height="440" alt="Google's rendered HTML pasted into the Edit as HTML box in Chrome DevTools." loading="lazy">
</figure>

<p>That is it.</p>

<h3>Step 4: Compare Google rendered HTML vs current page</h3>
<p>Return to your two tabs in Chrome and compare the two pages side by side.</p>

<figure>
  <img src="{{ '/assets/blog/debug-js-google-vs-chrome-rendered.png' | relative_url }}" width="1600" height="721" alt="The same newsletter page side by side: Google's rendered HTML on one side and Chrome's rendered page on the other." loading="lazy">
  <figcaption>Googlebot rendered HTML vs Chrome rendered HTML</figcaption>
</figure>

<p>Check to see if Google has missed or is not rendering any content on the page, quickly and easily.</p>

<h3>Step 5: Inspect in Google Chrome DevTools</h3>
<p>When you notice differences between the two pages, remember to check the Google Search index rendered code in the Elements tab of Chrome DevTools.</p>
<p>It is easy to get excited about differences, but always remember to check the code to make sure the content and links really are missing.</p>
<p>For example, the Substack personalised links that appear when you hover over my author profile picture are missing from the rendered HTML from Google's index, compared with the page loaded in incognito.</p>

<figure>
  <img src="{{ '/assets/blog/debug-js-personalised-links-missing.png' | relative_url }}" width="782" height="636" alt="Chrome DevTools showing the personalised Substack profile links missing from Google's rendered HTML." loading="lazy">
  <figcaption>Personalised internal links are not indexable by Googlebot</figcaption>
</figure>

<p>This makes sense if you read around how the Web Rendering Service works: it is stateless across page loads. It does not sign in or store any data from page to page (unlike your browser).</p>

<hr>

<h2>How can you use this technique to debug JavaScript SEO issues?</h2>
<p>This technique can help you uncover a number of JavaScript SEO issues.</p>

<h3>Content and links loaded by user events (scroll or click)</h3>
<p>The UK ecommerce brand Fatface uses an infinite scroll to load more product listings on its category pages. If we use the mobile-friendly test tool (yes, I know, not as accurate) and copy-paste the rendered HTML into Chrome, we can instantly see a difference between the two pages.</p>
<p>If you keep scrolling on the rendered HTML from Google, you can see that not all the PLPs load on the page.</p>

<figure>
  <img src="{{ '/assets/blog/debug-js-fatface-infinite-scroll.png' | relative_url }}" width="1600" height="807" alt="Fatface category page side by side: fewer products load in Google's rendered HTML than in Chrome." loading="lazy">
  <figcaption>Fatface uses an infinite scroll to load content and internal PLP links</figcaption>
</figure>

<p>If we scroll down and check the code for the website, you can see that after a certain point the internal links to deeper level PLPs are missing in the rendered HTML.</p>

<figure>
  <img src="{{ '/assets/blog/debug-js-fatface-missing-plp-links.png' | relative_url }}" width="861" height="650" alt="Chrome DevTools showing where the internal product listing links stop in Google's rendered HTML." loading="lazy">
</figure>

<h3>Missing navigation links</h3>
<p>A few years ago I noticed ASOS was not rendering the main navigation in the mobile-friendly testing tool. It turns out that a <a href="https://www.optixsolutions.co.uk/blog/how-asos-seo-issues-contributed-to-their-87-drop-in-profits/" target="_blank" rel="noopener">lot of other SEO issues</a> also contributed to ASOS's SEO traffic dropping.</p>

<h3>Lazy loading images not rendering properly</h3>
<p>Developers can rely on JavaScript to lazy load images from third-party CDNs, and sometimes it can be a problem for Googlebot to access these resources.</p>

<h3>Other JavaScript SEO issues</h3>
<p>There are a number of other issues which you can also detect:</p>
<ul>
  <li>Critical content not rendered by Googlebot</li>
  <li>Critical resources (CSS and JS) not accessed by Googlebot</li>
  <li>Strange client-side redirects stopping Googlebot from accessing the website</li>
  <li>Etc.</li>
</ul>

<hr>

<h2>Summary: I, Web Rendering Service</h2>
<p>There we go, a simple and efficient way to diagnose JavaScript SEO issues using Google Chrome.</p>

<hr>

<h2>Frequently asked questions</h2>

<h3>Why is the layout different to my page?</h3>
<p>The rendering of the page might look a bit off compared to your current page. This isn't always an issue if the rendering snapshots in the mobile-friendly test, URL Inspection tool and Rich Results desktop test show it renders fine.</p>

<h3>Do I trust what I see in the browser?</h3>
<p>I always check the rendered HTML in the code in both Chrome and in the URL Inspection or mobile-friendly testing tool to make sure the links and content are there.</p>

<h3>What if I can't use the URL Inspection tool?</h3>
<p>I'd recommend using the mobile-friendly testing tool or the Rich Results test. Both tools use the Web Rendering Service. The one issue is that these tools don't wait around if the website is slow, unlike the real WRS. Although this does highlight bigger web performance issues.</p>

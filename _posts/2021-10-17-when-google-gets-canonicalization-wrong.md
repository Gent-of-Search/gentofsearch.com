---
title: "A curious case of canonicalization"
description: "In this case study, I found one of my own blog posts had not been indexed by Google. So, naturally being a technical SEO specialist I investigated it."
date: 2021-10-17
category: Technical SEO
read_time: "5 min read"
---

<p>In this case study, I found one of my own blog posts had not been indexed by Google. So, naturally being a technical SEO specialist, I investigated it.</p>

<h2>TL;DR</h2>
<p>Google's canonicalization algorithm can be spot on but, as I found out, it doesn't always get it right.</p>
<p>In this experiment I learned that:</p>
<ul>
  <li><strong>Google can be wrong:</strong> Even with all the right signals in place, Google's canonicalization machine learning algorithm can choose the wrong URL.</li>
  <li><strong>Reporting bugs:</strong> The problem wasn't helped by the Google Search Console Index Coverage report choosing to categorise the canonical URL as "Crawled, currently not indexed" (so I wasn't sure what the problem was straight away).</li>
  <li><strong>SEO performance:</strong> Non-canonical URLs won't perform as well as pages that are meant to be the canonical, especially if they are higher up in the link architecture.</li>
  <li><strong>Debugging:</strong> Using good old fashioned technical SEO debugging techniques can help identify the problem and solve it (which I have mentioned below).</li>
  <li><strong>Feed URLs:</strong> It seems RSS feeds that contain all the content of a post (and nothing else) can be used and counted in the canonicalization algorithm.</li>
</ul>

<hr>

<h2>Update: 05/11/2021</h2>
<p>A few SEOs made some good points about the solution to 404 the /feed/ URLs.</p>
<p>For a client it could cause problems, as RSS feeds are still used to generate backlinks, XML sitemaps, etc.</p>
<p>I just did this as a quick experiment without any real thought to the long term impact of getting rid of an author feed URL (I just wanted to see if the feed URL was the issue or the post itself). In hindsight, what I should have done (and what I would recommend to clients) is:</p>
<ul>
  <li>Update the feeds to include an excerpt of each post (update in Settings &gt; Reading).</li>
  <li>Use an X-Robots-Tag HTTP header on all /feed/ URLs (if feed URLs persist in the index).</li>
</ul>

<hr>

<h2>The problem</h2>
<p>When I was playing around in the Gent of Search Google Search Console (GSC) I noticed that one of my blog posts wasn't indexed.</p>

<figure>
  <img src="{{ '/assets/blog/canonicalization-gsc-not-indexed-url.png' | relative_url }}" width="1024" height="266" alt="URL Inspection tool reporting the canonical tag vs rel canonical HTTP header blog post is not on Google." loading="lazy">
  <figcaption>/blog/canonical-tag-vs-rel-canonical-http-header/</figcaption>
</figure>

<p>Google wasn't really giving me any information on why the page wasn't indexed, just <em>"Crawled, currently not indexed"</em>.</p>

<figure>
  <img src="{{ '/assets/blog/canonicalization-gsc-crawled-not-indexed.png' | relative_url }}" width="929" height="535" alt="Google Search Console Index Coverage report listing the blog post under Crawled, currently not indexed." loading="lazy">
  <figcaption>GSC Index Coverage "Crawled, currently not indexed" report</figcaption>
</figure>

<p>I thought this was odd considering the utter garbage I've seen it crawl and index in past experiments. The content was unique and (I thought) fairly interesting.</p>
<p>So, I did a little digging.</p>
<p>I began to notice that the GSC Index Coverage report was telling me that /feed/ URLs were being crawled and indexed by Google. Which was odd, as they were just RSS feeds and not actual pages.</p>

<figure>
  <img src="{{ '/assets/blog/canonicalization-gsc-index-coverage-feed-urls.png' | relative_url }}" width="970" height="745" alt="Google Search Console Index Coverage report showing /feed/ URLs as indexed." loading="lazy">
  <figcaption>Google Search Console Index Coverage report</figcaption>
</figure>

<p>I began to check these /feed/ URLs and soon noticed that there was duplicate content in the /feed/ URLs.</p>
<p>Popping a snippet of content in quotes (<code>""</code>) into Google Search revealed that the <code>/author/agent/feed/</code> URL was appearing for the content.</p>

<figure>
  <img src="{{ '/assets/blog/canonicalization-google-search-snippet-feed-url.png' | relative_url }}" width="787" height="285" alt="Google search for an exact quote from the blog post returning the gentofsearch.com/author/agent/feed/ URL." loading="lazy">
</figure>

<p>The /canonical-tag-vs-rel-canonical-http-header/ content had been duplicated in the following feed URL: <code>https://gentofsearch.com/author/agent/feed/</code>.</p>

<figure>
  <img src="{{ '/assets/blog/canonicalization-feed-url-duplicate-content.png' | relative_url }}" width="1024" height="380" alt="The author RSS feed URL containing the full content of the blog post." loading="lazy">
  <figcaption>Feed URL contained duplicate content</figcaption>
</figure>

<p>I checked Google's cache and, sure enough, the full version of the /feed/ URL showed that the page with the duplicate content had been indexed.</p>

<figure>
  <img src="{{ '/assets/blog/canonicalization-google-cache-feed-url.png' | relative_url }}" width="1024" height="608" alt="Google's cached copy of the author feed URL showing the duplicated blog post content." loading="lazy">
  <figcaption>Google cache showing duplicate content</figcaption>
</figure>

<p>The URL Inspection tool showed the page was indexed and was on Google.</p>

<figure>
  <img src="{{ '/assets/blog/canonicalization-url-inspection-feed-indexed.png' | relative_url }}" width="1024" height="593" alt="URL Inspection tool reporting the author feed URL is on Google." loading="lazy">
  <figcaption>URL Inspection tool</figcaption>
</figure>

<p>It was also getting clicks and impressions in Google Search.</p>

<figure>
  <img src="{{ '/assets/blog/canonicalization-feed-url-clicks-impressions.png' | relative_url }}" width="1024" height="346" alt="Search Console performance report showing clicks and impressions for the author feed URL." loading="lazy">
</figure>

<hr>

<h2>Why was Google choosing the non-canonical URL?</h2>
<p>I asked myself this question as I found the problem.</p>
<p>I double-checked and couldn't get my head around why Google was picking the non-canonical URL as the main version of the content.</p>
<p>Let me explain why I couldn't get my head around it.</p>

<h3>Canonical URL</h3>
<p>The canonical URL (/blog/canonical-tag-vs-rel-canonical-http-header/) that I wanted indexed had the following canonical signals:</p>
<ul>
  <li>HTML page</li>
  <li>Internally linked to from the website (Homepage &gt; /blog/ &gt; post)</li>
  <li>Self-referencing <code>rel="canonical"</code> link</li>
  <li>Included in the XML sitemap file</li>
  <li>Better user experience than a /feed/ URL</li>
</ul>

<h3>Non-canonical URL</h3>
<p>The non-canonical URL (/author/agent/feed/) that Google had picked as the canonical version had the following canonical signals:</p>
<ul>
  <li>Not included in the XML sitemap</li>
  <li>No self-referencing canonical tag</li>
  <li>An RSS feed URL with HTML</li>
  <li>Returned a clear <code>content-type: application/rss+xml</code> in the HTTP header</li>
  <li>Linked to from a <strong>deeper meta robots noindex page</strong> (Homepage &gt; /blog/ &gt; post &gt; author &gt; feed URL)</li>
</ul>

<h3>Google's tools aren't perfect</h3>
<p>I know from <a href="https://www.youtube.com/watch?v=LsfIlviyDvE" target="_blank" rel="noopener">Google's WMConf MTV '19 talk on deduplication</a> that it uses machine learning to figure out the canonical version based on a number of soft and hard signals.</p>
<p>Google, in its machine learning wisdom, seemed to treat the RSS feed URL as the "canonical version" of the content.</p>
<p>Even when all the canonicalization signals are quite clear and strong on which is the canonical version.</p>
<p>Combine this with GSC reporting the blog post as <code>"Crawled, currently not indexed"</code> and it is a bit difficult to understand what Google's algorithms were thinking.</p>
<p>I think more than anything this proves that machine learning and Google's reporting systems aren't perfect.</p>
<p>So, I set about fixing this curious crawling and indexing issue.</p>

<hr>

<h2>The fix</h2>
<p>I knew the problem was the /feed/ URL and went about making it return a <code>4xx</code> status code.</p>

<figure>
  <img src="{{ '/assets/blog/canonicalization-feed-url-404.png' | relative_url }}" width="637" height="148" alt="The author feed URL returning a 404 status code." loading="lazy" style="max-width:637px; margin:0 auto;">
  <figcaption>/author/agent/feed/ URL returning a 404</figcaption>
</figure>

<p><em><strong>Note:</strong> Normally I would tell clients to 301 redirect a URL that had impressions and clicks, but this was a /feed/ URL and it didn't make sense to redirect it.</em></p>
<p>I submitted the feed URL to be crawled before making it <code>404</code>, as otherwise Google won't allow you to request indexing in the URL Inspection tool.</p>
<p>Once the page was dropped from the index I then requested the canonical I wanted indexed to be crawled.</p>
<p>I then waited to see what happened…</p>

<hr>

<h2>The result</h2>
<p>It only took a few days for Google to correct the issue.</p>
<p>The <code>https://gentofsearch.com/author/agent/feed/</code> 404 URL was crawled and dropped from Google's index.</p>

<figure>
  <img src="{{ '/assets/blog/canonicalization-feed-url-dropped.png' | relative_url }}" width="1024" height="466" alt="Index Coverage report showing valid pages dropping from 11 to 10 as the feed URL left the index." loading="lazy">
</figure>

<p>I then requested Googlebot to recrawl and (hopefully) index the actual canonical version of the page.</p>

<figure>
  <img src="{{ '/assets/blog/canonicalization-request-indexing-canonical.png' | relative_url }}" width="1024" height="695" alt="URL Inspection tool requesting indexing for the canonical blog post URL." loading="lazy">
</figure>

<p>The canonical version of the URL appeared in Index Coverage &gt; Submitted and indexed.</p>

<figure>
  <img src="{{ '/assets/blog/canonicalization-submitted-and-indexed.png' | relative_url }}" width="1024" height="560" alt="Index Coverage report listing the canonical blog post under Submitted and indexed." loading="lazy">
</figure>

<p>It also appeared in Google Search when copying and pasting the URL into Google Search, and was now appearing for snippets of the content.</p>

<figure>
  <img src="{{ '/assets/blog/canonicalization-google-search-canonical-url.png' | relative_url }}" width="713" height="397" alt="Google Search returning the canonical blog post URL." loading="lazy">
</figure>

<p>The URL Inspection tool also showed that the URL was now on Google.</p>

<figure>
  <img src="{{ '/assets/blog/canonicalization-url-inspection-canonical-indexed.png' | relative_url }}" width="1024" height="646" alt="URL Inspection tool reporting the canonical blog post URL is on Google." loading="lazy">
</figure>

<p>The canonical URL blog post also began to rank for keywords and gain impressions in Google Search.</p>

<figure>
  <img src="{{ '/assets/blog/canonicalization-canonical-url-clicks-impressions.png' | relative_url }}" width="1024" height="341" alt="Search Console performance report comparing the canonical blog post with the feed URL: impressions rise for the blog post from late September 2021." loading="lazy">
</figure>

<p>If we compare the canonical URL to the non-canonical /feed/ URL, we can see that the "actual" blog post is now doing a lot better in terms of SEO performance (even in such a short space of time).</p>
<p>This isn't a surprise considering it's an actual HTML page and is linked higher up the architecture of the website.</p>

<hr>

<h2>Summary: what did I learn?</h2>
<p>This was an odd but curious technical SEO issue on my own website.</p>
<p>I think the main things I learned were that:</p>
<ul>
  <li>Google's machine learned canonicalization algorithm does not always get it right, and</li>
  <li>Google Search Console reports don't always get it right either.</li>
</ul>
<p>When this happens you'll need to use your detective skills to debug and fix technical SEO issues.</p>

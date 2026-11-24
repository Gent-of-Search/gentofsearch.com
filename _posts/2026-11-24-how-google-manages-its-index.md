---
title: "SearchNorwichXL: How Google Manages Its Index"
description: "My SearchNorwichXL 2026 talk on how Google's index works, how page quality is measured, and why pages drop out of the index. Video, slides and full transcript."
date: 2026-11-24
category: Indexing
read_time: "12 min read"
---

<p>This is my talk from <strong>SearchNorwichXL 2026</strong>, given on 24 September 2026.</p>
<p>It covers what Google's index really is, how Google measures page quality, and why pages get actively removed from the index. Including the 130-day and 190-day indexing rules.</p>
<p>You can watch the video, flick through the slides, or read the full transcript below. I've tidied the transcript up so it reads well, but kept it as close to what I said as possible.</p>

<figure class="embed">
  <iframe src="https://www.youtube-nocookie.com/embed/8AKDuEPRSJo" title="How Google manages its index - Adam Gent - SearchNorwichXL 2026" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <figcaption class="source">Video: <a href="https://youtu.be/8AKDuEPRSJo" target="_blank" rel="noopener">How Google manages its index</a>, SearchNorwichXL 2026.</figcaption>
</figure>

<blockquote class="takeaway key-takeaways">
  <p><strong>Key takeaways</strong></p>
  <ul>
    <li><strong>Indexed means eligible</strong> - In Search Console, <a href="https://indexinginsight.com/blog/indexed-status-explained" target="_blank" rel="noopener">"indexed" means a page is eligible</a> to appear in search results. "Not indexed" doesn't mean Google hasn't stored or processed it.</li>
    <li><strong>Quality is the biggest reason pages aren't indexed</strong> - <a href="https://indexinginsight.com/blog/why-pages-are-not-indexed-in-google" target="_blank" rel="noopener">Across 1.4 million pages on 18 websites</a>, quality, not technical issues, was the main reason pages were not indexed.</li>
    <li><strong>Google actively removes pages every day</strong> - A page can go from Submitted and indexed to Crawled – currently not indexed within 24 hours. Indexing Insight tracks this in its <a href="https://indexinginsight.com/changelog/crawled-previously-indexed-report" target="_blank" rel="noopener">Crawled – previously indexed report</a>.</li>
    <li><strong>Engagement drives quality</strong> - Pages that drop out usually had falling, low or no engagement.</li>
    <li><strong>Quality thresholds cause fluctuations</strong> - Pages near the <a href="https://indexinginsight.com/blog/how-google-manages-its-search-index" target="_blank" rel="noopener">quality threshold</a> move in and out of the index, even when nothing on the site changes. The Indexing Insight <a href="https://indexinginsight.com/changelog/index-fluctuations-report" target="_blank" rel="noopener">index fluctuations report</a> shows which ones.</li>
    <li><strong>The 130-day rule</strong> - 99% of the time, <a href="https://indexinginsight.com/blog/the-130-day-indexing-rule" target="_blank" rel="noopener">a page not crawled in 130 days is de-indexed</a>.</li>
    <li><strong>The 190-day rule</strong> - <a href="https://indexinginsight.com/blog/190-day-indexing-rule" target="_blank" rel="noopener">After 190 days without a crawl, a page is forgotten by Google</a> and has zero crawl priority.</li>
  </ul>
</blockquote>

<hr>

<h2>Slides</h2>
<p>The slides below are slightly different from the ones in the video. I used an older version of the deck on the day, so these are the updated slides.</p>

<figure class="embed">
  <iframe src="https://speakerdeck.com/player/633c00081a72455b8269e60973cc355b" title="How Google Manages its Index (SearchNorwichXL)" loading="lazy" allow="web-share" allowfullscreen></iframe>
  <figcaption class="source">Slides: How Google Manages its Index (SearchNorwichXL), on Speaker Deck.</figcaption>
</figure>

<hr>

<h2>Introduction <a href="https://youtu.be/8AKDuEPRSJo?t=0" target="_blank" rel="noopener">(0:00)</a></h2>
<p>Hello everyone. This is an incredibly beefy subject, so I'm going to have to talk quite quickly to hit the 20-minute mark. So bear with me, and I hope you enjoy it.</p>
<p>I started in SEO 15 years ago, but back in 2023 a problem happened. I saw a page get de-indexed. So I created a little monitoring tool to figure out what was going on.</p>
<p>From that monitoring tool I created Indexing Insight, which monitors indexing at scale with the URL Inspection API. We monitor a hell of a lot of URLs on a daily basis using the URL Inspection API, compared to everyone else.</p>
<p>But one of the big problems early on, when we first launched the tool, was that people began to see, especially one client, hundreds of thousands of pages get actively removed from Google's index.</p>
<p>And they were like, "Adam, what's going on?" And I was like, "I have no idea. I could not tell you why Google is doing what it's doing."</p>
<p>But thanks to a lot of information from the antitrust trial, Googlers themselves and clever SEOs, I managed to figure it out. That's what I'm going to break down today: what indexing is and how it works.</p>
<p>So let's start with what Google's index is. Put simply, Google's index is a database. It's a place where Google stores information about your web pages and the content itself.</p>

<hr>

<h2>What Google's index means <a href="https://youtu.be/8AKDuEPRSJo?t=97" target="_blank" rel="noopener">(1:37)</a></h2>
<p>The thing is, it's not just a database. It's a complex, interconnected series of systems that work together to manage that index.</p>
<p>One key thing about the page indexing report in Google Search Console, which we all interact with, is that its information is pulled from this database.</p>
<p>But if everything is pulled from a database, and it's all stored in that database, what is the difference between indexed and not indexed? Because for a lot of people, not indexed means it's not stored by Google.</p>
<p>In fact, what I found is that indexed just means you are eligible to appear in search results. It doesn't mean Google has indexed it. It just means the page can appear.</p>
<p>Not indexed is the opposite. It means you are not eligible, but it doesn't mean Google has not stored or processed the information.</p>
<p>Anyone can check this quickly. Go into the URL Inspection tool and look at any not-indexed page. It pulls out information about that URL from its index, its database.</p>
<p>So whenever you look at the page indexing report, remember that it isn't necessarily telling you what is stored and not stored. It's telling you what is served and not served to your users.</p>
<p>So how does it do this? One of the key things that came out of the antitrust trial was Google saying, "We really want to index the useful parts of the web." The problem is that the web is full of low-quality spam and low-quality content.</p>

<hr>

<h2>How the indexing pipeline works <a href="https://youtu.be/8AKDuEPRSJo?t=198" target="_blank" rel="noopener">(3:18)</a></h2>
<p>So Google uses two main indexing processes to deal with this.</p>
<p>The first is the indexing pipeline. Thanks to Martin, who's sitting at the front here, it's well documented and well known.</p>
<p>Googlebot fetches and downloads pages from your website and sends them to the indexing pipeline. The pipeline has lots of little microservices. They analyse, annotate and look at your content, store that content in Google's index, and then decide whether it's indexed or not indexed. Is it served to users or not?</p>
<p>What's fascinating is that we, the SEO industry, obsess over process one. But from my information and my data, the second process is actually the biggest problem for most of you in the room.</p>
<p>It's quality management. Google actively removes your pages from its index on a daily basis. It's constantly assessing whether your pages should stay indexed and served to users.</p>
<p>To be really clear: a page is Submitted and indexed, and then turns into Crawled – currently not indexed, literally within 24 hours. That can happen, and I've seen it happen hundreds of thousands of times on a daily basis.</p>
<p>We know this happens because Gary says it. And we also know it because Martin told us in an official video. He basically says, "Yeah, there's a process where we remove it." It's one of the least-watched videos on their channel, which I find bizarre.</p>
<p>The reason I say it's the biggest process is this. When we analysed 1.4 million pages across 18 websites, quality was the biggest reason pages were not indexed. Not technical issues. The second process.</p>
<p>It didn't matter if it was a big website or a small website, a big brand or a small brand. Quality issues will be the number one reason pages are actively removed from the index by Google.</p>
<p>This behaviour is so common that we had to create a new indexing state called Crawled – previously indexed, and a new report to track it for our customers. Because Google and Google Search Console will never tell you that it happens. Which I find bizarre, by the way.</p>
<p>So why are pages being actively removed? Because Google has a process. It processes content and then stores signals from analysing that content.</p>
<p>Again, Martin describes this in an interview, which again doesn't get watched much. When they're talking about passages and indexing, he explains that if you looked into the index, it looks like a folder. There's a document, a page, a piece of content, and around it in that folder are all the signals and information Google has found about that page.</p>

<hr>

<h2>How Google measures page quality <a href="https://youtu.be/8AKDuEPRSJo?t=405" target="_blank" rel="noopener">(6:45)</a></h2>
<p>Now, what is a signal? I'm going to say this word a lot.</p>
<p>A signal is a measurable data point or a computed value that Google uses to assess whether your content is worth indexing, crawling or ranking.</p>
<p>There are two main kinds of signals. Raw signals are the things Google fetches and extracts from your pages. Computed signals are calculated from raw signals. PageRank, vector embeddings and Google-selected canonical URLs are all examples.</p>
<p>There are two main computed signals: search interest and page quality.</p>
<p>Search interest is based on search logs. Every time you Google something, Google tracks it and feeds it into Glue. Glue turns all of that into structured information, which is used by NavBoost, Tetris and all kinds of other systems.</p>
<p>What you need to know is that, in that folder of information, Google tracks every single page and the user engagement on that document, and stores it.</p>
<p>Gary tells us this too. In a podcast he literally says that Google does not index things that have no demand or no interest.</p>
<p>The second big computed signal is quality. Quality is very interesting. The antitrust documents, and SEOs who have analysed them, break down three big signals Google uses to rank pages: popularity, topicality and quality.</p>
<p>Googlers mention quality so much it's not funny. Podcasts, articles, videos, they mention it all the time. And no one listens.</p>
<p>But you should listen. Because in these antitrust documents, other SEOs have broken this down. Mark even found a quality score. I forgot to add that in, Mark. Sorry.</p>
<p>So what is page quality? Google tracks clicks, engagement and links over time for your pages. They're not the only three things, but they're the three I've talked about quite a lot.</p>
<p>Basically, Google measures outcomes. It measures the engagement and behaviour on your pages on a daily basis, across billions and billions of searches. It's unfathomable how much they track.</p>
<p>Even in the antitrust documents, they basically explain that they don't really understand content quality. They use clicks as a metric to point them in the right direction on quality.</p>

<hr>

<h2>The patterns behind pages that drop <a href="https://youtu.be/8AKDuEPRSJo?t=590" target="_blank" rel="noopener">(9:50)</a></h2>
<p>When you apply this thinking to the pages you're tracking that are being actively removed, we spotted three patterns. And it isn't just me looking at patents. I actually looked at data.</p>
<p><strong>Pattern one is historic engagement.</strong> These pages used to get engagement. They used to have some kind of interaction over time, then it dropped off. Eventually there was so little interaction that Google de-indexed them.</p>
<p><strong>Pattern two is low engagement.</strong> The page appears in search but never really gets many clicks or much engagement. So again, eventually Google de-indexes it.</p>
<p><strong>Pattern three is no engagement.</strong> Google basically doesn't see anything. You can see it on the graph: there's nothing there. So again, eventually Google de-indexes it.</p>
<p>Every time I have looked at a page that has been actively removed from Google's index, it's usually because of poor user engagement. Every single time. And it's across hundreds of thousands of pages. It's bonkers how much this is happening.</p>

<hr>

<h2>Quality thresholds and fluctuations <a href="https://youtu.be/8AKDuEPRSJo?t=658" target="_blank" rel="noopener">(10:58)</a></h2>
<p>So how is it happening? What's it doing? Quality thresholds.</p>
<p>Gary explained in some late-night tweets that index selection is tightly tied to quality. For a long time, I didn't understand what this meant.</p>
<p>Then I found a patent that describes how a system like this could work. It's probably not exactly how Google uses it, but it's an interesting look at the direction they might be going in.</p>
<p>The patent describes three things:</p>
<ul>
  <li><strong>A hard limit.</strong> Literally the amount of storage a database can hold.</li>
  <li><strong>A soft limit.</strong> A threshold that stops you hitting the hard limit. Because if you hit the hard limit, you break the system.</li>
  <li><strong>An importance threshold.</strong> A benchmark score that other pages, which are also given scores, are measured against. Anything above the importance threshold is indexed. Anything below it is not indexed.</li>
</ul>
<p>I think Google uses that top-level page quality signal, computed from lots of different raw signals, like the importance threshold's benchmark score. That's what helps them decide what is indexed and not indexed.</p>
<p>Gary gives this away a little too. He explains that when Google has free space available, they can index, let's say, poorer content. And when they don't have space available, they make space for higher-quality content.</p>
<p>What's interesting is that the patent also describes this mechanism in action. If you go above the soft limit, the benchmark score goes up, which stops more pages being indexed. And vice versa: drop below the soft limit, the quality threshold drops, and there's more space available.</p>
<p>And this happens on a daily basis. It's constantly happening, and I believe it creates fluctuation in the index.</p>
<p>You can see this in Google Search Console. Even when no pages are changing and no pages are added to a website, things go up and down. So much so that we created an index fluctuations report in Indexing Insight to track it. It tells you when pages are jumping from indexed to not indexed, and back again, all the time.</p>
<p>I believe these pages sit on that quality threshold. Some of our customers use the report to decide which pages to prioritise first when fixing indexing, because they get fixed faster.</p>

<hr>

<h2>The 130-day rule <a href="https://youtu.be/8AKDuEPRSJo?t=830" target="_blank" rel="noopener">(13:50)</a></h2>
<p>So how do these thresholds manage crawl priority?</p>
<p>Gary literally says quality affects everything, and we've discussed what quality is. What's interesting is that the quality of a page can take it from URL is unknown to Google all the way through the system to indexed. But it can also reverse. Over time, Google picks up these quality signals and starts dropping pages.</p>
<p>We know from the antitrust documents that quality and popularity signals are used in crawling and indexing, to decide what gets refreshed and recrawled on a daily basis.</p>
<p>Martin, I think you confirmed this on LinkedIn. I sent it to you and you said, "As far as I'm aware, that's kind of how it works." I mapped the indexing states in Google Search Console, based on quality, to Google's crawl queues.</p>
<p>So there is a relationship between last crawl time and indexing states. It's not my rule, but there is a 130-day indexing rule. It was found by someone in Europe whose name I always forget.</p>
<p>I used our database and research to replicate it across millions of pages. <strong>99% of the time, if a page is not crawled in 130 days, it will be de-indexed.</strong> I don't know why. Maybe Martin could shed some light when I ask him afterwards.</p>
<p>But something is causing pages to be actively de-indexed after 130 days, and it happens 99% of the time. It's bonkers how consistent it is. You can actually begin to identify which pages are going to get de-indexed. We alert our customers when pages are close to this threshold.</p>

<hr>

<h2>The 190-day rule <a href="https://youtu.be/8AKDuEPRSJo?t=1018" target="_blank" rel="noopener">(16:58)</a></h2>
<p>The other cool thing you can do is map what happens to other indexing states over time. It's really cool if you're really geeky.</p>
<p>Based on last crawl time:</p>
<ul>
  <li><strong>0 to 130 days</strong> - pages are roughly indexed.</li>
  <li><strong>131 to 189 days</strong> - pages are Crawled – currently not indexed.</li>
  <li><strong>190 days and over</strong> - pages get stuck between Discovered – currently not indexed and URL is unknown to Google.</li>
</ul>
<p>Interestingly, Martin, those pages keep switching back and forth between those two states. I think the system keeps trying to put them in the crawl queue, then decides they're worthless because there are no signals around them, and puts them back into unknown. For certain pages on certain websites, this happens like clockwork every two or three days. It's really interesting if you track it.</p>
<p>But here's the interesting bit: the 190-day indexing rule. <strong>After 190 days, if a page has not been crawled, it will be forgotten. It has zero crawl priority.</strong></p>
<p>Gary has confirmed this. He told me directly on LinkedIn, when I said I kept seeing this happen. He explained that URLs can move between indexing states as they collect signals over time. That word signals again.</p>
<p>So if you see URL is unknown to Google in Google Search Console, it doesn't necessarily mean Google has never seen it. If it was ever crawled and indexed, it just means there are so few signals around it that Google doesn't care and forgets it. Which I found really interesting.</p>
<p>So after 190 days, a web page can literally be forgotten by Google. Bonkers.</p>

<hr>

<h2>Summary and takeaways <a href="https://youtu.be/8AKDuEPRSJo?t=1077" target="_blank" rel="noopener">(17:57)</a></h2>
<p>Let's summarise, because I've got two minutes left.</p>
<ol>
  <li>The page indexing report shows all the processed content Google has found.</li>
  <li>It doesn't mean pages are stored or not stored. From my understanding, it means pages are eligible or not eligible to appear in search results, both traditional and AI.</li>
  <li>Page quality is one of the biggest reasons your pages are not indexed. Not technical issues, not duplicates, but because nobody is engaging with your pages or they aren't being found.</li>
  <li>Google uses page quality to manage its index. Those threshold scores change on a daily basis, so pages can fluctuate.</li>
  <li>I believe page quality can be used for crawl priority. The 130-day and 190-day indexing rules show that Googlebot can actively de-index a page and, over time, forget it.</li>
</ol>
<p>Thank you.</p>

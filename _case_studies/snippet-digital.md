---
title: "How I Helped Snippet Digital Increase SEO Traffic by 100% for a Meal Planning Client"
client: Snippet Digital
industry: Agency · Meal Planning App
date: 2026-08-31
order: 1
logo: /assets/logos/mono/11-snippet-digital-v2.webp
logo_height: 40
description: "How a prioritised technical SEO roadmap doubled a meal planning app's SEO traffic, from 600,000 to 1.2 million visits a month, by cutting indexed pages by 67%."
summary:
  - "Snippet Digital brought me in to fix index bloat on a client's meal planning website."
  - "In six months, a prioritised technical roadmap reduced the client's indexed pages by 67%. That work contributed directly to measurable gains in organic traffic and visibility."
stats:
  - value: "2M → 653K"
    label: "Indexed pages in Google"
  - value: "67%"
    label: "Reduction in indexed pages"
  - value: "+100%"
    label: "SEO traffic growth"
testimonial:
  name: Andy Chadwick
  role: Co-founder, Snippet Digital
  avatar: /testimonial-avatars/andy-chadwick.webp
  quote:
    - "Adam has transformed our client's index performance. Over the past 6 months, he's created a prioritised roadmap that helped reduce their indexed pages from 2 million to 653,000 (a 67% reduction)."
    - "By improving the overall health of the site, his work has directly contributed to measurable gains in organic search traffic and visibility."
    - "I'd recommend him to any team serious about solving Google indexing issues."
---

## The Story of Snippet Digital

Snippet Digital is an SEO and AI agency run by founders Andy Chadwick and Suganthan Mohanadasan. They help clients get found across every search platform, not just Google.

<figure>
  <img src="{{ '/assets/case-studies/snippet-digital-homepage.webp' | relative_url }}" width="1200" height="704" alt="Snippet Digital homepage: Wherever People Search, We Get You Found!" loading="lazy">
  <figcaption>Snippet Digital, an SEO and AI agency.</figcaption>
</figure>

One of their clients is an established meal planning app. Users plan meals for free, then upgrade to a paid plan. The website carries a huge database of food, recipe and nutrition pages.

The client wanted to grow SEO traffic and sign-ups over the next 12 months.

Snippet Digital had the content strategy covered. What they needed was a technical SEO strategy for a site with millions of URLs.

That's where I came in.

## The Challenge: Reducing Index Bloat

Google Search Console showed over 2 million pages indexed on the site. Less than 8% of those indexed pages drove any SEO traffic at all.

That gap is the classic symptom of index bloat. And it showed up in the trend data. Impressions declined after the March 2025 and June 2025 Google core updates.

It matters because Google judges a site on everything it has indexed. As John Mueller put it in a Google office-hours hangout, Google's quality algorithms "look at everything that's indexed."

The analysis found three root causes:

- **Near-duplicate parameter URLs.** Every food page generated a new indexable URL for each serving size. That created hundreds of thousands of near-duplicate pages.
- **Hidden internal links.** Each food page template carried hidden links to its serving-size variations. A single food page had 8 of them. Googlebot was being sent to low-value URLs at scale.
- **One sitemap for everything.** The site submitted a single XML sitemap for all pages. There was no way to see which sections had indexing problems.

The hard part wasn't spotting the bloat. It was separating the parameter URLs that earned traffic from the ones that didn't.

Delete the wrong ones and you remove real value.

## The Approach: Remove the Waste Without Losing the Value

Most index bloat fixes start with a mass noindex. I didn't want to do that here.

Some serving-size pages drove clicks and conversions. Others had search demand behind them, even if they didn't rank yet. A blanket rule would have wiped those out.

So the strategy followed four steps:

1. Segment the parameter URLs through page type XML sitemaps.
2. Identify high, medium and low-value pages with a Page Value Management framework.
3. Clean up low-value pages with technical SEO controls at scale.
4. Create high-value content through Snippet Digital's content strategy.

The last step matters as much as the first three. A plan to remove without a plan to improve only does half the job.

## Page Value Management: How I Managed Index Bloat

This is the approach I took to managing the Google index bloat.

### 1. Segmented the site with page type XML sitemaps

You can't manage what you can't see.

I recommended splitting the single sitemap into page type sitemaps: All Foods (including parameter URLs), Recipes, Basic Foods, Branded Foods and Restaurant Foods.

Each page type got its own sitemap index file, with child sitemaps capped at 10,000 URLs. Every URL had to be live, indexable, unique to one sitemap and carry a last modified date.

Once submitted, each page type appears as its own filter in the Search Console Page Indexing report.

The sitemaps became the single source of truth for every important page on the site. No multi-million URL crawl required.

### 2. Built a Page Value Management framework

Page Value Management (PVM) borrows from Product Information Management in ecommerce. You enrich every URL with performance data, then score it.

The framework looked at value in two ways:

- **Current value.** 12 months of traffic, conversions and SEO traffic from GA4, plus clicks and impressions from Google Search Console.
- **Potential value.** Search query data clustered in Keyword Insights to find each URL's top keyword and search volume.

Any page with a conversion in the last 12 months was flagged as critical and protected automatically.

Every URL then got a value score and an action:

| Category | Action |
| --- | --- |
| High | Keep and improve |
| Medium | Review and improve |
| Low | Review, improve or remove |
| Lowest | Remove |

The framework was planned in three release slices. A manual audit of parameter URLs in 1 to 2 months. A manual audit of every live URL in 3 to 6 months. A fully automated process in 6 to 12 months.

### 3. Set out the clean-up for index management and internal linking

With value scores in place, the low-value pages could be handled at scale.

For index management, I set out three options for the low-value parameter URLs. The preferred option combined a meta robots noindex, a page-level nofollow and a canonical tag to the root page. That removes the page from the index, stops overcrawling and forwards any link signals to the root URL.

For internal linking, I recommended replacing the hidden links on the food page template with a visible "related serving sizes" module. It links only to high-value parameter URLs in the same cluster. Hidden links at scale carry a cloaking risk, so they had to go.

Three supporting tactics helped manage crawl budget:

- A temporary low-value XML sitemap to speed up deindexing.
- An HTML sitemap to surface high-value pages and reduce click depth.
- 304 status codes for pages that hadn't changed, so Googlebot stops recrawling them.

### 4. Created a reporting strategy in Google Search Console

Every change needed to be measurable.

The page type sitemaps gave Snippet Digital and their client a way to track index coverage by site section, week by week. They could see low-value pages drop out and confirm the high-value pages stayed in.

### 5. Turned it into a prioritised roadmap

The strategy ended in a Now, Next, Later roadmap with an owner for each task.

- **Now:** Build page type XML sitemaps and agree the data points for value scoring.
- **Next:** Audit the parameter URLs, run the page opportunity analysis and action the low-value pages.
- **Later:** Audit every live page, add the crawl budget tactics and automate Page Value Management.

That clarity is what got the work implemented.

## The Results: Indexed pages down 67% in six months

Indexed pages fell from 2 million to 653,000 over six months. And SEO traffic increased from 600,000 visits per month to 1.2 million visits per month (+100% increase).

<figure class="dark">
  <img src="{{ '/assets/performance-chart.webp' | relative_url }}" width="900" height="412" alt="Performance: organic pages reduced while average organic traffic recovered to an all-time high after starting work." loading="lazy">
  <figcaption>Organic pages and average organic traffic. Source: Ahrefs</figcaption>
</figure>

Cleaning up the index improved the overall health of the site. According to Snippet Digital, that work directly contributed to measurable gains in organic search traffic and visibility.

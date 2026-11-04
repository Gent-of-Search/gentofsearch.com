---
title: "How Research and Markets Grew Non-Brand SEO Traffic by 250% With Technical SEO Audits"
client: Research and Markets
order: 3
logo: /assets/logos/01-research-and-markets.webp
description: "How technical, content and schema audits fixed product page duplication on a 250,000-page website and grew non-brand SEO traffic by 250% year on year."
summary:
  - "Research and Markets had the strongest domain in its market but not the traffic to match. Duplicate product pages were holding the whole site back."
  - "A technical SEO audit, followed by content and schema audits, gave the team a prioritised plan to fix it. Non-brand SEO traffic grew 250% year on year, and the SEO channel drove over 1 million in revenue in the year to date."
stats:
  - value: "+250%"
    label: "Non-brand SEO traffic, year on year"
  - value: "1M+"
    label: "Revenue from SEO, year to date"
  - value: "~8.5K → ~26K"
    label: "Est. monthly SEO traffic (Ahrefs), Mar vs Dec 2021"
  - value: "Highest ever"
    label: "SEO visibility"
testimonial:
  name: Cormac Smith
  role: Business Analyst, Research and Markets
  initials: CS
  quote:
    - "In a short period of time working with Adam has resulted in significant growth of our organic traffic and revenue as well as our team's understanding of technical SEO. We look forward to working with him again."
cta:
  heading: "Running a Large Ecommerce <span style=\"color:#0F7350;\">Website?</span>"
  text:
    - "If your site has hundreds of thousands of pages and the traffic doesn't match, the problem is rarely one thing. It's usually duplication, crawling and internal linking working against each other."
    - "I help in-house teams find those issues, prioritise them and get them fixed."
    - "Get in touch to talk about your site."
---

## The Story of Research and Markets

Research and Markets sells market research reports online. Its biggest market is the USA.

The website is huge. Over 250,000 pages were indexed in Google, and almost all of its SEO traffic came from one template: the /reports/ product pages.

Those pages drove over 85% of the site's organic growth in the previous 12 months. That made them the biggest opportunity on the site, and the biggest risk.

Research and Markets wanted to grow organic search traffic and revenue in the US. They brought me in to find out what was holding the site back.

## The Challenge: The Strongest Domain, But Not the Most Traffic

On paper, Research and Markets should have been winning.

It had the most pages indexed of any competitor (252,000) and the most referring domains (18,212). Yet a smaller competitor, with 151,000 pages and 5,301 referring domains, had about 2.5x the estimated organic traffic (21,255 vs 8,354).

The audit found why:

- **Product pages duplicated across the site.** The same report existed on multiple URLs, split by country, by small title changes and by version date. The duplicates were handled with noindex tags.
- **A site Google mostly couldn't index.** Search Console excluded 1 million URLs, half of them because of noindex. Over 70% of the pages found in a crawl were non-indexable.
- **Link value leaking away.** Google has said it treats long-term noindex pages as noindex, nofollow. Every internal and external link pointing at those duplicates was being lost.
- **Important pages buried.** The top product pages sat 4 clicks deep. 127,000 report pages carried over 100 links each, mostly "related tag" links. The main navigation had 332 links, many to categories with almost no clicks or impressions.

The duplication was the root of almost every other issue.

Fix that, and a lot of the rest would follow.

## The Approach: Fix the Root Cause, Then Keep Making Gains

There's rarely a technical SEO silver bullet. Large websites grow through constant small improvements, the aggregation of marginal gains.

So the work ran in cycles. Each audit was followed by an implementation phase before the next audit started:

1. Technical SEO audit, then implementation.
2. Content audit, then implementation.
3. Schema audit, then implementation.

The technical audit set four priorities:

- **Product page duplication.** The number one priority, because it caused most of the other issues.
- **Internal linking.** Show Google which pages matter most to Research and Markets.
- **Content relevance and quality.** Help Google understand product and category pages.
- **Crawling and indexing.** Only index the important product pages, and stop crawlers wasting time on low-value URLs.

## What I Did

### 1. Ran a technical SEO audit of a 250,000-page website

The audit covered crawling and indexing, website architecture, content, meta tags, structured data and site speed.

Every issue was set out the same way: what the issue is, why it matters, and how to fix it.

Alongside the report, the development team got a prioritised SEO backlog in Google Sheets with the supporting crawl data. That's what turned the audit into work the team could ship.

### 2. Solved the product page duplication

I set out two ways to fix it, depending on how often reports change.

The preferred option was one static canonical URL for each report. Every country, version and title variant hangs off that URL, using a fragment identifier, so the duplicates no longer exist as separate pages.

The fallback was an advanced canonicalisation strategy:

- Pick one canonical URL in each duplicate group and point the duplicates' canonical tags to it.
- Move canonical reports above the duplicates in category listings.
- Link the duplicates back to the canonical report.
- Remove duplicate URLs from XML sitemaps and cut unnecessary internal links to them.

Either way, Google gets one clear page to rank, and the link value flows to it.

### 3. Rebuilt the internal linking

The less links on a page, the more value each link passes. So the plan was fewer, better links:

- **Pull the top products up the architecture.** Link the most important reports from the homepage and category pages, and move them higher in category listings.
- **Add related categories in the main content.** 4 to 5 relevant categories above the listings on every category page.
- **Cut the excess.** Reduce the "related tag" links on report pages and trim the 332-link navigation to the categories customers actually use.
- **Fix the pagination.** A better link scheme to reduce the click depth to deep product pages.

### 4. Cleaned up crawling and indexing

On a site this size, small leaks add up. The audit found and fixed:

- 311 pages in the top 10,000 traffic-driving pages returning a 410 error. These were redirected to the closest live report.
- 841 pages with backlinks redirecting to dead pages, and 73 dead pages with backlinks of their own.
- 1,000 tracking parameter URLs indexed ahead of their canonical pages.
- 990 internal links going through unnecessary redirects to out-of-date products.

XML sitemaps were capped at 10,000 URLs to speed up the crawling of new reports. 304 "not modified" responses helped Googlebot skip pages that hadn't changed.

### 5. Audited the content on product and category pages

The content audit focused on making the key templates easier for Google to understand:

- **Thin content.** 4,400 indexable product pages had far less content than the rest of the site and competitors.
- **Structure.** Product content used line breaks and bold text instead of headings and lists.
- **Hidden content.** Category text was hidden behind "Read more" at the bottom of the page. It needed to be visible, above the fold, on desktop and mobile.
- **Title tags.** 72,000 product pages had titles too long to display in full. A rule rewrote them to 60 characters or fewer.

### 6. Audited the structured data

The schema audit made sure Google read the product pages correctly in search results.

Report pages with several prices used AggregateOffer markup, so Google could show the price range. Breadcrumb and FAQ structured data were added to enrich the search results further.

### 7. Supported the team through implementation

Each audit was followed by an implementation phase, working with the team on the priority actions.

That built the team's technical SEO knowledge along the way. The fixes kept coming after each audit.

## The Results

### Non-brand SEO traffic up 250% year on year

Non-brand SEO traffic grew 250% year on year, and SEO visibility hit the highest level the site had ever seen.

According to Ahrefs, estimated monthly SEO traffic grew from around 8,500 when the technical audit started in March 2021 to around 26,000 by December 2021.

<figure>
  <img src="{{ '/assets/case-studies/research-and-markets-seo-traffic.webp' | relative_url }}" width="1600" height="857" alt="Estimated SEO traffic for Research and Markets, December 2020 to December 2021, with the technical, content and schema audits and each implementation phase marked." loading="lazy">
  <figcaption>Estimated SEO traffic with each audit and implementation phase marked. Source: Ahrefs</figcaption>
</figure>

### Over 1 million in revenue from SEO

The SEO channel drove over 1 million in revenue in the year to date.

### Growth came in steps

The traffic didn't rise in a straight line. It rose after each implementation phase.

That's the aggregation of marginal gains in practice. Each audit found the next set of improvements, and each release moved the site forward.

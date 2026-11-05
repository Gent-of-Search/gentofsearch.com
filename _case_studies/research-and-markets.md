---
title: "How a Technical SEO Audit Helped Research and Markets Grow Non-Brand SEO Traffic by 250%"
client: Research and Markets
date: 2022-01-30
order: 3
logo: /assets/logos/mono/01-research-and-markets-v2.webp
logo_height: 48
description: "How technical, content and schema audits fixed product page duplication on a 1,000,000+ page website and grew non-brand SEO traffic by 250% year on year."
summary:
  - "Research and Markets hired Gent of Search to run a technical SEO audit to identify why their website was being held back in Google organic search."
  - "The technical SEO audit, followed by content and schema audits, identified a number of prioritised opportunities to fix. After working with the team to implement the opportunities, non-brand SEO traffic grew 250% year-on-year, and the SEO channel drove over €1 million in revenue in the year to date."
stats:
  - value: "+250%"
    label: "Non-brand SEO traffic, year on year"
  - value: "€1M+"
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
---

## The Story of Research and Markets

Research and Markets sells market research reports online.

<figure>
  <img src="{{ '/assets/case-studies/research-and-markets-homepage.webp' | relative_url }}" width="1200" height="659" alt="Research and Markets homepage: The World's Largest Market Research Store." loading="lazy">
  <figcaption>Research and Markets, the world's largest market research store.</figcaption>
</figure>

The website has over 1,000,000 pages and over 250,000 pages were indexed in Google. Nearly all of its SEO traffic came from one template: product pages.

Those product pages drove over 85% of the site's organic growth in the previous 12 months. That made them the biggest opportunity on the site, and the biggest risk.

Research and Markets wanted to grow organic search traffic and revenue in the US. They brought me in to find out what was holding the site back.

## The Challenge: The Strongest Domain, But Not the Most Traffic

On paper, Research and Markets should have been winning.

It had the most pages indexed of any competitor and the most referring domains. Yet a smaller competitor, with fewer indexed pages and fewer referring domains, had about 2.5x the estimated organic traffic.

The audit found why:

- **Product pages duplicated across the site** - The same report existed on multiple URLs, split by country, by small title changes and by version date. The duplicates were handled with noindex tags.
- **Link value leaking away** - Google has said it treats long-term noindex pages as noindex, nofollow. Every internal and external link pointing at those duplicates was being lost.
- **Important pages buried** - The important product pages were 4-5 clicks away from the homepage.
- **Links to dead pages** - The link architecture prioritised linking to noindexed product pages through the "related tag" link module and through the main navigation.
- **Product page content** - The product page content was hidden and not structured in the same way as other competitors.

The handling of the duplicate content, product page content, and internal linking was the root cause of the website being held back by Google.

Fix that, and a lot of the rest would follow.

## The Approach: Identify Big Wins Through Small Changes

There's rarely a technical SEO silver bullet. Large websites grow through constant small improvements, the aggregation of marginal gains.

So the work ran in cycles.

Each audit was followed by an implementation phase before the next audit started:

1. Technical SEO audit, then implementation.
2. Content audit, then implementation.
3. Schema audit, then implementation.

Each audit helped tackle these key opportunities:

- **Product page duplication** - The number one priority, because it caused most of the other issues.
- **Internal linking** - Show Google which pages matter most to Research and Markets.
- **Content relevance and quality** - Help Google understand product and category pages.
- **Crawling and indexing** - Only index the important product pages, and stop crawlers wasting time on low-value URLs.
- **Boost click-through rate** - Schema markup and rewriting title tags would help enrich product pages in Google's SERPs, enticing users to engage with the pages.

## How I Worked: Technical SEO That Drives Growth

I worked with the development and marketing teams to fix opportunities that drive growth.

### 1. Ran a technical SEO audit of a 1,000,000+ page website

The audit covered crawling and indexing, website architecture, content, meta tags, structured data and site speed.

Every issue was set out the same way: what the issue is, why it matters, and how to fix it.

Alongside the report, the development team got a prioritised SEO backlog in Google Sheets with the supporting crawl data. That's what turned the audit into work the team could ship.

### 2. Solved the product page duplication

I set out two ways to fix it, depending on how often reports change.

The preferred option was one static canonical URL for each report. Every country, version and title variant hangs off that URL, using a fragment identifier, so the duplicates no longer exist as separate pages.

The fallback was an advanced canonicalisation strategy:

- Pick a canonical URL in each duplicate group and point the duplicates' canonical tags to it.
- Move canonical reports above the duplicates in category listings.
- Link the duplicates back to the canonical report.
- Remove duplicate URLs from XML sitemaps and cut unnecessary internal links to them.

Either way, Google gets one clear page to rank, and the link value flows to it.

### 3. Rebuilt the internal linking

The less links on a page, the more value each link passes. So the plan was fewer, better links:

- **Pull the top products up the architecture** - Link the most important product pages from the homepage and category pages, and move them higher in category listings.
- **Push non-indexable pages down the architecture** - The team created new internal link logic to push any noindex pages further down the internal link architecture.
- **Add related categories in the main content** - We added new categories above the listings on every category page.
- **Cut the excess** - Reduce the "related tag" links on report pages and trim the links in the main navigation to the categories customers actually use.
- **Fix the pagination** - A better link scheme to reduce the click depth to deep product pages.

### 4. Cleaned up crawling and indexing

On a site this size, small leaks add up. The audit found and fixed:

- There were pages in the top 10,000 traffic-driving pages returning a 410 error. These were redirected to the closest live report.
- There were pages with backlinks redirecting to dead pages, and these were cleaned up.
- Thousands of tracking parameter URLs indexed instead of their canonical pages.
- Thousands of unnecessary redirects to out-of-date products.
- XML sitemaps were not properly configured, and were capped at 10K URLs per sitemap (to help speed up discovery and processing of product URLs).

### 5. Audited the content on product and category pages

The content audit focused on making the key templates easier for Google to understand:

- **Thin content** - Product pages had far less content than the rest of the site and competitors.
- **Structure** - Product content didn't use HTML heading tags and lists.
- **Hidden content** - Category text was hidden behind "Read more" at the bottom of the page. It needed to be visible, above the fold, on desktop and mobile.
- **Title tags** - Product pages had titles that were very long and didn't include target keywords closer to the start. A new rule rewrote them to be shorter and include target keywords.

### 6. Audited the structured data

The schema audit made sure Google read the product pages correctly in search results.

Report pages with several prices used AggregateOffer markup, so Google could show the price range. Breadcrumb and FAQ structured data were added to enrich the search results further.

### 7. Supported the team through implementation

Each audit was followed by an implementation phase, working with the team on the priority actions.

That built the team's technical SEO knowledge along the way. The fixes kept coming after each audit.

## The Results

The traffic didn't rise in a straight line. It rose after each implementation phase.

Non-brand SEO traffic grew 250% year on year, and SEO visibility hit the highest level the site had ever seen.

According to Ahrefs, estimated monthly SEO traffic grew from around 8,500 when the technical audit started in March 2021 to around 26,000 by December 2021.

The SEO channel drove over €1 million in revenue in the year to date.

<figure>
  <img src="{{ '/assets/case-studies/research-and-markets-seo-traffic.webp' | relative_url }}" width="1600" height="857" alt="Estimated SEO traffic for Research and Markets, December 2020 to December 2021, with the technical, content and schema audits and each implementation phase marked." loading="lazy">
  <figcaption>Estimated SEO traffic with each audit and implementation phase marked. Source: Ahrefs</figcaption>
</figure>

That's the aggregation of marginal gains in practice. Each audit found the next set of improvements, and each release moved the site forward.

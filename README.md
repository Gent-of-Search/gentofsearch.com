# Gent of Search

The Gent of Search marketing site, built with [Jekyll](https://jekyllrb.com/).

## Local development

```bash
bundle install          # first time only
bundle exec jekyll serve # http://localhost:4000
```

`bundle exec jekyll build` outputs the static site to `_site/`.

## Structure

```
_config.yml              Site config (title, url, plugins, permalinks)
_layouts/
  default.html           Full page chrome (head + nav + footer)
  post.html              Blog post layout (breadcrumb, byline, bio, related, CTA)
_includes/
  head.html, nav.html, footer.html, cta.html
_posts/                  Blog posts (Markdown / HTML with front matter)
index.html               Home
about.html, pricing.html, privacy.html, cookie.html
blog/index.html          Blog index (auto-lists _posts)
assets/                  CSS, JS, images (served verbatim)
CNAME                    Custom domain for GitHub Pages
```

## Adding a blog post

Drop a file in `_posts/` named `YYYY-MM-DD-slug.md`:

```
---
title: "Your post title"
description: "One-line dek shown under the title and in the blog list."
date: 2026-07-01
category: Technical SEO
read_time: "6 min read"
---

<p>Your article HTML/Markdown...</p>
```

It appears automatically on `/blog/` and at `/blog/slug/`.

## Deployment

### GitHub Pages (recommended)
1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
3. The included workflow (`.github/workflows/jekyll.yml`) builds and deploys on
   every push to `main`.
4. **Custom domain:** the `CNAME` file points at `gentofsearch.com`. In your DNS,
   add the GitHub Pages records (four `A` records for the apex + a `CNAME` for
   `www` → `<user>.github.io`), then enable "Enforce HTTPS" in Settings → Pages.

### Cloudflare Pages
1. Cloudflare dashboard → Workers & Pages → Create → Pages → connect this repo.
2. Build command: `jekyll build`  ·  Build output directory: `_site`
3. Set environment variable `RUBY_VERSION = 3.3` (and `JEKYLL_ENV = production`).
4. Add `gentofsearch.com` as a custom domain in the Pages project.

> Pick **one** platform to serve the apex domain. If you use Cloudflare Pages,
> remove or ignore `CNAME` (it's only read by GitHub Pages).

---
slug: customization
title: How to Customize this Template
date: 2023-04-22T21:55:27.154Z
excerpt: How to customize what you're seeing here and make it your own.
coverImage: /images/posts/customization.jpg
tags:
  - Documentation
---

In general, content can be modified by editing the **organisms** and the pages themselves. Below is a list of the most common changes that you may want to make.

## Domain/site URL

The first thing you might want to do is replace the domain of of the site with your own. There are two places where you need to do that:

- In the `package.json` file, check the `postbuild` script. Change the domain there to your own, so it ends up like this: `svelte-sitemap --domain https://your-domain.com`. This is used to generate the sitemap of your website, which is used by search engines to index your site.
- In the `src/lib/data/meta.ts` file, change the `siteBaseUrl` property to your own domain. This is used in multiple parts of the app wherever the site needs to link to itself.

## Header/site logo

To replace the logo that appears in the header, modify or replace the contents of the `Logo.svelte` atom.

The links that appear on the header can be modified directly in the `Header.svelte` organism.

## Hero section

The hero section is the first section of the site's home page. It is composed of a Heading, the _intro_ text, and a list of buttons/CTAs. The contents of this section can be modified directly in the `Hero.svelte` organism.

## About section

The about section contains another headline, a paragraph of text, some social media links, and optionally an image. The contents of this section can be modified directly in the `About.svelte` organism.

## Social Links

The social links are contained in the `Socials.svelte` molecule and can be used in any page. This template shows them on the About section and in the Footer.

## Footer

The footer contains some credits, a list of social links, and the RSS/Theme toggle. The contents of this section can be modified directly in the `Footer.svelte` organism.

## Colors

You can change the color palette of the website just by tweaking the `_themes.scss` file. The file uses the `define-color` scss function to automatically set the color variables in Hex, RGB and HSL formats, so you can choose whichever format you need.

The main theme colors (primary and secondary) have two variants: shade and tint. The shade is a lighter version of the color (darker in dark mode), and the tint should almost match the page's background, so that in light mode, it's really bright, and in dark mode, it's really dark.

## Fonts

This template uses the Inter, Merriweather and Ubuntu Mono font families. You can change the font family by editing the `_variables.scss` file, and the code is already set up to accept a default font, a heading font, and a monospace font.

I recommend using [Fontsource](https://fontsource.org/) to import the fonts you need, or self-hosting them. In case you're using Fontsource, you can import the fonts in `global.scss` file to make sure they're available in the entire site.

## Favicon

Favicons are located in the `static/favicons` folder. I like to use [Real Favicon Generator](https://realfavicongenerator.net) to generate mine, but you can use any other tool you like. I wrote [a blog post about Favicons](https://fantinel.dev/fixing-favicons) in case you want to learn more about them.

## Social Media Link Preview

You probably want to customize how links to your website look when posted on social media/messaging apps. To do that, you can edit the info in `src/lib/data/meta.ts`. There, you can edit the site's title, description, tags (used by search engines) and the image that appears when sharing a link.
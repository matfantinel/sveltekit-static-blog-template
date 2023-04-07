# How to customize this template

In general, content can be modified by editing the **organisms** and the pages themselves. Below is a list of the most common changes that you may want to make.

## Header/site logo

* To replace the logo that appears in the header, modify or replace the contents of the `Logo.svelte` atom.

* The links that appear on the header can be modified directly in the `Header.svelte` organism.

## Hero section

* The hero section is the first section of the site's home page. It is composed of a Heading, the _intro_ text, and a list of buttons/CTAs. The contents of this section can be modified directly in the `Hero.svelte` organism.

## About section

* The about section contains another headline, a paragraph of text, some social media links, and optionally an image. The contents of this section can be modified directly in the `About.svelte` organism.

## Social Links

* The social links are contained in the `Socials.svelte` molecule and can be used in any page. This template shows them on the About section and in the Footer.

## Colors

You can change the color palette of the website just by tweaking the `_themes.scss` file. The file uses the `define-color` scss function to automatically set the color variables in Hex, RGB and HSL formats, so you can choose whichever format you need.

The main theme colors (primary and secondary) have two variants: shade and tint. The shade is a lighter version of the color (darker in dark mode), and the tint should almost match the page's background, so that in light mode, it's really bright, and in dark mode, it's really dark.

## Fonts

This template uses the "TO BE DECIDED" font family. You can change the font family by editing the `_variables.scss` file, and the code is already set up to accept a default font, a heading font, and a monospace font.

I recommend using [Fontsource](https://fontsource.org/) to import the fonts you need, or self-hosting them. In case you're using Fontsource, you can import the fonts in `global.scss` file to make sure they're available in the entire site.
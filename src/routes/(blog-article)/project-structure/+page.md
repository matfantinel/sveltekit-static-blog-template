---
slug: project-structure
title: Project Structure
date: 2023-04-22T21:55:21.800Z
excerpt: How code and structure are organized.
coverImage: /images/posts/project-structure.jpg
tags:
  - Documentation
---

<script>
  import CodeBlock from "$lib/components/molecules/CodeBlock.svelte";
</script>

This project follows the basic [SvelteKit structure](https://kit.svelte.dev/docs/project-structure), with some added conventions to make customization a post-management easier.

## Components

The components are organized following the [Atomic Design](https://medium.com/@WeAreMobile1st/atomic-design-getting-started-916bc81bad0e) principles, albeit somewhat simplified. Components are in the `src/lib/components` folder, and are organized in the following way:

### Atoms

Atoms are the most basic components, which can be seen as building blocks for other components. They're small and self-contained, and do only one thing. Examples of atoms are buttons, inputs, and tags.

### Molecules

Molecules are groups of atoms that work together to form a more complex component. Examples of molecules are cards, groups of links, or an alert callout.

### Organisms

Organisms, in this project, are code blocks that represent a section of a page, such as the header, footer and hero section. They can be used directly in a page as a sort of building block, so the page's code can be as simple as this:

<CodeBlock lang="html" filename="+page.svelte">

```html
<Header />
<Hero />
<About />
<Footer />
```

</CodeBlock>

## Component Gallery

This project uses [Histoire](https://histoire.dev) to be able to see and develop components in isolation. To open it, run `npm run story:dev`. This way you can customize and build new components with placeholder content and without worrying about where to put them in a page.

## Pages

Pages obey the default SvelteKit structure, but can be summarized as follows:

- There are two different file types: the pages (`+page.svelte`) and the layouts (`+layout.svelte`). Layouts are a way to reuse the same structure between different pages without having to duplicate code;
- There are two different page layouts in this site: the "Waves" layout, which all pages inside the `(waves)` folder use, and the "Blog Article" layout, which all pages inside the `(blog-article)` folder use;

## Blog Posts

To know how blog posts work and how to create new ones, check out [How Blog Posts Work](/blog-posts).
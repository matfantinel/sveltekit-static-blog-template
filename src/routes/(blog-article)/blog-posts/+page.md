---
title: How Blog Posts Work
slug: blog-posts
coverImage: /images/posts/blog-posts.jpg
date: 2023-04-22T21:55:15.361Z
excerpt: How to manage existing blog posts and create new ones
tags:
  - Documentation
---

<script>
  import Callout from "$lib/components/molecules/Callout.svelte";
  import CodeBlock from "$lib/components/molecules/CodeBlock.svelte";
  import Image from "$lib/components/atoms/Image.svelte";
</script>

All blog posts are located inside the `src/routes/(blog-article)` folder. Each folder inside it represents a blog post, and each folder has a `+page.md` file, which is the file that contains the post's content.

This way, the URL for each blog post is generated with the folder's name. For example, the folder `src/routes/(blog-article)/how-blog-posts-work` will generate the URL `https://mysite.com/how-blog-posts-work`.

All posts are Markdown files, which means you can use the [Markdown syntax](https://www.markdownguide.org/basic-syntax) in them, and it will work out of the box. However, since this projects uses [MDsveX](https://mdsvex.pngwn.io/) to parse Markdown, you can also use Svelte components inside them! This means that the components used in other pages can also be used in blog posts.

<Callout type="info">
  This is a Svelte component inside a Markdown file!
</Callout>

## Processing

Besides the blog post page itself, the blog posts can be displayed in other places, such as the `/blog` page, which lists all blog posts, and the `<RecentPosts>` component, used in the home page.

To be able to do that, posts are processed in the `src/lib/data/blog-posts/index.ts` file. That file imports the blog post files and processes them, so we're able to use some of the post's metadata to list them. For example, we get the post's title, cover image, and calculate the reading time based on its content, so that information is displayed in the blog post cards in the `/blog` page.

There is also some basic logic to get related posts based on a post's tags. The logic should be straightforward enough to modify it to your needs.

## Creating a new post

To create a new post, create a new folder inside the `src/routes/(blog-article)` folder, and inside it, create a `+page.md` file. The folder name will be used as the post's URL slug, so make sure it's a valid URL slug.

Inside the `+page.md` file, you must start with the front matter, which is a YAML-like syntax that is used to define metadata for the post. The front matter must be the first thing in the file, and must be separated from the rest of the content by three dashes (`---`). An example of a front matter is:

<CodeBlock lang="markdown">

```md
---
slug: my-new-blog-post
title: My New Blog Post
date: 2023-04-22T20:45:25.350Z
excerpt: A short description of the post
coverImage: /images/posts/cover-image.jpg
tags:
  - Example
---
```

</CodeBlock>

## Managing blog posts

I highly recommend the [Front Matter VS Code extension](https://frontmatter.codes/) to manage blog posts. It gives you a nice CMS-like UI to manage the front matter of all blog posts, as well as a preview of their content. It is, of course, optional, and you can manage everything directly in the Markdown files if you prefer.

<Image fullBleed src="/images/posts/frontmatter-preview-dashboard.png" alt="Screenshot of the Front Matter VS Code extension, showing the dashboard with all posts" />

<Image fullBleed src="/images/posts/frontmatter-preview-edit.png" alt="Screenshot of the Front Matter VS Code extension, showing the post editing UI" />

## RSS

This template automatically generates a RSS feed of your blog posts. It is generated in the `src/routes/rss.xml/+server.ts` file, and it is available at the `/rss.xml` URL.

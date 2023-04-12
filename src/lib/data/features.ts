import type { Feature } from "$lib/utils/types";

export default [
  {
    name: 'Personal Website',
    description:
      'The website you’re seeing right now. Designed to be pretty, simple, and lightweight.',
    image: '',
    sourceCode: 'https://github.com/matfantinel/matfantinel.github.io',
    blogPostLink: '/blog-development-sveltekit',
    tags: [{ label: 'Svelte' }, { label: 'Open Source', color: 'secondary' }]
  }
] as Feature[];
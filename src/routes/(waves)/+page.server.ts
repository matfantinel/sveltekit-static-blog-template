import features from '$lib/data/features';
import { filteredPosts } from '$lib/data/blog-posts';

export async function load() {
  const posts = filteredPosts.slice(0, 4);

  return {
    features,
    posts
  };
}

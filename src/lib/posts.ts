import { type Post, posts } from '@/data/posts';

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

/** '2025.05.08' → '2025-05-08' (ISO 8601) */
export function toIsoDate(date: string): string {
  return date.replaceAll('.', '-');
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import PostView from '@/components/blog/PostView/PostView';
import { getAllPosts, getPostBySlug, toIsoDate } from '@/lib/posts';
import { SITE_NAME, SITE_URL } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.summary,
      publishedTime: toIsoDate(post.date),
      section: post.category,
      images: [{ url: post.image, alt: post.title }],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.summary, images: [post.image] },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    image: `${SITE_URL}${encodeURI(post.image)}`,
    datePublished: toIsoDate(post.date),
    articleSection: post.category,
    inLanguage: 'ko-KR',
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: { '@type': 'Person', name: '고가형' },
    publisher: { '@type': 'Organization', name: SITE_NAME },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PostView post={post} />
    </>
  );
}

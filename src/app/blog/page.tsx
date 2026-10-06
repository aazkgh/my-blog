import type { Metadata } from 'next';

import RecentWritings from '@/components/home/RecentWritings/RecentWritings';

export const metadata: Metadata = {
  title: 'Blog',
  description: '개발, 취업 준비, 일상에 대한 글 모음',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  return <RecentWritings />;
}

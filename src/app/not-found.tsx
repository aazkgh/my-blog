import type { Metadata } from 'next';
import Link from 'next/link';

import Window from '@/components/ui/Window/Window';

export const metadata: Metadata = {
  title: '404 Not Found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Window title="404 Not Found">
      <h1>찾는 글이 없어요</h1>
      <p>다른 폴더를 열어볼까요?</p>
      <Link href="/">홈으로 돌아가기</Link>
    </Window>
  );
}

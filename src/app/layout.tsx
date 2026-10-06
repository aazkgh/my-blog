import '@/styles/global.css';
import '@/styles/monthTheme.css';

import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import DesktopIcons from '@/components/layout/DesktopIcons/DesktopIcons';
import Mp3Player from '@/components/ui/Mp3Player/Mp3Player';
import { getTracks } from '@/lib/tracks';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site';
import { MONTH_SCRIPT, getCurrentMonthKST } from '@/lib/theme';

import * as styles from './layout.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f7a9f5',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  keywords: ['개발자', '개발', '블로그', '프론트엔드', '백엔드', '리액트', 'Next.js', '성장'],
  authors: [{ name: '고가형' }],
  creator: '고가형',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [{ url: '/images/kakao_thumbnail.png', width: 1200, height: 600, alt: `${SITE_NAME} 썸네일` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ['/images/kakao_thumbnail.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" data-month={getCurrentMonthKST()} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: MONTH_SCRIPT }} />
      </head>
      <body>
        <div className={styles.desktop}>
          <DesktopIcons />
          <main className={styles.content}>{children}</main>
        </div>
        <Mp3Player tracks={getTracks()} />
      </body>
    </html>
  );
}

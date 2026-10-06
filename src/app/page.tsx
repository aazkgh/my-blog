import type { Metadata } from 'next';
import Image from 'next/image';

import profileImg from '@/../public/images/profileImg.png';
import ProfileWindow from '@/components/home/ProfileWindow/ProfileWindow';
import RecentWritings from '@/components/home/RecentWritings/RecentWritings';
import { SITE_DESCRIPTION, SITE_NAME } from '@/lib/site';

import * as styles from './page.css';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: 'ko-KR',
};

export default function HomePage() {
  return (
    <section className={styles.main}>
      <h1 className={styles.srOnly}>{SITE_NAME} - 주니어 개발자 고가형의 블로그</h1>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.upSection}>
        <div className={styles.header}>
          <Image
            src={profileImg}
            alt={SITE_NAME}
            width={500}
            priority
            sizes="(max-width: 1024px) 90vw, 500px"
            className={styles.heroImage}
          />
        </div>
        <ProfileWindow />
      </section>
      <RecentWritings />
    </section>
  );
}

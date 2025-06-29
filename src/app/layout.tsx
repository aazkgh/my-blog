import "@/styles/global.css";
import { ReactNode } from "react";
import Image from "next/image";
import folderIcon from "@/../public/images/folderImg.png";
import homeIcon from "@/../public/images/comrImg.png";
import * as styles from "@/styles/layout.css";
import Link from "next/link";
import type { Metadata } from 'next'
 

export const metadata: Metadata = {
  title: "Ordinary Girl",
  description: "주니어 개발자가 감자에서 싹을 틔우는 중...",
  keywords: ["개발자", "개발", "블로그", "프론트엔드", "백엔드", "리액트", "Next.js", "성장"],
  authors: [{ name: "고가형" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    type: "website",
    siteName: "Ordinary Girl",
    title: "Ordinary Girl",
    description: "주니어 개발자, 고가형의 블로그입니다",
    url: "https://aablogz.vercel.app/",
    images: [
      {
        url: "https://aablogz.vercel.app/images/kakao_thumbnail.png",
        width: 1200,
        height: 600,
        alt: "aablogz 썸네일"
      }
    ]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
    <main className={styles.desktop}>
      <div className={styles.folders}>
        <Link href="/" className={styles.iconBlock}>
          <Image src={homeIcon} alt="홈으로" width={84} height={84} />
          <span className={styles.label}>Home</span>
        </Link>
        <Link href="https://github.com/aazkgh" className={styles.iconBlock}>
          <Image src={folderIcon} alt="프로필" width={84} height={84} />
          <span className={styles.label}>프로필</span>
        </Link>
        <Link href="https://www.youtube.com/playlist?list=PLJFM9gjR21JaAkQbKf5rtoff-EOSzORiM" className={styles.iconBlock}>
          <Image src={folderIcon} alt="Music" width={84} height={84} />
          <span className={styles.label}>Music is<br/>my life</span>
        </Link>
      </div>
      {children}
    </main>
    </>
  );
}

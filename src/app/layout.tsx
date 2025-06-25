import "@/styles/global.css";
import { ReactNode } from "react";
import Image from "next/image";
import folderIcon from "@/../public/images/folderImg.png";
import homeIcon from "@/../public/images/comrImg.png";
import * as styles from "@/styles/layout.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className={styles.desktop}>
        <div className={styles.folders}>
          <Link href="/" className={styles.iconBlock}>
            <Image src={homeIcon} alt="홈으로" width={84} height={84} />
            <span className={styles.label}>Home</span>
          </Link>
          <div className={styles.iconBlock}>
            <Image src={folderIcon} alt="프로필" width={84} height={84} />
            <span className={styles.label}>프로필</span>
          </div>
          <div className={styles.iconBlock}>
            <Image src={folderIcon} alt="Music" width={84} height={84} />
            <span className={styles.label}>Music is<br/>my life</span>
          </div>
          <div className={styles.iconBlock}>
            <Image src={folderIcon} alt="카테고리" width={84} height={84} />
            <span className={styles.label}>카테고리</span>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}

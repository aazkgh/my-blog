import "@/styles/globals.css";
import { ReactNode } from "react";
import Image from "next/image";
import folderIcon from "@/assets/folder.png";
import * as styles from "@/styles/layout.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className={styles.desktop}>
        {/* 바탕화면 폴더들 */}
        <div className={styles.folders}>
          <div className={styles.iconBlock}>
            <Image src={folderIcon} alt="프로필" width={48} height={48} />
            <span className={styles.label}>프로필</span>
          </div>
          <div className={styles.iconBlock}>
            <Image src={folderIcon} alt="Music" width={48} height={48} />
            <span className={styles.label}>Music is<br/>my life</span>
          </div>
          <div className={styles.iconBlock}>
            <Image src={folderIcon} alt="카테고리" width={48} height={48} />
            <span className={styles.label}>카테고리</span>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}

import "@/styles/global.css";
import { ReactNode } from "react";
import FolderIcon from "@/assets/FolderIcon.svg";
import * as styles from "@/styles/layout.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className={styles.desktop}>
        <div className={styles.folders}>
          <div className={styles.iconBlock}>
            <FolderIcon width={48} height={48} />
            <span className={styles.label}>프로필</span>
          </div>
          <div className={styles.iconBlock}>
            <FolderIcon width={48} height={48} />
            <span className={styles.label}>Music is<br/>my life</span>
          </div>
          <div className={styles.iconBlock}>
            <FolderIcon width={48} height={48} />
            <span className={styles.label}>카테고리</span>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}

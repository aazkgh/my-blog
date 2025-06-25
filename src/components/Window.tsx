import { ReactNode } from 'react';
import * as styles from '@/styles/window.css';
import CloseBtn from "@/../public/images/CloseButton.png";
import HideBtn from "@/../public/images/HideButton.png";
import ShowBtn from "@/../public/images/ShowButton.png";
import Image from 'next/image';

interface WindowProps {
  title: string;
  children: ReactNode;
  width?: string;
  height?: string;
  className?: string;
}

export default function Window({ title, children, className }: WindowProps) {
  return (
    <div className={`${styles.window} ${className ?? ''}`}>
      <div className={styles.titleBar}>
        <span className={styles.title}>{title}</span>
        <div className={styles.controls}>
          <Image src={HideBtn} alt="숨김 버튼" width={18} height={16} />
          <Image src={ShowBtn} alt="확대 버튼" width={18} height={16} />
          <Image src={CloseBtn} alt="닫기 버튼" width={18} height={16} />
        </div>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

import { ReactNode } from 'react';
import * as styles from '@/styles/window.css';

interface WindowProps {
  title: string;
  children: ReactNode;
  width?: string;
  height?: string;
  className?: string;
}

export default function Window({ title, children, width = '500px', height = '300px', className }: WindowProps) {
  return (
    <div className={`${styles.window} ${className ?? ''}`} style={{ width, height }}>
      <div className={styles.titleBar}>
        <span className={styles.title}>{title}</span>
        <div className={styles.controls}>
          <div className={styles.btn} />
          <div className={styles.btn} />
          <div className={styles.btn} />
        </div>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

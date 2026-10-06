import Image from 'next/image';
import { ReactNode } from 'react';

import CloseBtn from '@/../public/images/CloseButton.png';
import HideBtn from '@/../public/images/HideButton.png';
import ShowBtn from '@/../public/images/ShowButton.png';

import * as styles from './Window.css';

interface WindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  titleId?: string;
  /** 넘기면 닫기 버튼이 실제 버튼으로 동작한다. */
  onClose?: () => void;
}

export default function Window({ title, children, className, titleId, onClose }: WindowProps) {
  return (
    <div className={`${styles.window} ${className ?? ''}`}>
      <div className={styles.titleBar}>
        <span id={titleId} className={styles.title}>
          {title}
        </span>
        <div className={styles.controls}>
          <Image src={HideBtn} alt="" width={18} height={16} />
          <Image src={ShowBtn} alt="" width={18} height={16} />
          {onClose ? (
            <button type="button" className={styles.closeButton} onClick={onClose} aria-label="닫기">
              <Image src={CloseBtn} alt="" width={18} height={16} />
            </button>
          ) : (
            <Image src={CloseBtn} alt="" width={18} height={16} />
          )}
        </div>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

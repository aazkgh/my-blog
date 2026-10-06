import Image from 'next/image';
import Link from 'next/link';

import homeIcon from '@/../public/images/comrImg.png';
import folderIcon from '@/../public/images/folderImg.png';
import { desktopLinks } from '@/data/profile';

import * as styles from './DesktopIcons.css';

const icons = { home: homeIcon, folder: folderIcon };

export default function DesktopIcons() {
  return (
    <nav className={styles.icons} aria-label="바탕화면 바로가기">
      {desktopLinks.map(({ href, label, icon }) => {
        const external = href.startsWith('http');
        return (
          <Link
            key={label}
            href={href}
            className={styles.iconBlock}
            {...(external && { target: '_blank', rel: 'noopener noreferrer' })}>
            <Image src={icons[icon]} alt="" width={84} height={84} className={styles.iconImage} />
            <span className={styles.label}>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

'use client';

import Image from 'next/image';
import { useState } from 'react';

import folderIcon from '@/../public/images/folderImg.png';
import Modal from '@/components/ui/Modal/Modal';
import type { Interest } from '@/data/profile';

import * as styles from './InterestFolders.css';

export default function InterestFolders({ interests }: { interests: Interest[] }) {
  const [selected, setSelected] = useState<Interest | null>(null);

  return (
    <>
      <div className={styles.folderGrid}>
        {interests.map((item) => (
          <button
            key={item.name}
            type="button"
            className={styles.folderItem}
            aria-haspopup="dialog"
            onClick={() => setSelected(item)}>
            <Image src={folderIcon} alt="" width={48} height={48} />
            <span>{item.name}</span>
          </button>
        ))}
      </div>
      {selected && (
        <Modal title={selected.name} onClose={() => setSelected(null)}>
          <div className={styles.popup}>
            <Image src={folderIcon} alt="" width={64} height={64} />
            <p>{selected.description}</p>
          </div>
        </Modal>
      )}
    </>
  );
}

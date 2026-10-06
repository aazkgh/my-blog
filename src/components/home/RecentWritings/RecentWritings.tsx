import Image from 'next/image';
import Link from 'next/link';

import Window from '@/components/ui/Window/Window';
import { getAllPosts } from '@/lib/posts';

import * as styles from './RecentWritings.css';

export default function RecentWritings() {
  return (
    <Window title="Recent Writings">
      <div className={styles.grid}>
        {getAllPosts().map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.thumb}>
            <Image
              src={post.image}
              alt={post.title}
              width={240}
              height={160}
              sizes="(max-width: 640px) 45vw, 160px"
              className={styles.thumbImage}
            />
            <p className={styles.thumbTitle}>{post.title}</p>
          </Link>
        ))}
      </div>
    </Window>
  );
}

import Image from 'next/image';

import Window from '@/components/ui/Window/Window';
import type { Post } from '@/data/posts';
import { toIsoDate } from '@/lib/posts';

import * as styles from './PostView.css';

export default function PostView({ post }: { post: Post }) {
  return (
    <article className={styles.postMain}>
      <Window title={post.title}>
        <section className={styles.blogInfo}>
          <Image
            src={post.image}
            alt={post.title}
            width={250}
            height={150}
            priority
            sizes="(max-width: 640px) 90vw, 250px"
            className={styles.thumbnail}
          />
          <Window title="*.txt">
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.date}>
              <time dateTime={toIsoDate(post.date)}>{post.date}</time> · {post.category}
            </div>
            <p>{post.summary}</p>
          </Window>
        </section>
        {post.content && <div className={styles.textBlock}>{post.content}</div>}
      </Window>
    </article>
  );
}

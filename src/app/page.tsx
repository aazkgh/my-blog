import React from 'react'
import Window from '@/components/Window';
import Image from 'next/image';
import * as styles from '@/styles/page.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <Image src="/cloud.png" alt="Ordinary Girl" width={300} height={100} />
        <h1 className={styles.title}>Ordinary Girl</h1>
      </div>

      <div className={styles.windows}>
        <Window title="This is ME" width="420px">
          <div className={styles.profile}>
            <h2 className={styles.name}>고가형 ♡ Junior Developer ♡</h2>
            <ul className={styles.bio}>
              <li>사용자 경험의 중요성을 아는 개발자</li>
              <li>손에 닿는 모든 코드에 의미를 담는 개발자</li>
              <li>함께 성장하는 것에 즐거움을 느끼는 개발자</li>
            </ul>
            <div className={styles.folderGrid}>
              {["번역", "가나다", "취직", "키치물품", "밴드", "서초", "산책", "블루버터", "침대", "영화감상"]
                .map((item) => (
                  <div key={item} className={styles.folderItem}>
                    <Image src="/icons/folder.png" alt={item} width={32} height={32} />
                    <span>{item}</span>
                  </div>
                ))}
            </div>
          </div>
        </Window>

        <Window title="Recent Writings" width="720px">
          <div className={styles.grid}>
            {[
              { src: '/thumbs/taiwan.jpg', title: '타이난 / 가오슝 여행 후기' },
              { src: '/thumbs/dog.jpg', title: '25 상반기 취준 결과 정리' },
              { src: '/thumbs/react.jpg', title: '[React] 상태 관리 리팩토링' },
              { src: '/thumbs/coffee.jpg', title: '밤 새는 법' },
              { src: '/thumbs/cs.jpg', title: '웹 CS 지식 씹어먹기.zip' },
              { src: '/thumbs/dev.jpg', title: '개발자가 되고싶은 이유' },
              { src: '/thumbs/tv.jpg', title: '디카를 샀어요. 이쁜 사진 ♡' },
              { src: '/thumbs/interview.jpg', title: '25 상반기 00은행 면접 후기' },
            ].map((item) => (
              <div key={item.title} className={styles.thumb}>
                <Image src={item.src} alt={item.title} width={120} height={80} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </Window>
      </div>
    </main>
  );
}

export default Home

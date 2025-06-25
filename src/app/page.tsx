import React from 'react'
import Window from '@/components/Window';
import folderIcon from "@/../public/images/folderImg.png";
import profileImg from "@/../public/images/profileImg.png";
import Image from 'next/image';
import * as styles from '@/styles/page.css';
import Link from 'next/link';

const Home = () => {
  return (
    <main className={styles.main}>
      <section className={styles.upSection}>
        <div className={styles.header}>
          <Image src={profileImg} alt="Ordinary Girl" width={500} />
        </div>
        <Window title="This is ME">
          <div className={styles.profile}>
            <h2 className={styles.name}>고가형 ( Junior Developer )</h2>
            <ul className={styles.bio}>
              <li>사용자 경험의 중요성을 아는 개발자</li>
              <li>손에 닿는 모든 코드에 의미를 담는 개발자</li>
              <li>함께 성장하는 것에 즐거움을 느끼는 개발자</li>
            </ul>
            <div className={styles.folderGrid}>
              {["번역", "가나다", "취직", "키치물품", "밴드", "서초", "산책", "블루버터", "침대", "영화감상"]
                .map((item) => (
                  <div key={item} className={styles.folderItem}>
                    <Image src={folderIcon} alt="프로필" width={48} height={48} />
                    <span>{item}</span>
                  </div>
                ))}
            </div>
          </div>
        </Window>
      </section>

      <Window title="Recent Writings">
        <div className={styles.grid}>
          {[
            { src: '/images/블로그썸네일01.jpg', title: '타이난 / 가오슝 여행 후기' },
            { src: '/images/블로그썸네일02.jpg', title: '25 상반기 취준 결과 정리' },
            { src: '/images/블로그썸네일03.jpg', title: '[React] 상태 관리 리팩토링' },
            { src: '/images/블로그썸네일04.png', title: '밤 새는 법' },
            { src: '/images/블로그썸네일05.jpg', title: '웹 CS 지식 씹어먹기.zip' },
            { src: '/images/블로그썸네일06.jpg', title: '개발자가 되고싶은 이유' },
            { src: '/images/블로그썸네일07.jpg', title: '디카를 샀어요. 이쁜 사진 ♡' },
            { src: '/images/블로그썸네일08.jpg', title: '25 상반기 00은행 면접 후기' },
          ].map((item) => (
            <Link href="/blog" key={item.title} className={styles.thumb}>
              <Image src={item.src} alt={item.title} width={120} height={80} />
              <p>{item.title}</p>
            </Link>
          ))}
        </div>
      </Window>
    </main>
  );
}

export default Home

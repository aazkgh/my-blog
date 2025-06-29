import Image from 'next/image';
import * as styles from '@/styles/blog.css';
import Window from '@/components/Window';

type Post = {
  title: string;
  date: string;
  category: string;
  image: string;
  summary: string;
  content: string;
};

const posts: Record<string, Post> = {
  'react-refactor': {
    title: '[React] 상태관리 리팩토링을 해보자',
    date: '2025.05.08',
    category: 'Projects',
    image: '/images/블로그썸네일03.jpg',
    summary: '이런이런 글을 작성했습니다. 여러분도 노력하시면 멋진 리액트 개발자로 거듭나실 수 있어요.',
    content: `
      웹페이지의 성능을 라이트하우스를 이용해 측정한 결과이다.
      LCP와 FCP가 다 너무 오래 걸리는 것으로 보여서 최적화가 필요한 상황이다.
      이미지 최적화를 하는 데에는 정말 다양한 방법이 있지만 현재 혼자서 프로젝트 유지보수를 하고 있기 때문에
      1. 나 혼자 구현이 가능한가? 
      2. 우리 프로젝트에 적합한 항목들을 고려해 최적화를 진행해보았다.
      웹페이지의 성능을 라이트하우스를 이용해 측정한 결과이다.
      LCP와 FCP가 다 너무 오래 걸리는 것으로 보여서 최적화가 필요한 상황이다.
      이미지 최적화를 하는 데에는 정말 다양한 방법이 있지만 현재 혼자서 프로젝트 유지보수를 하고 있기 때문에 1. 나 혼자 구현이 가능하고 2. 우리 프로젝트에 적합한 항목들을 골라서 최적화를 진행해보았다.

      지연 로딩
      메인 화면에서 다양한 모델/디자이너의 프로필은 무한 스크롤로 구현해주고 있다. 우리 프로젝트는 모바일뷰라 다른 화면들에서는 뷰포트 바깥에 이미지가 거의 존재하지 않는다. 그래서 메인에서만 지연 로딩을 적용시켜주었다.

      picture 태그
      성능이 가장 떨어지는 지원 플로우/회원 가입 플로우에 WebP, AVIF(최적화된 이미지 포맷)과 미디어 속성을 활용해야 브라우저 사이즈에 맞는 이미지를 제공했다,
      picture 태그, source 태그를 함께 사용하여 webp 확장자를 지원하지 않는 브라우저일 경우, 기존의 이미지가 사용자에게 뜨도록 설정해주었다.
    `,
  },
};

export default function BlogPage() {
  const post = posts['react-refactor'];

  return (
    <section className={styles.postMain}>
      <Window title={post.title}>
        <section className={styles.blogInfo}>
          <Image
            src={post.image}
            alt={post.title}
            width={250}
            height={150}
            className={styles.thumbnail}
          />
          <Window title='*.txt'>
            <div className={styles.title}>{post.title}</div>
            <div className={styles.date}>{post.date} · {post.category}</div>
            <p>{post.summary}</p>
          </Window>
        </section>
        <div title='*.txt' className={styles.textBlock}>
          <p>{post.content}</p>
        </div>
      </Window>
    </section>
  );
}

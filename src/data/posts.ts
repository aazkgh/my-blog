export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  summary: string;
  content?: string;
};

const placeholderSummary = '곧 글이 올라올 예정이에요. 조금만 기다려 주세요 ♡';

export const posts: Post[] = [
  {
    slug: 'tainan-kaohsiung-trip',
    title: '타이난 / 가오슝 여행 후기',
    date: '2025.05.20',
    category: 'Life',
    image: '/images/블로그썸네일01.jpg',
    summary: placeholderSummary,
  },
  {
    slug: 'first-half-job-hunt-result',
    title: '25 상반기 취준 결과 정리',
    date: '2025.05.15',
    category: 'Career',
    image: '/images/블로그썸네일02.jpg',
    summary: placeholderSummary,
  },
  {
    slug: 'react-refactor',
    title: '[React] 상태관리 리팩토링을 해보자',
    date: '2025.05.08',
    category: 'Projects',
    image: '/images/블로그썸네일03.jpg',
    summary:
      '이런이런 글을 작성했습니다. 여러분도 노력하시면 멋진 리액트 개발자로 거듭나실 수 있어요.',
    content: `웹페이지의 성능을 라이트하우스를 이용해 측정한 결과이다.
LCP와 FCP가 다 너무 오래 걸리는 것으로 보여서 최적화가 필요한 상황이다.
이미지 최적화를 하는 데에는 정말 다양한 방법이 있지만 현재 혼자서 프로젝트 유지보수를 하고 있기 때문에 1. 나 혼자 구현이 가능하고 2. 우리 프로젝트에 적합한 항목들을 골라서 최적화를 진행해보았다.

지연 로딩
메인 화면에서 다양한 모델/디자이너의 프로필은 무한 스크롤로 구현해주고 있다. 우리 프로젝트는 모바일뷰라 다른 화면들에서는 뷰포트 바깥에 이미지가 거의 존재하지 않는다. 그래서 메인에서만 지연 로딩을 적용시켜주었다.

picture 태그
성능이 가장 떨어지는 지원 플로우/회원 가입 플로우에 WebP, AVIF(최적화된 이미지 포맷)과 미디어 속성을 활용해야 브라우저 사이즈에 맞는 이미지를 제공했다.
picture 태그, source 태그를 함께 사용하여 webp 확장자를 지원하지 않는 브라우저일 경우, 기존의 이미지가 사용자에게 뜨도록 설정해주었다.`,
  },
  {
    slug: 'how-to-stay-up-all-night',
    title: '밤 새는 법',
    date: '2025.04.28',
    category: 'Life',
    image: '/images/블로그썸네일04.png',
    summary: placeholderSummary,
  },
  {
    slug: 'web-cs-notes',
    title: '웹 CS 지식 씹어먹기.zip',
    date: '2025.04.12',
    category: 'Study',
    image: '/images/블로그썸네일05.jpg',
    summary: placeholderSummary,
  },
  {
    slug: 'why-i-want-to-be-a-developer',
    title: '개발자가 되고싶은 이유',
    date: '2025.03.30',
    category: 'Career',
    image: '/images/블로그썸네일06.jpg',
    summary: placeholderSummary,
  },
  {
    slug: 'bought-a-digital-camera',
    title: '디카를 샀어요. 이쁜 사진 ♡',
    date: '2025.03.18',
    category: 'Life',
    image: '/images/블로그썸네일07.jpg',
    summary: placeholderSummary,
  },
  {
    slug: 'first-half-bank-interview',
    title: '25 상반기 00은행 면접 후기',
    date: '2025.03.05',
    category: 'Career',
    image: '/images/블로그썸네일08.jpg',
    summary: placeholderSummary,
  },
];

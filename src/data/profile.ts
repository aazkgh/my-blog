export type Interest = { name: string; description: string };

export const profile = {
  name: '고가형 ( Junior Developer )',
  bio: [
    '사용자 경험의 중요성을 아는 개발자',
    '손에 닿는 모든 코드에 의미를 담는 개발자',
    '함께 성장하는 것에 즐거움을 느끼는 개발자',
  ],
  interests: [
    { name: '번역', description: '외국어 글을 우리말로 옮기는 일을 좋아해요.' },
    { name: '가나다', description: '한글과 말맛에 대한 관심을 모아둔 폴더예요.' },
    { name: '취직', description: '취준 과정에서 배운 것들을 기록하고 있어요.' },
    { name: '키치물품', description: '귀엽고 촌스러운 Y2K 물건 수집 중이에요.' },
    { name: '밴드', description: '요즘 즐겨 듣는 밴드 음악이에요.' },
    { name: '서초', description: '자주 들르는 동네 이야기예요.' },
    { name: '산책', description: '걷다가 만난 풍경과 생각들이에요.' },
    { name: '블루버터', description: '좋아하는 디저트와 카페 기록이에요.' },
    { name: '침대', description: '가장 사랑하는 휴식 공간이에요.' },
    { name: '영화감상', description: '본 영화와 짧은 감상을 모아요.' },
  ] satisfies Interest[],
};

export const desktopLinks = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: 'https://github.com/aazkgh', label: '프로필', icon: 'folder' },
  {
    href: 'https://www.youtube.com/playlist?list=PLJFM9gjR21JaAkQbKf5rtoff-EOSzORiM',
    label: 'Music is\nmy life',
    icon: 'folder',
  },
] as const;

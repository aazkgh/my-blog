import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';

/**
 * 월별 대표색 테마.
 * `<html data-month="1~12">` 값에 따라 색 토큰이 바뀐다 (설정은 `lib/theme.ts`의 MONTH_SCRIPT).
 *
 * 색은 월마다 대표색 1개만 정하고, 나머지(밝은색·배경·글자색 등)는 color-mix로 파생한다.
 * → 대표색을 바꾸고 싶으면 아래 MONTH_COLORS만 고치면 된다.
 */

// index 0 = 1월
export const MONTH_COLORS = [
  '#c9b5f2', // 1월
  '#9AD1FC', // 2월
  '#f7a9c9', // 3월
  '#f7a9f5', // 4월
  '#C0DA93', // 5월
  '#a9f0e6', // 6월
  '#7ECBC6', // 7월
  '#bdfaabff', // 8월
  '#f7d27a', // 9월
  '#e89a7a', // 10월
  '#c9a98a', // 11월
  '#f08a8a', // 12월
] as const;

const DEFAULT_COLOR = '#f7a9f5';

export const vars = createGlobalThemeContract(
  {
    brand: '', // 대표색
    brandLight: '', // 타이틀바 위쪽 밝은색
    brandSoft: '', // 창 배경
    brandDark: '', // 본문·제목 글자색
    accent: '', // 강조 글자색
    hover: '', // 호버 배경
    overlay: '', // 팝업 뒤 배경
  },
  (_value, path) => `theme-${path.join('-')}`
);

const derive = (base: string) => ({
  brand: base,
  brandLight: `color-mix(in srgb, ${base} 45%, white)`,
  brandSoft: `color-mix(in srgb, ${base} 12%, white)`,
  brandDark: `color-mix(in srgb, ${base} 35%, black)`,
  accent: `color-mix(in srgb, ${base} 60%, black)`,
  hover: `color-mix(in srgb, ${base} 45%, transparent)`,
  overlay: `color-mix(in srgb, ${base} 22%, black 78%)`,
});

// 기본값(스크립트 실행 전/JS 비활성)
createGlobalTheme(':root', vars, derive(DEFAULT_COLOR));

MONTH_COLORS.forEach((color, i) => {
  createGlobalTheme(`:root[data-month="${i + 1}"]`, vars, derive(color));
});

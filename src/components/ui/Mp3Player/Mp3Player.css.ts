import { keyframes, style } from '@vanilla-extract/css';

import { media } from '@/styles/breakpoints';
import { vars } from '@/styles/monthTheme.css';

const scroll = keyframes({
  from: { transform: 'translateX(0)' },
  to: { transform: 'translateX(-50%)' },
});

const reducedMotion = '(prefers-reduced-motion: reduce)';

// 다른 Window와 같은 테두리·그림자·월별 색을 쓰고, 화면 우하단에 고정한다.
export const player = style({
  position: 'fixed',
  right: '2.4rem',
  bottom: '2.4rem',
  zIndex: 50, // 팝업(100)보다 아래
  width: '30rem',
  display: 'flex',

  '@media': {
    [media.mobile]: {
      right: '1.2rem',
      bottom: '1.2rem',
      left: '1.2rem',
      width: 'auto',
    },
  },
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const display = style({
  display: 'flex',
  alignItems: 'center',
  height: '5rem',
  overflow: 'hidden',
  border: '2px solid #000',
  backgroundColor: '#fff',
  color: vars.brandDark,
  fontSize: '14px',
  whiteSpace: 'nowrap',
});

export const staticText = style({
  width: '100%',
  padding: '0 1.2rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign: 'center',
});

// 같은 문구를 두 번 이어 붙이고 절반만큼 이동 → 끊김 없이 무한 반복
export const marquee = style({
  display: 'flex',
  width: 'max-content',
  animationName: scroll,
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
  '@media': {
    [reducedMotion]: { animation: 'none' },
  },
});

export const marqueeItem = style({
  paddingRight: '4rem',
});

export const controls = style({
  display: 'flex',
  gap: '0.8rem',
});

export const button = style({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  height: '3.2rem',
  border: '2px solid #000',
  background: `linear-gradient(to bottom, ${vars.brandLight}, ${vars.brand})`,
  color: vars.brandDark,
  cursor: 'pointer',
  boxShadow: '2px 2px 0 #000',

  selectors: {
    '&:hover, &:focus-visible': { background: vars.hover },
    '&:active': { transform: 'translate(2px, 2px)', boxShadow: 'none' },
  },
});

export const icon = style({
  width: '1.6rem',
  height: '1.6rem',
  fill: 'currentColor',
  shapeRendering: 'crispEdges',
});

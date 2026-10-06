import { style } from '@vanilla-extract/css';

import { media } from '@/styles/breakpoints';

export const icons = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  gap: '1.5rem',

  '@media': {
    // 좁은 화면에서는 왼쪽 세로 배치 대신 맨 위 가로 한 줄로 올린다.
    [media.tablet]: { flexDirection: 'row', justifyContent: 'center', gap: '2rem' },
    [media.mobile]: { gap: '1.2rem' },
  },
});

export const iconBlock = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#fff',
  fontSize: '12px',
  textAlign: 'center',
  textShadow: '1px 1px 2px #000',
  cursor: 'pointer',
});

export const iconImage = style({
  '@media': {
    [media.tablet]: { width: '6rem', height: '6rem' },
  },
});

export const label = style({
  marginTop: '0.25rem',
  lineHeight: 1.2,
  whiteSpace: 'pre-line',
});

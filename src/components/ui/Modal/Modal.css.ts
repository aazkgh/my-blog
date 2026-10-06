import { keyframes, style } from '@vanilla-extract/css';

import { vars } from '@/styles/monthTheme.css';

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });
const popIn = keyframes({
  from: { opacity: 0, transform: 'translateY(8px) scale(0.97)' },
  to: { opacity: 1, transform: 'none' },
});

const reducedMotion = '(prefers-reduced-motion: reduce)';

// 뒤 배경을 어둡게 + 흐리게 해서 팝업에 시선을 모은다.
export const overlay = style({
  position: 'fixed',
  inset: 0,
  zIndex: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.6rem',
  backgroundColor: vars.overlay,
  backdropFilter: 'blur(4px) saturate(0.7)',
  WebkitBackdropFilter: 'blur(4px) saturate(0.7)',
  animation: `${fadeIn} 0.15s ease-out`,
  '@media': {
    [reducedMotion]: { animation: 'none' },
  },
});

export const dialog = style({
  width: 'min(42rem, 100%)',
  maxHeight: '100%',
  display: 'flex',
  outline: 'none',
  animation: `${popIn} 0.18s ease-out`,
  '@media': {
    [reducedMotion]: { animation: 'none' },
  },
});

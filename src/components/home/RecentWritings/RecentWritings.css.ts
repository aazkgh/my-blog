import { style } from '@vanilla-extract/css';

import { media } from '@/styles/breakpoints';
import { vars } from '@/styles/monthTheme.css';

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
  gap: '1rem',

  '@media': {
    [media.mobile]: { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '0.8rem' },
  },
});

export const thumb = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '12px',
  textAlign: 'center',
  gap: '0.4rem',
  padding: '0.6rem 0.4rem',
  transition: 'background-color 0.15s, transform 0.15s',

  selectors: {
    '&:hover, &:focus-visible': {
      backgroundColor: vars.hover,
      transform: 'translateY(-2px)',
    },
  },

  '@media': {
    '(prefers-reduced-motion: reduce)': { transition: 'none' },
  },
});

export const thumbImage = style({
  width: '100%',
  height: 'auto',
  aspectRatio: '3 / 2',
  objectFit: 'cover',
  border: '1px solid #000',
  transition: 'box-shadow 0.15s',

  selectors: {
    [`${thumb}:hover &, ${thumb}:focus-visible &`]: { boxShadow: `3px 3px 0 ${vars.brandDark}` },
  },
});

export const thumbTitle = style({
  selectors: {
    [`${thumb}:hover &, ${thumb}:focus-visible &`]: { color: vars.accent, textDecoration: 'underline' },
  },
});

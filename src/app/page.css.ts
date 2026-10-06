import { style } from '@vanilla-extract/css';

import { media } from '@/styles/breakpoints';

export const main = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 1.2rem 0 4rem',
  gap: '2rem',

  '@media': {
    [media.tablet]: { padding: 0 },
    [media.mobile]: { gap: '1.2rem' },
  },
});

export const upSection = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '2.4rem',

  '@media': {
    [media.tablet]: { flexDirection: 'column', alignItems: 'center', gap: '1.6rem' },
  },
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem',
  flexShrink: 0,
  width: '50rem',
  maxWidth: '100%',
});

export const heroImage = style({
  width: '100%',
  height: 'auto',
});

export const srOnly = style({
  position: 'absolute',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
});

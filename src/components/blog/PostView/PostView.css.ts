import { style } from '@vanilla-extract/css';

import { media } from '@/styles/breakpoints';
import { vars } from '@/styles/monthTheme.css';

export const postMain = style({
  width: '100%',
  height: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',

  '@media': {
    [media.tablet]: { padding: 0 },
  },
});

export const thumbnail = style({
  width: '30%',
  height: 'auto',
  marginBottom: '1.5rem',
  borderRadius: '3px',
  flexShrink: 0,

  '@media': {
    [media.mobile]: { width: '100%', marginBottom: 0 },
  },
});

export const blogInfo = style({
  width: '100%',

  display: 'flex',
  gap: '2.4rem',

  '@media': {
    [media.mobile]: { flexDirection: 'column', gap: '1.2rem' },
  },
});

export const textBlock = style({
  fontFamily: `'Galmuri9', 'Dotum', sans-serif`,
  lineHeight: 1.6,
  whiteSpace: 'pre-wrap',
  overflowWrap: 'anywhere',
});

export const title = style({
  fontSize: '20px',
  fontWeight: 'bold',
  color: vars.accent,
  marginBottom: '0.5rem',
});

export const date = style({
  fontSize: '14px',
  color: '#666',
  marginBottom: '1rem',
});

import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/monthTheme.css';

export const profile = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const name = style({
  fontSize: '16px',
  fontWeight: 'bold',
  color: vars.brandDark,
});

export const bio = style({
  paddingLeft: '1rem',
  fontSize: '14px',
  lineHeight: 1.5,
});

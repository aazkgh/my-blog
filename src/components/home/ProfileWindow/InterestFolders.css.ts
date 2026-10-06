import { style } from '@vanilla-extract/css';

import { media } from '@/styles/breakpoints';
import { vars } from '@/styles/monthTheme.css';

export const folderGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 80px)',
  gap: '0.5rem',

  '@media': {
    [media.mobile]: { gridTemplateColumns: 'repeat(auto-fill, minmax(64px, 1fr))' },
  },
});

export const folderItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '12px',
  textAlign: 'center',
  cursor: 'pointer',
  padding: '0.2rem',
  selectors: {
    '&:hover, &:focus-visible': { backgroundColor: vars.hover },
  },
});

export const popup = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
  fontSize: '14px',
  lineHeight: 1.6,
  color: vars.brandDark,
});

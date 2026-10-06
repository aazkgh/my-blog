import { style } from '@vanilla-extract/css';

import { media } from '@/styles/breakpoints';

export const desktop = style({
  backgroundImage: 'url("/images/wallpaperImg.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',

  width: '100%',
  minHeight: '100dvh',
  padding: '2rem 4rem',

  display: 'flex',
  justifyContent: 'space-between',
  gap: '2rem',

  '@media': {
    [media.tablet]: {
      flexDirection: 'column',
      padding: '1.6rem 2rem',
      gap: '1.6rem',
    },
    [media.mobile]: {
      padding: '1.2rem',
      gap: '1.2rem',
    },
  },
});

export const content = style({
  flex: 1,
  minWidth: 0,
});

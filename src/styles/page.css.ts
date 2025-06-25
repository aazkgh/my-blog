import { style } from '@vanilla-extract/css';

export const main = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 1.2rem 0 4rem',
  gap: '2rem',
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem',
});

export const title = style({
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#ff7fbf',
  fontFamily: `'Galmuri9', 'Dotum', sans-serif`,
});

export const upSection = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '2.4rem',

  maxHeight:'30rem'
});

export const profile = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const name = style({
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#5f005f',
});

export const bio = style({
  paddingLeft: '1rem',
  fontSize: '14px',
  lineHeight: 1.5,
});

export const folderGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 80px)',
  gap: '0.5rem',
});

export const folderItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '12px',
  textAlign: 'center',
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
  gap: '1rem',
});

export const thumb = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '12px',
  textAlign: 'center',
});

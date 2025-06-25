import { style } from '@vanilla-extract/css';

export const desktop = style({
  backgroundImage: 'url("/images/wallpaperImg.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100dvw',
  height: '100dvh',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem',
});

export const folders = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
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

export const label = style({
  marginTop: '0.25rem',
  lineHeight: 1.2,
});
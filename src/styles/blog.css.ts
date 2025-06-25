import { style } from '@vanilla-extract/css';

export const postMain = style({
  width: '100%',
  height: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
});

export const postContent = style({
  width: '800px',
  backgroundColor: '#fff0fb',
  border: '3px solid #d280c3',
  borderRadius: '4px',
  padding: '1.5rem',
  boxShadow: '2px 2px 8px rgba(0,0,0,0.2)',
});

export const thumbnail = style({
  width: '30%',
  height: 'auto',
  marginBottom: '1.5rem',
  borderRadius: '3px',
});

export const blogInfo = style({
  width: '100%',

  display: 'flex',
  gap: '2.4rem'
});

export const textBlock = style({
  fontFamily: `'Galmuri9', 'Dotum', sans-serif`,
  lineHeight: 1.6,
});

export const title = style({
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#d91fa5',
  marginBottom: '0.5rem',
});

export const date = style({
  fontSize: '14px',
  color: '#666',
  marginBottom: '1rem',
});

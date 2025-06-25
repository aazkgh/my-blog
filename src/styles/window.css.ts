import { style } from '@vanilla-extract/css';

export const window = style({
  border: '2px solid #000',
  backgroundColor: '#fff0ff',
  boxShadow: '4px 4px 0 #000',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  fontFamily: `'Galmuri9', 'Dotum', sans-serif`,
});

export const titleBar = style({
  background: 'linear-gradient(to bottom, #fcd3ff, #f7a9f5)',
  padding: '4px 8px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #000',
});

export const title = style({
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#5f005f',
});

export const controls = style({
  display: 'flex',
  gap: '4px',
});

export const btn = style({
  width: '10px',
  height: '10px',
  backgroundColor: '#fff',
  border: '1px solid #000',
});

export const body = style({
  padding: '12px',
  flex: 1,
  overflow: 'auto',
});

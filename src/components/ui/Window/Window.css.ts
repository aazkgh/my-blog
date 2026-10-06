import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/monthTheme.css';

export const window = style({
  border: '2px solid #000',
  backgroundColor: vars.brandSoft,
  boxShadow: '4px 4px 0 #000',

  width: '100%',
  height: '100%',  
  display: 'flex',
  flexDirection: 'column',
  flex: '1',

  overflow: 'hidden',
  fontFamily: `'Galmuri9', 'Dotum'`
});

export const titleBar = style({
  background: `linear-gradient(to bottom, ${vars.brandLight}, ${vars.brand})`,
  padding: '4px 8px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #000',
});

export const title = style({
  fontSize: '14px',
  fontWeight: 'bold',
  color: vars.brandDark,
});

export const controls = style({
  display: 'flex',
  gap: '4px',
});

export const body = style({
  padding: '12px',
  flex: 1,
  overflow: 'auto',
});

export const closeButton = style({
  display: 'flex',
  padding: 0,
  cursor: 'pointer',
});

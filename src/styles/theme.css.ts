import { createThemeContract } from '@vanilla-extract/css';
import { createTheme } from '@vanilla-extract/css';

export const sys = createThemeContract({
  color: {
    white: '',
    pink: '',
    lightgray: '',
    gray:'',
    pinkGradient: '',
  },
  size: {
    heading: '',
    content: '',
    sub:''
  },
});


export const themeClass = createTheme(sys, {
  color: {
    white: '#ffffff',
    pink: '#ef96dc',
    lightgray: '#EEEEEE',
    gray: '#5F5F5F',
    pinkGradient: 'linear-gradient(0deg, #f3f3f3, #ef96dc)',
  },
  size: {
    heading: '20px',
    content: '16px',
    sub: '12px',
  },
});
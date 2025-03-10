import { createTheme } from '@mui/material/styles';
import typography from './typography';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    headline: true;
    subheading: true;
    preview: true;
    title: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#F2EEEE',
      light: '#63a4ff',
      dark: '#004ba0',
    },
    text: {
      primary: '#010101',
      secondary: '#5E5C5D',
    },
    secondary: {
      main: '#D71920',
      light: 'rgba(195, 192, 194, 1)',
      dark: 'rgba(242, 238, 238, 1)',
    },
    error: {
      main: 'rgba(215, 25, 32, 1)',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
    common: {
      successGreen: '#56C061',
      dangerRed: '#D71920',
      grey: '#5E5C5D',
      tabColor: '#F4D1D4',
      black50: '#00000080',
      black75: '##000000b3',
      divider: '#C3C0C2',
      schedule: '#6467DC',
      gradiant: `
      linear-gradient(0deg, #FFFFFF, #FFFFFF), 
      conic-gradient(from 133.73deg at 50% 50%, 
        #FBF4F0 0deg, 
        #EEF5F9 54deg, 
        #EFE2F0 138.6deg, 
        #F7E4E1 235.8deg, 
        #FBF4F0 360deg
      )
    `,
    },
  },
  typography: {
    ...typography,
  },
});

export default theme;
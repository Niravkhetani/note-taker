import { Components, Theme } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primaryOutline: true;
    dangerOutline: true;
  }
}

const MuiButton: NonNullable<Components<Theme>['MuiButton']>['variants'] = [
  {
    props: {
      variant: 'primaryOutline',
    },
    style: ({ theme }) => ({
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      fontFamily: 'Lato',
      fontWeight: 'bold',
      fontSize: '14px',
      borderRadius: `${theme.shape.borderRadius / 2}px`,
      padding: '15px 30px',
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
      },
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
      },
      '&:active': {
        backgroundColor: theme.palette.primary.main,
      },
    }),
  },
  {
    props: {
      variant: 'dangerOutline',
    },
    style: ({ theme }) => ({
      backgroundColor: theme.palette.error.main,
      color: '#fff',
      fontFamily: 'Lato',
      fontWeight: 'bold',
      fontSize: '14px',
      borderRadius: `${theme.shape.borderRadius / 2}px`,
      padding: '15px 30px',
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: theme.palette.error.main,
      },
      '&:focus': {
        backgroundColor: theme.palette.error.main,
      },
      '&:active': {
        backgroundColor: theme.palette.error.main,
      },
    }),
  },
];

export default MuiButton;

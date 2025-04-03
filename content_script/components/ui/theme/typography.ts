import { TypographyOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    noteTitle: true;
    noteDescription: true;
    options: true;
    paginate: true;
  }
}
interface CustomTypographyOptions extends TypographyOptions {
  headline?: {
    fontWeight: number;
    mb?: number;
    fontSize: string;
    lineHeight: number;
  };
  subheading?: {
    fontWeight: number;
    mb?: number;
    fontSize: string;
    lineHeight: number;
    textAlign: string;
    color: string;
  };
  preview?: {
    width: string;
    height: string;
    borderRadius: string;
    overflow: string;
    marginRight: string;
  };
  title?: {
    fontWeight: number;
    fontSize: string;
    lineHeight: string;
    fontFamily: string;
  };
  noteTitle?: {
    fontWeight: number;
    fontSize: string;
    lineHeight: string;
    fontFamily: string;
  };
  noteDescription?: {
    fontWeight: number;
    fontSize: string;
    lineHeight: string;
    fontFamily: string;
  };
  options?: {
    fontWeight: number;
    fontSize: string;
    lineHeight: string;
    fontFamily: string;
  };
  paginate?: {
    fontWeight: number;
    fontSize: string;
    lineHeight: string;
  };
}

// Allow using 'noteTitle' in Typography component props

const typography: CustomTypographyOptions = {
  headline: {
    fontWeight: 600,
    fontSize: '25px',
    lineHeight: 3,
  },
  subheading: {
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: 1,
    textAlign: 'center',
    color: 'text.secondary',
  },
  preview: {
    width: '50px',
    height: '80px',
    borderRadius: '10px',
    overflow: 'hidden',
    marginRight: '10px',
  },
  title: {
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '28px',
    fontFamily: 'Roboto',
  },
  noteTitle: {
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '28px',
    fontFamily: 'Lato',
  },
  noteDescription: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '18px',
    fontFamily: 'Quicksand',
  },
  options: {
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '18px',
    fontFamily: 'Lato',
  },
  paginate: {
    fontWeight: 700,
    fontSize: '11px',
    lineHeight: '16px',
  },
  fontFamily: ['Roboto', 'Lato', 'Quicksand'].join(','),
};

export default typography;

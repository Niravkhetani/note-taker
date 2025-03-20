import { TypographyOptions } from '@mui/material/styles/createTypography';

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
  };
}

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
    fontSize: '14px',
    lineHeight: '28px',
  },
};

export default typography;

import { Box, Typography } from '@mui/material';
import NotePaginateStyles from './notePaginate-styles';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

interface NotePaginateProps {
  totalCount: number;
  perPageCount: number;
  setResults: (value: any) => void;
}
const NotePaginate = ({
  totalCount,
  perPageCount,
  setResults,
}: NotePaginateProps) => {
  console.log('NotePaginate', totalCount, perPageCount, setResults);
  const { classes } = NotePaginateStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.iconWrapper}>
        <ArrowBack color="customGrey" />
        <Typography color="customBlack">Previous</Typography>
      </Box>
      <Box className={classes.iconWrapper}>
        <Typography color="customBlack">Next</Typography>
        <ArrowForward color="customGrey" />
      </Box>
    </Box>
  );
};

export default NotePaginate;

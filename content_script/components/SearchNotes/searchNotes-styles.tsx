import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'notes' })((theme) => ({
  container: {
    mt: 4,
  },
  heading: {
    color: theme.palette.primary.dark,
  },
}));
export default useStyles;

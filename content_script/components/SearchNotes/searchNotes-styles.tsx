import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'notes' })((theme) => ({
  container: {
    marginTop: '12px',
  },
  heading: {
    color: theme.palette.primary.dark,
  },
}));
export default useStyles;

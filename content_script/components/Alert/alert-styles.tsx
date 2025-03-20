import { makeStyles } from 'tss-react/mui';
const useStyles = makeStyles({ uniqId: 'notes' })((theme) => ({
  container: {
    padding: theme.spacing(1),
    boxShadow: theme.shadows[3],
    background: theme.palette.primary.light,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius / 2,
    margin: '14px 0px',
    height: '30px',
  },
  heading: {
    color: theme.palette.primary.dark,
  },
}));
export default useStyles;

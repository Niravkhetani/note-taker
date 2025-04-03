import { makeStyles } from 'tss-react/mui';
const useStyles = makeStyles({ uniqId: 'notes' })((theme) => ({
  container: {
    padding: theme.spacing(1),
    background: theme.palette.primary.light,
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius / 2,
    margin: '8px 0px',
    height: '32px',
  },
  heading: {
    color: theme.palette.primary.dark,
    display: 'flex',
    justifyContent: 'center',
    width: 'calc(100% - 20px)',
  },
}));
export default useStyles;

import { makeStyles } from 'tss-react/mui';
const useStyles = makeStyles({ uniqId: 'notes' })((theme) => ({
  root: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 9999,
    width: '500px',
    height: '440px',
    borderRadius: '16px',
  },
  container: {
    padding: theme.spacing(2),
    boxShadow: '3',
    height: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
export default useStyles;

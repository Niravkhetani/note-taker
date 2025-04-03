import { makeStyles } from 'tss-react/mui';
const useStyles = makeStyles({ uniqId: 'notes' })((theme) => ({
  root: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 9999998,
    width: '500px',
    height: '600px',
    borderRadius: theme.shape.borderRadius,
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
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '1rem',
    gap: theme.spacing(1),
  },
  icon: {
    height: '21px',
    width: '21px',
    marginRight: '0.5rem',
  },
}));
export default useStyles;

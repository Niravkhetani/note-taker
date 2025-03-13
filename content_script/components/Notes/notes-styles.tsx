import { makeStyles } from 'tss-react/mui';
const useStyles = makeStyles({ uniqId: 'notes' })(() => ({
  root: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 9999,
  },
  container: {
    width: '300px',
    padding: '2',
    boxShadow: '3',
  },
}));
export default useStyles;

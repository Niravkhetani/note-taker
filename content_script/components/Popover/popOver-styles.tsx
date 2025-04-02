import { makeStyles } from 'tss-react/mui';
const useStyles = makeStyles({ uniqId: 'popover' })((theme) => ({
  container: {
    padding: theme.spacing(1),
    boxShadow: '3',
    height: '100%',
    borderRadius: `${theme.shape.borderRadius / 2}px`,
    '& .MuiPaper-root': {
      borderRadius: `${theme.shape.borderRadius / 2}px`,
      backgroundColor: theme.palette.common?.grey84,
    },
  },
}));
export default useStyles;

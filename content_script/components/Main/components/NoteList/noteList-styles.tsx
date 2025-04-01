import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'noteList' })((theme) => ({
  root: {
    height: '294px',
    overflow: 'auto',
    boxShadow: 'none',
  },
  container: {
    padding: '2px 8px',
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: `${theme.shape.borderRadius / 2}px`,
  },
  notes: {
    paddingLeft: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '100%',
  },
  notesIcon: {
    marginTop: '4px',
  },
}));

export default useStyles;

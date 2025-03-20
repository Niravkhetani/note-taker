import React from 'react';
import { Card, Box } from '@mui/material';
import NoteStyle from '@/content_script/components/Notes/notes-styles';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '../Alert/Alert';
import SearchNotes from '../SearchNotes/SearchNotes';

const Notes: React.FC = () => {
  const { classes } = NoteStyle();

  const onCloseClicked = () => {
    chrome.runtime.sendMessage({ action: 'close_popup' }); // Send message to background
  };

  return (
    <Card className={classes.root}>
      <Card className={classes.container}>
        <Box className={classes.header}>
          <img
            src={chrome.runtime.getURL('assets/svg/logo-no-background.svg')}
            width={74}
          />
          <Box>
            <SettingsIcon color="customGrey" />
            <CloseIcon onClick={onCloseClicked} color="customGrey" />
          </Box>
        </Box>
        <Alert title="Welcome to Note Taker" />
        <SearchNotes />
      </Card>
    </Card>
  );
};

export default Notes;

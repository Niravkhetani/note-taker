import React, { useState } from 'react';
import { Card, Box } from '@mui/material';
import NoteStyle from '@/content_script/components/Main/notes-styles';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '../Alert/Alert';
import SearchNotes from '../SearchNotes/SearchNotes';
import { Notes as FetchNotes } from '@/content_script/utils/Notes';
import NoteList from './components/NoteList/NoteList';

const Notes: React.FC = () => {
  const { classes } = NoteStyle();
  const [isShowAlert, setShowAlert] = useState(true);

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
        {isShowAlert && (
          <Alert title="Welcome to Note Taker" setShowAlert={setShowAlert} />
        )}

        <SearchNotes />
        <NoteList Notes={FetchNotes} />
      </Card>
    </Card>
  );
};

export default Notes;

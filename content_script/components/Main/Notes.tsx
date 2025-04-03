import React, { useState } from 'react';
import { Card, Box, Button } from '@mui/material';
import NoteStyle from '@/content_script/components/Main/notes-styles';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '../Alert/Alert';
import SearchNotes from '../SearchNotes/SearchNotes';
import { Notes as FetchNotes } from '@/content_script/utils/Notes';
import NoteList from './components/NoteList/NoteList';
import NotePaginate from '../NotePaginate/NotePaginate';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

const Notes: React.FC = () => {
  const { classes } = NoteStyle();
  const [isShowAlert, setShowAlert] = useState(true);
  const [, setResults] = useState();

  const onCloseClicked = () => {
    chrome.runtime.sendMessage({ action: 'close_popup' }); // Send message to background
  };

  return (
    <Card className={classes.root}>
      <Card className={classes.container}>
        <Box className={classes.header}>
          <img
            src={chrome.runtime.getURL('assets/svg/logo-no-background.svg')}
            width={86}
            height={32}
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
        <NotePaginate totalCount={0} perPageCount={0} setResults={setResults} />
        <Box className={classes.buttonWrapper}>
          <Button variant="dangerOutline">clear all</Button>
          <Button variant="primaryOutline">
            <NoteAddIcon className={classes.icon} />
            add
          </Button>
        </Box>
      </Card>
    </Card>
  );
};

export default Notes;

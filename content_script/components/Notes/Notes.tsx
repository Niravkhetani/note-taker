import React, { useEffect, useState } from 'react';
import { Card, Box } from '@mui/material';
import NoteStyle from '@/content_script/components/Notes/notes-styles';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '../Alert/Alert';
import SearchNotes from '../SearchNotes/SearchNotes';

const Notes: React.FC = () => {
  const { classes } = NoteStyle();
  const NotesList = [
    {
      id: 1,
      title: 'This text is not valid S should be capital.',
      description: 'I have attached description1',
    },
    {
      id: 2,
      title: 'How can i make question using this keyword?',
      description: 'I have attached description2',
    },
    {
      id: 3,
      title: 'How to use React zod API?',
      description: 'I have attached description3',
    },
    {
      id: 4,
      title: 'API integration is missing.',
      description: 'I have attached description4',
    },
    {
      id: 5,
      title: 'How to use React Axios API?',
      description: 'I have attached description5',
    },
  ];

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
        {NotesList.map((note) => (
          <Box key={note.id}>{note.title}</Box>
        ))}
      </Card>
    </Card>
  );
};

export default Notes;

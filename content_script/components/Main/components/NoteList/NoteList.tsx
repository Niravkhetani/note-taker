import { Note } from '@/content_script/types/Notes';
import { Box, Card, Divider, Typography, useTheme } from '@mui/material';
import NoteListStyles from './noteList-styles';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popover from '@/content_script/components/Popover/Popover';
import EditIcon from '@mui/icons-material/Edit';
import { Delete } from '@mui/icons-material';
interface NotesProps {
  Notes: Note[];
}

const NoteList = ({ Notes }: NotesProps) => {
  const { classes } = NoteListStyles();
  const theme = useTheme();

  const PopoverContent = () => {
    return (
      <Box className={classes.popoverContainer}>
        <Box className={classes.popoverOptions}>
          <Box className={classes.optionsWrapper}>
            <EditIcon fontSize="medium" id="icon-hover" />
            <Typography variant="options" color={theme.palette.text.primary}>
              Edit
            </Typography>
          </Box>
        </Box>
        <Box className={classes.optionsWrapper}>
          <Delete fontSize="medium" id="icon-hover" />
          <Typography color={theme.palette.text.primary} variant="options">
            Delete
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Card className={classes.root}>
      {Notes.map((note) => (
        <React.Fragment key={note.id}>
          <Box className={classes.container}>
            <img
              src={chrome.runtime.getURL('assets/svg/notes-icon.svg')}
              height={26}
              width={26}
              className={classes.notesIcon}
            />
            <Box className={classes.notes}>
              <Typography
                variant="noteTitle"
                color={theme.palette.primary.main}
              >
                {note.title}
              </Typography>
              <Typography variant="noteDescription">
                {note.description}
              </Typography>
            </Box>
            <Popover
              PopoverOptions={PopoverContent}
              PopoverTrigger={MoreVertIcon}
            />
          </Box>
          <Divider />
        </React.Fragment>
      ))}
    </Card>
  );
};

export default NoteList;

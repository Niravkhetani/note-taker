import { Note } from '@/content_script/types/Notes';
import {
  Box,
  Card,
  Divider,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import NoteListStyles from './noteList-styles';
import React from 'react';
import { default as MuiPopover } from '@mui/material/Popover';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface NotesProps {
  Notes: Note[];
}

const NoteList = ({ Notes }: NotesProps) => {
  const { classes } = NoteListStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Clicked button:', event.currentTarget);
    setTimeout(() => {
      setAnchorEl(event.currentTarget);
    }, 0);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
            <Box>
              <IconButton onClick={handleClick}>
                <MoreVertIcon />
              </IconButton>
              <MuiPopover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Box>
                  <Typography variant="subtitle2" color="customGrey">
                    Edit
                  </Typography>
                  <Typography variant="subtitle2" color="customGrey">
                    Delete
                  </Typography>
                </Box>
              </MuiPopover>
            </Box>
          </Box>
          <Divider />
        </React.Fragment>
      ))}
    </Card>
  );
};

export default NoteList;

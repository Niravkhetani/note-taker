import React, { useState } from 'react';
import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import NoteStyle from '@/content_script/components/Notes/notes-styles';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';

const Notes: React.FC = () => {
  const [note, setNote] = useState<string>('');
  const [notes, setNotes] = useState<string[]>([]);
  const { classes } = NoteStyle();

  const addNote = () => {
    if (note.trim()) {
      setNotes([...notes, note]);
      setNote('');
    }
  };

  const onCloseClicked = () => {
    chrome.runtime.sendMessage({ action: 'close_popup' }); // Send message to background
  };

  return (
    <Card className={classes.root}>
      <Card className={classes.container}>
        <CardContent>
          <Typography variant="headline">📝 Quick Notes123</Typography>
          <Box>
            <SettingsIcon color="customGrey" />
            <CloseIcon onClick={onCloseClicked} color="customGrey" />
          </Box>
          <TextField
            fullWidth
            label="Type your note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ my: 1 }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={addNote}
          >
            Add Note
          </Button>
          <div style={{ marginTop: '10px' }}>
            {notes.map((n, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{ my: 1, padding: 1, background: '#f4f4f4' }}
              >
                {n}
              </Typography>
            ))}
          </div>
        </CardContent>
      </Card>
    </Card>
  );
};

export default Notes;

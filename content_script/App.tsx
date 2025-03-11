import React, { useState } from "react";
import { Button, TextField, Card, CardContent, Typography } from "@mui/material";

const App: React.FC = () => {
    const [note, setNote] = useState<string>("");
    const [notes, setNotes] = useState<string[]>([]);


    const addNote = () => {
        if (note.trim()) {
            setNotes([...notes, note]);
            setNote("");
        }
    };

    const onCloseClicked = () =>{
        chrome.runtime.sendMessage({ action: "close_popup" }); // Send message to background
    }
    
    return (
        <div style={{ position: "fixed", top: "20px", right: "20px", zIndex: 9999 }}>
            <Card sx={{ width: 300, padding: 2, boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h6">📝 Quick Notes</Typography>
                    <button onClick={onCloseClicked}>✖</button>
                    <TextField
                        fullWidth
                        label="Type your note"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        variant="outlined"
                        size="small"
                        sx={{ my: 1 }}
                    />
                    <Button variant="contained" color="primary" fullWidth onClick={addNote}>
                        Add Note
                    </Button>
                    <div style={{ marginTop: "10px" }}>
                        {notes.map((n, index) => (
                            <Typography key={index} variant="body2" sx={{ my: 1, padding: 1, background: "#f4f4f4" }}>
                                {n}
                            </Typography>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default App;

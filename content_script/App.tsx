import { ThemeProvider } from '@mui/material';
import React from 'react';
import theme from './components/ui/theme';
import Notes from './components/Main/Notes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Notes />
    </ThemeProvider>
  );
};

export default App;

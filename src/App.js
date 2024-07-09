// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './appRoutes';

import { ThemeProvider, createTheme } from '@mui/material/styles'; 
const App = () => {
  const theme = createTheme(); 
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <AppRoutes />
    </Router>
  </ThemeProvider>
  );
};

export default App;

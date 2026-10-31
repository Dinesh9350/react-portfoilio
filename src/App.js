import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
};

export default App;

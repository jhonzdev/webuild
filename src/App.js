import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './pages/Pages';
import './App.css';

function App() {
  return (
    <Router>
      <Pages />
    </Router>
  );
}

export default App;

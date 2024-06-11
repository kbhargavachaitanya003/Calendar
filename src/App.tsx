import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calender from './Routers/Calendar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calender />} />
      </Routes>
    </Router>
  );
}

export default App;

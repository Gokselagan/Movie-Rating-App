import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import { Navbar } from './components/navbar.tsx';

export const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<>Home Page</>} />
          <Route path='/rated' element={<>Rated Page</>} />
          <Route path='/auth' element={<>Auth Page</>} />
        </Routes>
      </Router>
    </div>
  );
}



import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import { Navbar } from './components/navbar.tsx';
import { Auth } from './pages/auth/index.tsx';
import { HomePage } from './pages/homepage/index.tsx';

export const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/rated' element={<>Rated Page</>} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
}



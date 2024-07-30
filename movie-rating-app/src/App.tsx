import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { Navbar } from './components/navbar.tsx';
import { Auth } from './pages/auth/index.tsx';
import { HomePage } from './pages/homepage/index.tsx';
import { Movie } from './pages/movie/index.tsx';
import { TvShow } from './pages/tvshow/index.tsx';
import { Rated } from './pages/rated/index.tsx';

export const App = () => {

  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <div className="app">
      <Router>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
        <Routes>
          <Route path='/' element={<Auth setIsLogin={setIsLogin}/>} />
          <Route path='/rated' element={<Rated />} />
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/movie/:id' element={<Movie />}/>
          <Route path='/tvshow/:id' element={<TvShow />}/>
        </Routes>
      </Router>
    </div>
  );
}



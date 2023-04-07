import React from 'react';
import Navbar from './component/Navbar';
import './App.css';
import Home from './component/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Services from './component/pages/Services';
import Products from './component/pages/Products';
import SignUp from './component/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component=
          {Home} />
          <Route path='/services' exact Component=
          {Services} />
          <Route path='/products' exact Component=
          {Products} />
          <Route path='/sign-up' exact Component=
          {SignUp} />
        </Routes>
      </Router> 
    </>
  );
}

export default App;

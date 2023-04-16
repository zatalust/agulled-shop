import React from 'react';
import Navbar from './component/Navbar';
import './App.css';
import Home from './component/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Services from './component/pages/Services';
import Products from './component/pages/Products';
import SignUp from './component/pages/SignUp';
import SunscreamCards from './component/Cardssort/SunscreamCards';
import MakeupCards from './component/Cardssort/MakeupCards';
import SkinCards from './component/Cardssort/SkinCards';
import HairCards from './component/Cardssort/HairCards';
import FoodCards from './component/Cardssort/FoodCards';
import ChildCards from './component/Cardssort/ChildCards';
import About from './component/pages/About';
import Contact from './component/pages/Contact';

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
          <Route path='/about' exact Component=
          {About} />
          <Route path='/sign-up' exact Component=
          {SignUp} />
          <Route path='/childcards' exact Component=
          {ChildCards} />
          <Route path='/foodcards' exact Component=
          {FoodCards} />
          <Route path='/haircards' exact Component=
          {HairCards} />
          <Route path='/skincards' exact Component=
          {SkinCards} />
           <Route path='/sunscreamcards' exact Component=
          {SunscreamCards} />
           <Route path='/makeupcards' exact Component=
          {MakeupCards} />
          <Route path='/contact' exact Component=
          {Contact} />

        </Routes>
      </Router> 
    </>
  );
}

export default App;

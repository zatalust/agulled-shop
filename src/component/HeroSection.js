import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>BEST PRODUCTS</h1>
      <p>What are you Waiting for?</p>
      <div className='hero-btns'>
        <Button 
        className='btns' 
        buttonStyle='btn--primary'
        buttonSize='btn--large'>
         SHOW OUR PRODUCTS 
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
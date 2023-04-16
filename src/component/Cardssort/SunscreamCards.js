import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function SunscreamCards() {
  return (
    <div className='sunscreamcards'>
      <h1>Sunscreen cream department</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Child care'
              path='/products'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Makeup'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Skin care'
              path='/products'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Hair care'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Food Supplements'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Sunscreen cream'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SunscreamCards;
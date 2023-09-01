import React from 'react';
import Text from '../text/Text';
import { Link } from 'react-router-dom';
import './EmptyCart.scss';

const EmptyCart = () => {
  return (
    <div className='today-emptycart'>
      <div className="empty-text">
        <Text tag={'h1'}>
        Tu carrito esta vacío, 
          <Link to={'/productos'}>¡visita nuestros productos!</Link>
        </Text>
      </div>
      <div className="loader">
        <div className="box box0">
          <div></div>
        </div>
        <div className="box box1">
          <div></div>
        </div>
        <div className="box box2">
          <div></div>
        </div>
        <div className="box box3">
          <div></div>
        </div>
        <div className="box box4">
          <div></div>
        </div>
        <div className="box box5">
          <div></div>
        </div>
        <div className="box box6">
          <div></div>
        </div>
        <div className="box box7">
          <div></div>
        </div>
        <div className="ground">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
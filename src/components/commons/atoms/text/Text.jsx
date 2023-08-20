import React from 'react';
import './Text.scss';

const Text = ({tag, children, className, onClick, color, weight }) => {
  switch(tag){
  case 'h1':
    return <h1 onClick={onClick} className={`today-text ${tag} ${className} ${color} ${weight}`}>{children}</h1>;
  case 'h2':
    return <h2 onClick={onClick} className={`today-text ${tag} ${className} ${color} ${weight}`}>{children}</h2>;
  case 'h3':
    return <h3 onClick={onClick} className={`today-text ${tag} ${className} ${color} ${weight}`}>{children}</h3>;
  case 'h4':
    return <h4 onClick={onClick} className={`today-text ${tag} ${className} ${color} ${weight}`}>{children}</h4>;
  case 'h5':
    return <h5 onClick={onClick} className={`today-text ${tag} ${className} ${color} ${weight}`}>{children}</h5>;
  case 'h6':
    return <h6 onClick={onClick} className={`today-text ${tag} ${className} ${color} ${weight}`}>{children}</h6>;
  case 'p':
    return <p onClick={onClick} className={`today-text ${tag} ${className} ${color} ${weight}`}>{children}</p>;
  case 'span':
    return <span onClick={onClick} className={`today-text ${tag} ${className} ${color} ${weight}`}>{children}</span>;
  default:
    return <p onClick={onClick} className={`today-text p ${className} ${color} ${weight}`}>{children}</p>;
  }
};

export default Text;
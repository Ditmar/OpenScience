import React, { useState } from 'react';
import './BurgerButton.scss';

const BurgerButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button className={`burger-button ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <div className="burger-line"></div>
      <div className="burger-line"></div>
      <div className="burger-line"></div>
    </button>
  );
}

export default BurgerButton;

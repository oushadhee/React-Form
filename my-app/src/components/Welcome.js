import React from 'react';
import { useNavigate } from 'react-router-dom';
import './welcome.css';

export default function Welcome() {
  const navigate = useNavigate();

  const goToFirstPage = () => {
    navigate('/first-page');
  };

  const goToSecondPage = () => {
    navigate('/second-page');
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <header className="header">
        <h1><b> Join the team</b> </h1>
        
        <div className="header-buttons">
       
          <button onClick={goToFirstPage}>Welcome Screen</button>
          <button onClick={goToSecondPage}>Enter your Email</button>
          <button onClick={goToHome}>Home</button>
          
          <div> <h3>Contact Us</h3></div>
        </div>
        
      </header>
     
    </div>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  const goToFirstPage = () => {
    navigate('/first-page');
  };

  const goToSecondPage = () => {
    navigate('/second-page');
  };

  return (
    <div>
      <button onClick={goToFirstPage}>Welcome Screen</button>
      <button onClick={goToSecondPage}>Enter your Email</button>
    </div>
  );
}

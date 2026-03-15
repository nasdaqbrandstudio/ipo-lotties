import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationData, setAnimationData] = useState(null);

  const lottieUrls = [
    '/lotties/holding-stage.json',
    '/lotties/display-period.json',
    '/lotties/open-trading.json',
    '/lotties/now-trading.json',
    '/lotties/pre-launch.json'
  ];

  useEffect(() => {
    fetch(lottieUrls[currentIndex])
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading Lottie:', error));
  }, [currentIndex]);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % lottieUrls.length);
  };

  return (
    <div className="App" onClick={handleClick}>
      <div className="lottie-container">
        {animationData && (
          <Lottie 
            animationData={animationData} 
            loop={true}
          />
        )}
      </div>
    </div>
  );
}

export default App;

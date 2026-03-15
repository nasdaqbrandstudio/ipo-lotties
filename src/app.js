import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationData, setAnimationData] = useState(null);

  const lottieUrls = [
    'https://raw.githubusercontent.com/nasdaqbrandstudio/ipo-lotties/main/1_IPO_2024_Starburst_v2_Green.json',
    'https://raw.githubusercontent.com/nasdaqbrandstudio/ipo-lotties/main/2_IPO_2024_Mosaic_v2_Green.json',
    'https://raw.githubusercontent.com/nasdaqbrandstudio/ipo-lotties/main/3_IPO_2024_Rings_v2_Green.json',
    'https://raw.githubusercontent.com/nasdaqbrandstudio/ipo-lotties/main/4_IPO_2024_Squares_v2_Green.json',
    'https://raw.githubusercontent.com/nasdaqbrandstudio/ipo-lotties/main/5_IPO_2024_Triangles_v2_Green.json'
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

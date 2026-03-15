import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import './App.css';

function App() {
  const [lottieFiles, setLottieFiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const lottieUrls = [
    'https://nasdaqbrandstudio.github.io/ipo-lotties/lotties/holding-stage.json',
    'https://nasdaqbrandstudio.github.io/ipo-lotties/lotties/display-period.json',
    'https://nasdaqbrandstudio.github.io/ipo-lotties/lotties/open-trading.json',
    'https://nasdaqbrandstudio.github.io/ipo-lotties/lotties/now-trading.json',
    'https://nasdaqbrandstudio.github.io/ipo-lotties/lotties/pre-launch.json'
  ];

  useEffect(() => {
    const fetchLottieFiles = async () => {
      try {
        const fetchedFiles = await Promise.all(
          lottieUrls.map(url => fetch(url).then(res => res.json()))
        );
        setLottieFiles(fetchedFiles);
        setLoading(false);
      } catch (err) {
        setError('Failed to load animations');
        setLoading(false);
        console.error('Error loading Lottie files:', err);
      }
    };

    fetchLottieFiles();
  }, []);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % lottieFiles.length);
  };

  if (loading) {
    return (
      <div className="App">
        <div className="loading">Loading animations...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>IPO Lotties</h1>
      <div className="lottie-container" onClick={handleClick}>
        <Lottie
          animationData={lottieFiles[currentIndex]}
          loop={true}
          autoplay={true}
          style={{ width: '100%', height: '100%', cursor: 'pointer' }}
        />
      </div>
      <p className="instructions">
        Click to cycle through animations ({currentIndex + 1} of {lottieFiles.length})
      </p>
    </div>
  );
}

export default App;

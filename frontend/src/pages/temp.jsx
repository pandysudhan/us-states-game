import React, { useState, useEffect } from 'react';

const AnimatedPath = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component mounts
    setIsAnimating(true);

    // You can also add additional conditions to control when the animation should start
    // For example, trigger the animation when a button is clicked or when a specific prop changes
    // if (someCondition) {
    //   setIsAnimating(true);
    // }

    // Cleanup function to stop the animation when the component unmounts
    return () => {
      setIsAnimating(false);
    };
  }, []);

  return (
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 80 Q 95 10 180 80" fill="none" stroke="black">
        {isAnimating && (
          <animate
            attributeName="d"
            dur="3s"
            repeatCount="indefinite"
            values="M10 80 Q 95 10 180 80; M10 80 Q 95 150 180 80; M10 80 Q 95 10 180 80"
          />
        )}
      </path>
    </svg>
  );
};

const App = () => {
  return (
    <div>
      <h2>Animated Path Example</h2>
      <AnimatedPath />
    </div>
  );
};

export default App;
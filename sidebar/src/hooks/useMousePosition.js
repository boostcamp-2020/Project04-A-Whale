import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ posX: null, posY: null });

  const updateMousePosition = (e) => {
    setMousePosition({ posX: e.clientX, posY: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;

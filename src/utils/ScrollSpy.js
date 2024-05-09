import React, { useEffect } from 'react';

function ScrollSpy() {
  useEffect(() => {
    const handleScroll = () => {
      const contentContainers = document.querySelectorAll('.content-container');

      contentContainers.forEach(container => {
        const { top, bottom } = container.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;
        if (isVisible) {
          container.classList.add('active');
        } else {
          container.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // This component doesn't render anything
}

export default ScrollSpy;

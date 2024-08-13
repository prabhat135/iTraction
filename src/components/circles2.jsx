// src/components/Header.js
import React, { useEffect } from 'react';

import gsap from 'gsap';
function Circles2() {

  useEffect(() => {
    const bubbles = document.querySelectorAll('.bubble');

    bubbles.forEach(bubble => {
      bubble.addEventListener('mouseover', () => {
        gsap.to(bubble, { scale: 1.7, duration: 0.3 });
        bubbles.forEach(b => {
          if (b !== bubble) {
            gsap.to(b, { scale: 0.8, duration: 0.3 });
          }
        });
      });

      bubble.addEventListener('mouseout', () => {
        gsap.to(bubbles, { scale: 1, duration: 0.3 });
      });
    });
  }, []);



  return (
    <div >
    
    <div className="ourservices-bubbles">
    <div className="bubble bubble1"></div>
        <div id="bubble1"  className="bubble bubble2"></div>
        <div id="bubble2" className="bubble bubble3"></div>
        <div id="bubble3" className="bubble bubble4"></div>
        <div id="bubble4" className="bubble bubble5"></div>
    </div>
  </div>
  );
}

export default Circles2;

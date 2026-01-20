'use client';

import { useEffect, useState } from 'react';

const NAME = 'TAHA RAOUF';
const ROLE = 'Full-Stack Developer';
const LOCATION = '1337 Rabat • Morocco';

export function Intro() {
  const [show, setShow] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Hide body overflow during intro
    document.body.style.overflow = 'hidden';

    // Show content
    const showTimer = setTimeout(() => setShow(true), 300);
    
    // Start fade out animation
    const fadeTimer = setTimeout(() => setFadeOut(true), 2800);
    
    // Remove intro from DOM and show main content
    const removeTimer = setTimeout(() => {
      const intro = document.querySelector('.intro-wrapper');
      if (intro) {
        intro.remove();
      }
      // Restore body overflow and trigger content visibility
      document.body.style.overflow = 'auto';
      document.body.classList.add('intro-finished');
    }, 3500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div className={`intro-wrapper ${fadeOut ? 'fade-out' : ''}`}>
      <div className="intro-content">
        {/* Terminal prompt */}
        <div className="intro-prompt">
          <span className="intro-prompt-symbol">{'>'}</span>
          <span className="intro-prompt-text">initializing...</span>
        </div>

        {/* Name with pixel effect */}
        <h1 className="intro-name">
          {NAME.split('').map((char, i) => (
            <span
              key={i}
              className="intro-letter"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        {/* Role */}
        <div className={`intro-role ${show ? 'show' : ''}`}>
          <div className="intro-divider" />
          <p className="intro-role-text">{ROLE}</p>
          <div className="intro-divider" />
        </div>

        {/* Location tag */}
        {/* <p className={`intro-location ${show ? 'show' : ''}`}>
          <span className="intro-location-icon">📍</span>
          {LOCATION}
        </p> */}

        {/* Loading bar */}
        <div className={`intro-loading ${show ? 'show' : ''}`}>
          <div className="intro-loading-bar" />
        </div>
      </div>
    </div>
  );
}

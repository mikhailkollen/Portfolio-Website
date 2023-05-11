import { useEffect, useRef } from 'react';
import { gsap, Power0 } from 'gsap';

import './HorizontalTextMarquee.css';

const marqueeTexts = [
  'React',
  'JavaScript',
  'Redux',
  'TypeScript',
  'HTML',
  'CSS',
  'Git',
  'Styled Components',
  'Node.js',
  'MongoDB',
];

const HorizontalTextMarquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });
    const marqueeContainer = marqueeRef.current;

    timeline.fromTo(
      marqueeContainer,
      { x: '0%' },
      { x: '-100%', duration: 10, ease: Power0.easeNone },
      0
    );

    timeline.timeScale(0.5);

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className="horizontal-technologies-container">
      <div className="marquee-container" ref={marqueeRef}>
        {marqueeTexts.map((text, index) => (
        <div
          key={text}
          className={`horizontal-technology-text text${index % 2 === 0 ? 1 : 2}`}
          style={{ width: `${100 / marqueeTexts.length}%` }}
        >
          <p>{text}</p>
        </div>
      ))
      }
      {marqueeTexts.map((text, index) => (
        <div
          key={text}
          className={`horizontal-technology-text text${index % 2 === 0 ? 1 : 2}`}
          style={{ width: `${100 / marqueeTexts.length}%` }}
        >
          <p>{text}</p>
        </div>
      ))
      }
      </div>
    </div>
  );
};

export default HorizontalTextMarquee;
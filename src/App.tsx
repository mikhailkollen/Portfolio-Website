import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage/HomePage'
import HorizontalTextMarquee from './components/HorizontalTextMarquee/HorizontalTextMarquee'
import InfiniteLooper from './components/InfiniteLooper/InfiniteLooper'
import WhiteCircleIcon from './assets/WhiteCircleIcon'
import AboutPage from './components/AboutPage/AboutPage'
import ContactPage from './components/ContactPage/ContactPage'

function App() {
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
  return (
    <>
      <HomePage></HomePage>
      <InfiniteLooper speed={30} direction="left">
        <div className="contentBlock">
          {marqueeTexts.map((text, index) => (
            <>
              <div className='marquee-container' key={text+index}>
                <p 
                  className={`horizontal-technology-text text${index % 2 === 0 ? 1 : 2}`}
                  style={{ width: `${100 / marqueeTexts.length}%` }}>{text}</p>

              </div>
              <WhiteCircleIcon key={index}></WhiteCircleIcon>
            </>
          ))}
        </div>
      </InfiniteLooper>
      <AboutPage />
      <ContactPage></ContactPage>
    </>
  )
}

export default App

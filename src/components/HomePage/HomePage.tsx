import React from 'react'
import Logo from '../../assets/Logo'
import './HomePage.css'
import {NavLink} from 'react-router-dom'
import WhiteCircleIcon from '../../assets/WhiteCircleIcon'
import Spline from '@splinetool/react-spline';


const HomePage = () => {
  return (
    <section className='home-page'>
     <header className='home-page-header'>
       <Logo/>
       <div className='header-links'>
         <a className="nav-link" href="#about-me">About me</a>
          <a className="nav-link" href="#projects">Projects</a>
          <a className="nav-link" href="#contacts">Contacts</a>
       </div>
     </header>
     <h1 className='heading-name'>MIKHAIL <br/> KOLLEN</h1>
     <div className='home-page-info'>
       <div className="info-boxex-container">
        <div className="info-box">
          <WhiteCircleIcon/>
          <p className='info-box-title'>Frontend Developer</p>
        </div>
        <div className="info-box">
          <WhiteCircleIcon/>
          <p className='info-box-title'>Tbilisi, Georgia</p>
        </div>
       </div>
       <span className='horizontal-line'></span>
     </div>
       <Spline className="spline-container" scene="https://prod.spline.design/mrm3q2O4nROI3clV/scene.splinecode" />
       
     
    </section>
  )
}

export default HomePage
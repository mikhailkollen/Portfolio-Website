import TelegramIcon from '../../assets/TelegramIcon'
import LinkedInIcon from '../../assets/LinkedInIcon'
import GitHubIcon from '../../assets/GitHubIcon'
import WhatsAppIcon from '../../assets/WhatsAppIcon'
import emailjs from "@emailjs/browser"
import { useRef } from 'react'
import Spline from '@splinetool/react-spline';


import './ContactPage.css'

const ContactPage = () => {
  const form: any = useRef(null)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    emailjs.sendForm('service_u3rx4c4', 'template_69w5b9k', form.current, 'R4Nbqae3k5MLMhuiE')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <footer className='contact-page' id='contacts'>
      <div className="contact-page-details">
        <h5 className='contact-page-heading'>
          CONTACT ME
        </h5>
        <h6 className='contact-page-email-title'>
          Email
        </h6>
        <a className='email-address' title='Send email to mikhailkollen@gmail.com' href="mailto:mikhailkollen@gmail.com">mikhailkollen@gmail.com
        </a>
        <div className="socials">
          <a href="https://t.me/MikhailKollen" title='Add on Telegram' target='_blank' className="socials-link">
            <TelegramIcon></TelegramIcon>
          </a>
          <a href="https://www.linkedin.com/in/mikhail-kollen/" title='Add on LinkedIn' target='_blank' className="socials-link">
            <LinkedInIcon></LinkedInIcon>
          </a>
          <a href="https://github.com/mikhailkollen" target='_blank' title='View GitHub' className="socials-link">
            <GitHubIcon></GitHubIcon>
          </a>
          <a href="https://wa.me/995551175472" target='_blank' title='Contact via WhatsApp' className="socials-link">
            <WhatsAppIcon></WhatsAppIcon>
          </a>
        </div>
        <p>Or fill in the contact form</p>
        <form onSubmit={handleSubmit} ref={form} className='contact-form'>
          <input type="text" placeholder='Name' name='user_name' className='contact-page-input'></input>
          <input type="email" placeholder='Email'
            name='user_email'
            className='contact-page-input'></input>
          <textarea placeholder='Message'
            name='message'
            className='contact-page-input'></textarea>
          <button type="submit" value='Send' className='contact-page-input contact-page-submit
         '>Send</button>
        </form>
      </div>
      <Spline style={{width: "50%"}} className='contact-page-spline-container' scene="https://prod.spline.design/cHg4pwIllWPFYbgr/scene.splinecode" />
    </footer>
  )
}

export default ContactPage
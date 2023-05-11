import './AboutPage.css'
import EightyPercentBar from '../../assets/EightyPercentBar'
import NinetyPercentBar from '../../assets/NinetyPercentBar'
import SixtyPercentBar from '../../assets/SixtyPercentBar'


const AboutPage = () => {
  return (
    <section className='about-page'>
      <div className="about-page-info-container">
        <div className="about-page-info">
          <h2 className='about-page-heading'>
            ABOUT ME
          </h2>
          <p className='about-page-text'>
            I am a career changer with over 4 years of experience in teaching, client service, and support. At the moment
            I am focused on acquiring a Frontend Developer position. I have created several personal projects, including a
            serverless e-commerce website and multiple SPAs using React.js. It allowed me to become confident in building
            applications using Vanilla JavaScript and React.js.
            Currently, I am a Front-end Developer Intern at Quantori, where I utilize my skills in Redux.js, TypeScript,
            JavaScript, and React.js to create responsive and user-friendly web applications. I also have a wide experience in
            project management and problem-solving.
            I am committed to continuous learning and seeking opportunities to expand my knowledge and apply my new
            skills.
          </p>
        </div>
        <div className="about-page-skills">
          <span>
            <h3 className='skills-title'>
              JAVASCRIPT
            </h3>
            <EightyPercentBar></EightyPercentBar>
          </span>
          <span>
            <h3 className='skills-title'>
              HTML/CSS
            </h3>
            <NinetyPercentBar></NinetyPercentBar>
          </span>
          <span>
            <h3 className='skills-title'>
              REACT
            </h3>
            <SixtyPercentBar></SixtyPercentBar>
          </span>
        </div>
      </div>
      <div className="about-page-projects">
        <a href='https://github.com/mikhailkollen/react-ecommerce-project' target='_blank' className="project-title">E-STORE</a>
        <a href='https://github.com/mikhailkollen/react-to-do-app' target='_blank' className="project-title">TO-DO APP</a>
        <a href='https://github.com/mikhailkollen/react-ip-address-tracker-app' target='_blank' className="project-title">IP-TRACKER</a>
        <a href='https://github.com/mikhailkollen/Calculator-Project' target='_blank' className="project-title">CALCULATOR</a>
      </div>
    </section>
  )
}

export default AboutPage
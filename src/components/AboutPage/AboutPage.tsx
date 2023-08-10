import "./AboutPage.css";
import EightyPercentBar from "../../assets/EightyPercentBar";
import NinetyPercentBar from "../../assets/NinetyPercentBar";
import SixtyPercentBar from "../../assets/SixtyPercentBar";

const AboutPage = () => {
  return (
    <section className="about-page" id="about-me">
      <div className="about-page-info-container">
        <div className="about-page-info">
          <h2 className="about-page-heading">ABOUT ME</h2>
          <p className="about-page-text">
            I am a seasoned Front-end Developer with over a year of hands-on
            experience in Web Development. Through this time, I have conceived
            and executed several personal projects. Notably, I crafted a
            serverless e-commerce website using JS, React, Redux, and more,
            alongside a protein search app that utilizes authentication and
            dynamic application state, built with TS, React, Redux, and
            Firebase, among other technologies.{" "}
          </p>{" "}
          <p className="about-page-text">
            {" "}
            My proficiency extends to crafting multiple SPAs utilizing React.js,
            thus solidifying my confidence in working with Vanilla JavaScript,
            TypeScript, React.js, and Redux. Currently, I thrive as a Software
            Engineer at Quantori, a prominent player in the Life Science and
            Healthcare sector. Here, I contribute by enhancing the Front-end
            aspects of client products, ensuring they excel in adaptability,
            responsiveness, and scalability.{" "}
          </p>{" "}
          <p className="about-page-text">
            {" "}
            My journey includes valuable experience in teaching and intricate
            problem-solving. I am unceasingly dedicated to advancing my
            knowledge and skill set, seeking continuous learning and
            opportunities to apply my evolving expertise.
          </p>
        </div>
        <div className="about-page-skills">
          <span>
            <h3 className="skills-title">JAVASCRIPT</h3>
            <EightyPercentBar></EightyPercentBar>
          </span>
          <span>
            <h3 className="skills-title">HTML/CSS</h3>
            <NinetyPercentBar></NinetyPercentBar>
          </span>
          <span>
            <h3 className="skills-title">REACT</h3>
            <SixtyPercentBar></SixtyPercentBar>
          </span>
        </div>
      </div>
      <div className="about-page-projects" id="projects">
        <a
          href="https://github.com/mikhailkollen/react-ecommerce-project"
          target="_blank"
          className="project-title"
        >
          E-STORE
        </a>
        <a
          href="https://github.com/mikhailkollen/react-to-do-app"
          target="_blank"
          className="project-title"
        >
          TO-DO APP
        </a>
        <a
          href="https://github.com/mikhailkollen/react-ip-address-tracker-app"
          target="_blank"
          className="project-title"
        >
          IP-TRACKER
        </a>
        <a
          href="https://github.com/mikhailkollen/Calculator-Project"
          target="_blank"
          className="project-title"
        >
          CALCULATOR
        </a>
      </div>
    </section>
  );
};

export default AboutPage;

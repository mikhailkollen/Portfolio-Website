import Logo from "../../assets/Logo";

import WhiteCircleIcon from "../../assets/WhiteCircleIcon";
import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import DownloadIcon from "../../assets/DownloadIcon";
import { toast } from "react-toastify";
import "./HomePage.css";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navLinkColor, setNavLinkColor] = useState("#fff");

  const notifyOnDownload = () => {
    toast.info("Downloading CV...", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  useEffect(() => {
    if (window.innerWidth < 700) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 700) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    setIsMenuOpen(false);
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 300 && window.innerWidth < 700) {
      setNavLinkColor("#130a25");
    } else {
      setNavLinkColor("#fff");
    }
  };

  return (
    <section className="home-page">
      <header className="home-page-header">
        <Logo />
        {isMobile && (
          <Hamburger color="#fff" toggled={isMenuOpen} toggle={setIsMenuOpen} />
        )}
        <div
          className={`header-links${isMobile ? "-mobile" : ""}`}
          style={{
            transform: isMobile
              ? isMenuOpen
                ? "translateX(0)"
                : "translateX(100%)"
              : undefined,
          }}
        >
          <Link
            className="nav-link"
            to="about-me"
            smooth={true}
            duration={300}
            offset={-100}
            style={{ color: navLinkColor }}
          >
            About me
          </Link>
          <Link
            className="nav-link"
            to="projects"
            smooth={true}
            duration={300}
            offset={-100}
            style={{ color: navLinkColor }}
          >
            Projects
          </Link>
          <Link
            className="nav-link"
            to="contacts"
            smooth={true}
            duration={300}
            offset={-100}
            style={{ color: navLinkColor }}
          >
            Contacts
          </Link>
          {/* Download CV Link */}
          <RouterLink
            className="nav-link"
            to="/files/cv-mikhail-kollen.pdf"
            download="cv-mikhail-kollen.pdf"
            target="_blank"
            rel="noreferrer"
            style={{ color: navLinkColor }}
            onClick={notifyOnDownload}
          >
            CV <DownloadIcon color={navLinkColor} />
          </RouterLink>
        </div>
      </header>
      <h1 className="heading-name">
        MIKHAIL <br /> KOLLEN
      </h1>
      <div className="home-page-info">
        <div className="info-boxex-container">
          <div className="info-box">
            <WhiteCircleIcon />
            <p className="info-box-title">Frontend Developer</p>
          </div>
          <div className="info-box">
            <WhiteCircleIcon />
            <p className="info-box-title">Tbilisi, Georgia</p>
          </div>
        </div>
        <span className="horizontal-line"></span>
      </div>
      <Spline
        className="spline-container"
        scene="https://prod.spline.design/mrm3q2O4nROI3clV/scene.splinecode"
      />
    </section>
  );
};

export default HomePage;

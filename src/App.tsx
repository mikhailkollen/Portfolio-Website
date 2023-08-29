import HomePage from "./components/HomePage/HomePage";
import SkillsHorizontalLoop from "./components/SkillsHorizontalLoop/SkillsHorizontalLoop";

import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <ToastContainer />
      <HomePage />
      <SkillsHorizontalLoop />
      <AboutPage />
      <ContactPage />
    </>
  );
}

export default App;

import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import SkillsHorizontalLoop from "./components/SkillsHorizontalLoop/SkillsHorizontalLoop";

import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";

function App() {
  return (
    <>
      <HomePage />
      <SkillsHorizontalLoop />
      <AboutPage />
      <ContactPage />
    </>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbarContainer/NavbarContainer"
import Landing from "./components/landing/Landing"
import AboutMe from "./components/aboutMe/AboutMe"
import ProjectsContainer from "./components/projects/ProjectsContainer"
import SkillsContainer from "./components/tecnologies/SkillsContainer"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"




function App() {
  return (
    <div className="main">
      <Navbar/>
      <Landing/>
      <AboutMe/>
      <ProjectsContainer/>
      <SkillsContainer/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

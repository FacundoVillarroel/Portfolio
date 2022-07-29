import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar/Navbar"
import Landing from "./components/landing/Landing"
import AboutMe from "./components/aboutMe/AboutMe"
import Projects from "./components/projects/Projects"
import Tecnologies from "./components/tecnologies/Tecnologies"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"




function App() {
  return (
    <div className="main">
      <Navbar/>
      <Landing/>
      <AboutMe/>
      <Projects/>
      <Tecnologies/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;


import './index.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portofolio';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import SocialLinks from './Components/SocialLinks';
function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About />
      <Portfolio/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </div>
  )
}

export default App;

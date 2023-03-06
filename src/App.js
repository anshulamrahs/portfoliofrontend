
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Project from './components/project/Project';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Project/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

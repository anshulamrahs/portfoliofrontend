
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Project from './components/project/Project';
import Footer from './components/footer/Footer';
import Portfolio from './components/portfolio/Portfolio';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Project/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

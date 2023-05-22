
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Portfolio from './components/portfolio/Portfolio';
import Design from './components/Design';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/> 
      <Footer/>
    </div>
  );
}

export default App;

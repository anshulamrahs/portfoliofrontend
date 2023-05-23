
import "./home.scss"
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Sphere, MeshDistortMaterial, } from '@react-three/drei';
import Typewriter from 'typewriter-effect';
import HTML from '../assets/html.svg'
import CSS from '../assets/css.png'
import Reac from '../assets/reacts.svg'
import JS from '../assets/jasd.png'
import SASS from '../assets/sass.webp'
import TAIL from '../assets/tail.avif'
import Hand from '../assets/hand.jpeg'
import CV from '../assets/anshulresume.pdf'
import ASK from '../assets/rickg.png'
import Design from "../Design";



//import Desk from '../assets/crp.jpeg'

//import Person from '../assets/anshul.jpeg'

const Home = () => {

  return (
    <div className='container' id="home">
      <Design/>
      <div className="left">
        <div className="orangename">
      <h5>👋  My Name is Anshul and i am a Freelance</h5>
      <h1>Frontend Developer</h1>
      <div className="text">

      <Typewriter
        options={{autoStart: true, loop: true,
        delay: 40,
        strings:[
          "I'm Based in India 📍",
          " A Tech Enthusiast",
          
        ]
        }}
        />
      </div>
      
      <a href={CV} download="Anshul sharma Resume" >
       <button className="btn">Download CV</button>
       <a href = "mailto: anshulamrahs@gmail.com">
       <button className="btn">@anshulamrahs</button>
       </a>
      </a>
        </div>
      <div className="skills">
        <p>Stack</p>
        <div className="logos">
          <ul className="ulI">
            <li><img className="lImg" src={HTML} alt="" /></li>
            <li><img className="lImg" src={CSS} alt="" /></li>
            <li><img className="lImg" src={Reac} alt="" /></li>
            <li><img className="lImg" src={JS} alt="" /></li>
            <li><img className="lImg" src={SASS} alt="" /></li>
            <li><img className="lImg" src={TAIL} alt="" /></li>
          </ul>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Home
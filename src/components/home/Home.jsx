
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
import CV from '../assets/resumeV.pdf'
import ASK from '../assets/rickg.png'


//import Desk from '../assets/crp.jpeg'

//import Person from '../assets/anshul.jpeg'

const Home = () => {

  return (
    <div className='container' id="home">
      <div className="left">
      <span className='orangename'>Hi, I'm Anshul. A Front-end Dev Based In India<img className='ico' src={Hand} alt=""/></span>
      <div className="text">
        <Typewriter
        options={{autoStart: true, loop: true,
        delay: 40,
        strings:[
          "I'm a Front-end Developer",
          " A Tech Enthusiast",
          
        ]
        }}
        />
        
      </div>
      <a href={CV} download="Anshul sharma Resume" >
       <button className="btn">Download CV</button>
      </a>
      <div className="skills">
        <p>Tech Stack    |</p>
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
      <div className="right">
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate={true}/>
          <ambientLight intensity={1}/>
          <directionalLight position={[1,3,2,1]}/>
          <Sphere args={[1,100,200]} scale={1.4}>
            <MeshDistortMaterial
            color= "#394867"
            attach="material"
            distort={0.4}
            speed={4}
            />
          </Sphere>
        </Canvas>
      <img src={ASK} alt="me"/> 
      </div>
    </div>
  )
}

export default Home
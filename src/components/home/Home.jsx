
import "./home.scss"
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Sphere, MeshDistortMaterial, } from '@react-three/drei';
import Typewriter from 'typewriter-effect';
import CV from '../assets/cv.pdf'


//import Desk from '../assets/crp.jpeg'

//import Person from '../assets/anshul.jpeg'

const Home = () => {

  return (
    <div className='container'>
      <div className="left">
      <span className='orangename'>Hello!, I'm Anshul. A Full-stack Developer Based In India<NorthEastIcon className='ico'/></span>
      <div className="text">
        <Typewriter
        options={{autoStart: true, loop: true,
        delay: 40,
        strings:[
          "I'm a Full-Stack Developer",
          " A Tech Enthusiast",
          
        ]
        }}
        />
        
      </div>
      
      <span className='para'>-I Help Building Web-design That Work!</span>
      <div className="but">
        <a href={CV} className='talk' download >Download CV</a><a href="#contact"  className='talk talks'>Let's talk</a>
        </div>
      </div>
      <div className="right">
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate={true}/>
          <ambientLight intensity={1}/>
          <directionalLight position={[4,3,2]}/>
          <Sphere args={[1,100,200]} scale={1.6}>
            <MeshDistortMaterial
            color= "black"
            attach="material"
            distort={0.5}
            speed={2}
            />
          </Sphere>
        </Canvas>
      {/*<img src={Desk} alt="me"/> */}
      </div>
    </div>
  )
}

export default Home
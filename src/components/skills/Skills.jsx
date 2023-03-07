import React from 'react'
import './skills.scss';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Sphere, MeshDistortMaterial, } from '@react-three/drei';

const Skills = () => {
  return (
    <div className='serve'>
      <div className="left">
        <div className="icons">
          <article>
        <VerifiedIcon className='icon'/>
        <h2>HTML5</h2>
        <span>Expert</span>
          </article>
          <article>
        <VerifiedIcon className='icon'/>
        <h2>CSS3</h2>
        <span>Expert</span>
          </article>
          <article>
        <VerifiedIcon className='icon'/>
        <h2>React Js</h2>
        </article>
        <span>Expert</span>
          <article>
        <VerifiedIcon className='icon'/>
        <h2>Javascript</h2>
        <span>Intermediate</span>
          </article>
          <article>
        <VerifiedIcon className='icon'/>
        <h2>SCSS</h2>
        <span>Expert</span>
          </article>
          <article>
        <VerifiedIcon className='icon'/>
        <h2>Github</h2>
        <span>Expert</span>
          </article>
        </div>
      </div>
      <div className="right">
      <Canvas>
          <OrbitControls enableZoom={false} autoRotate={true}/>
          <ambientLight intensity={1}/>
          <directionalLight position={[3,2,1]}/>
          <Sphere args={[1,100,200]} scale={1.8}>
            <MeshDistortMaterial
            color= "#562194"
            attach="material"
            distort={0.5}
            speed={2}
            />
          </Sphere>
        </Canvas>
      </div>
    </div>
  )
}

export default Skills
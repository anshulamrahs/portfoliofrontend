import React from 'react'
import './project.scss'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CodeIcon from '@mui/icons-material/Code';
import AnimationIcon from '@mui/icons-material/Animation';

const Project = () => {
  return (
    <div className='projects'>
      <div className="desc">
        <h1 className='title'>Services That we Provide</h1>
        <span className='des'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto nemo cumque delectus ea hic minima, voluptates velit voluptatem doloribus odit corporis exercitationem similique? Deserunt magni natus eligendi suscipit quos!</span>
      </div>
      <div className="points">
        <div className="pointList">
        <LibraryBooksIcon/>
        <h1 className='dd'>Design</h1>
        <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis architecto non quo deserunt veritatis sapiente dolor beatae aliquam cumque voluptatum necessitatibus nisi magni quaerat voluptatibus maiores repudiandae, ducimus harum ipsam.</small>
        </div>
        <div className="pointList">
        <CodeIcon/>
        <h1 className='dd'>Development</h1>
        <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis architecto non quo deserunt veritatis sapiente dolor beatae aliquam cumque voluptatum necessitatibus nisi magni quaerat voluptatibus maiores repudiandae, ducimus harum ipsam.</small>
        </div>
        <div className="pointList">
        <AnimationIcon/>
        <h1 className='dd'>Marketing</h1>
        <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis architecto non quo deserunt veritatis sapiente dolor beatae aliquam cumque voluptatum necessitatibus nisi magni quaerat voluptatibus maiores repudiandae, ducimus harum ipsam.</small>
        </div>
      </div>
    </div>
  )
}

export default Project
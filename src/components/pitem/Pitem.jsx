import './pitem.scss';
import Webx from '../assets/netf.png'

const Pitem = () => {


  return (
    <div className='pitem'>
    <img className='img'
    src={Webx} alt='' />
    <div className="dess">
    <span className='desc'><a href='_blank'>Netflix UI clone Using React Js</a></span>
    <div className="btn">
    <a href='https://github.com/anshulamrahs/netflixpublished' className='talk'>Github</a><a href='https://netflixuiclonex.netlify.app/' className='talk talks'>Demo</a>
    </div>
    </div> 
    </div>
    //
  )
}

export default Pitem
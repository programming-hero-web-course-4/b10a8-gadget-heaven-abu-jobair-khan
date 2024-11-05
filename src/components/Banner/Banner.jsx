import bnrImg from '../../assets/banner.jpg';
import './Banner.css';

const Banner=()=>{

   return (
      <div>

         <div className='bannerbox'>
         <img className='img' src={bnrImg} alt="" />
         </div>
         
      </div>
   )
}

export default Banner ;
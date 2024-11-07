import { useNavigate } from 'react-router-dom';
import bnrImg from '../../assets/banner.jpg';
import './Banner.css';

const Banner=()=>{


   const navigate = useNavigate()

   const gotoDashboard=()=>{

      navigate('/dashboard');
   }

   return (
      <div>

      <div className=" relative bottom-[45vh] left-[27vw]">
          <h1 className="text-white text-4xl font-bold">Upgrade Your Tech Accessories with</h1>
          <h1 className="text-white  text-4xl font-bold ml-[4vw]">Gadget Heaven Accessories</h1>
          <p className="text-white  mr-[-20px] w-[40vw] mt-4 text-lg">Gadget Accessories has a variety of gadget accesories.These includes mobile, laptop, charger, headsets etc.All you can get here in affordable price. </p>
      </div>
      
      <div onClick={gotoDashboard}    className="shopbox">
            <span className="text-2xl font bold ml-[3vw] ">Shop Now</span>
      </div>

         <div className='bannerbox'>
         <img className='img' src={bnrImg} alt="" />
         </div>
         
      </div>
   )
}

export default Banner ;
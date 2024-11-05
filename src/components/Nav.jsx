import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { SlLike } from "react-icons/sl";
import './Nav.css';

const Nav=()=>{

  const boxStyle = {
    width:'96vw',
    height:'60vh',
    backgroundColor:'rgba(149, 56, 226, 1)',
    marginLeft:'2vw',
    marginTop:'4vh',
    borderRadius:'20px'
    

  }

   return (

    <div style={boxStyle}>

      <div className=" flex justify-around">
        <h2 className="mt-[5vh]  text-white text-xl font-bold">Gadget Heaven</h2>
        <div className="mt-[5vh]  w-[20vw]">
          <ul className="flex justify-between">
            <li className="text-white text-lg font-bold"><NavLink to={'/'}>Home</NavLink></li>
            <li className="text-white text-lg font-bold"><NavLink>Dash Board</NavLink></li>
            <li className="text-white text-lg font-bold"><NavLink>Statistics</NavLink></li>
          </ul>
        </div>
      <div className="mt-[5vh] flex ">
      <CiShoppingCart className="mr-3 text-2xl" />
      <SlLike className="text-xl"></SlLike>
      </div>
      </div>

      <div className="relative top-[6vh] left-[32vw]">
          <h1 className="text-white text-4xl font-bold">Upgrade Your Tech Accessories with</h1>
          <h1 className="text-white text-4xl font-bold ml-[4vw]">Gadget Heaven Accessories</h1>
          <p className="mr-[-20px] w-[40vw] mt-4 text-white text-lg">Gadget Accessories has a variety of gadget accesories.These includes mobile, laptop, charger, headsets etc.All you can get here in affordable price. </p>
      </div>
      
      <div onClick        className="shopbox">
            <span className="text-2xl font bold text-center">Shop Now</span>
      </div>
    </div>
    
   )
}

export default Nav;
import { NavLink, useLocation,matchPath } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import './Nav.css';
import { CgLayoutGrid } from "react-icons/cg";
import { CiMenuFries } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import { useContext, useState } from "react";
import { dataContext } from "./Statistics/ContextProvider/Provider";

const Nav=()=>{

  const { countCart,wishCount }=useContext(dataContext)

  const location = useLocation();

  // console.log(location)

  const isHome = location.pathname === '/' || location.pathname === '/laptop' || location.pathname === '/smartphone' || location.pathname === '/smartwatch'  ;
  const isDetails = matchPath('/details/:id', location.pathname);
  const isDashboard=matchPath('/dashboard' , location.pathname) || matchPath('/dashboard/wishlist' , location.pathname) || matchPath('/dashboard/cart', location.pathname);
  const isStatistics=matchPath('/statistics' , location.pathname);
  const isInfo=matchPath('/information' , location.pathname);


  const className = `
  ${isHome ? 'home' : ''}
  ${isDetails ? 'rest-other' : ''} 
  ${isDashboard ? 'rest-other' : ''}
  ${isStatistics ? 'rest-other' : ''}
  ${isInfo ? 'rest-other' : ''}
`
const outerBox= `
${isHome ? 'boxStyle' : ''}
${isDetails ? 'box-style' : ''} 
${isDashboard ? 'box-style1' : ''}
${isStatistics ? 'box-style1' : ''}
${isInfo ? 'box-style1' : ''}
`

const innerclass=`
  ${isHome ? 'text-white text-xl font-bold max-[600px]:text-sm ': ' '}
  ${ isDetails ? 'text-black  text-xl font-bold max-[600px]:text-sm' : ' '}
 ${ isDashboard ? 'text-black         text-xl font-bold max-[600px]:text-sm' : ''}
 ${ isStatistics ? 'text-black       text-xl font-bold max-[600px]:text-sm' : ''}
 ${ isInfo ? 'text-black       text-xl font-bold max-[600px]:text-sm' : ''}
`
 const [toggle, setToggle] = useState(false);




  

   return (

    <div className={outerBox}>



     <div className={className}>
     <div className="relative left-[30vw] lg:left-0">
        <h2 className={`mt-[5vh]   ${innerclass}`}>Gadget Heaven</h2>
      </div>
      <div onClick={()=>setToggle(!toggle)} className="text-black text-xl relative top-[5vh] right-[35vw]  max-[600px]:visible  md:hidden    lg:hidden">
       {
            toggle === false ? <CiMenuFries/> : <GrClose/>
       }
      </div>



        <div className={`mt-[5vh]  w-[30vw]  `}>
          <ul className={
               ` max-[600px]:hidden    flex justify-around '}`
          }>
            <li ><NavLink  className={ ({ isActive })=>`${innerclass} ${isActive ? 'underline' : ''}`}   to={'/'}>Home</NavLink></li>
            <li ><NavLink  className={({ isActive })=>`${innerclass} ${isActive ? 'underline' : ''}`}  to={'/dashboard'}>Dash Board</NavLink></li>
            <li ><NavLink   className={({ isActive })=>`${innerclass} ${isActive ? 'underline' : ''}`}  to={'/statistics'}>Statistics</NavLink></li>
            <li ><NavLink   className={({ isActive })=>`${innerclass} ${isActive ? 'underline' : ''}`}  to={'/information'}>Information</NavLink></li>
          </ul>
        </div>

          

         

      
      <div className=" relative left-[13vw] top-[2vh]">
          <div className=" ">
            {countCart}
          </div>
          <CiShoppingCart className="" />
    
      </div>

      <div className="relative bottom-[-2.5vh]">
          <div className="">
            {wishCount}
          </div>
          <FaRegHeart></FaRegHeart>
      </div>


     </div>
      
  </div>
      
   
    
   )
}

export default Nav;
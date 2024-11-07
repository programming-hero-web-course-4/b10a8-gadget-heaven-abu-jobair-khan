import { NavLink, useLocation,matchPath } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import './Nav.css';
import { CgLayoutGrid } from "react-icons/cg";
import { CiMenuFries } from "react-icons/ci";

const Nav=()=>{

  const location = useLocation();

  // console.log(location)

  const isHome = location.pathname === '/' || location.pathname === '/laptop' || location.pathname === '/smartphone' || location.pathname === '/smartwatch'  ;
  const isDetails = matchPath('/details/:id', location.pathname);
  const isDashboard=matchPath('/dashboard' , location.pathname);
  const isStatistics=matchPath('/statistics' , location.pathname);


  const className = `
  ${isHome ? 'home' : ''}
  ${isDetails ? 'rest-other' : ''} 
  ${isDashboard ? 'rest-other' : ''}
  ${isStatistics ? 'rest-other' : ''}
`
const outerBox= `
${isHome ? 'boxStyle' : ''}
${isDetails ? 'box-style' : ''} 
${isDashboard ? 'box-style' : ''}
${isStatistics ? 'box-style' : ''}
`

const innerclass=`
  ${isHome ? 'text-white text-xl font-bold sm:text-md ': ' '}
  ${ isDetails ? 'text-black text-xl font-bold' : ' '}
 ${ isDashboard ? 'text-black text-xl font-bold' : ''}
 ${ isStatistics ? 'text-black text-xl font-bold' : ''}
`





  

   return (

    <div className={outerBox}>



     <div className={className}>
     <div className="relative left-[20vw] lg:left-0">
        <h2 className={`mt-[5vh]   ${innerclass}`}>Gadget Heaven</h2>
      </div>
      <div className="relative top-[5vh] right-[48vw]   max-[600px]:visible  md:hidden    lg:hidden">
      <CiMenuFries  className="text-white text-xl "  />
      </div>



        <div className="mt-[5vh]  w-[20vw] max-[600px]:hidden">
          <ul className="flex justify-between">
            <li ><NavLink  className={ ({ isActive })=>`${innerclass} ${isActive ? 'underline' : ''}`}   to={'/'}>Home</NavLink></li>
            <li ><NavLink  className={({ isActive })=>`${innerclass} ${isActive ? 'underline' : ''}`}  to={'/dashboard'}>Dash Board</NavLink></li>
            <li ><NavLink   className={({ isActive })=>`${innerclass} ${isActive ? 'underline' : ''}`}  to={'/statistics'}>Statistics</NavLink></li>
          </ul>
        </div>
      <div className="mt-[5vh] flex ">
      <CiShoppingCart className="mr-3 text-2xl" />
      <FaRegHeart/>
      </div>


     </div>
      
    
      
    </div>
    
   )
}

export default Nav;
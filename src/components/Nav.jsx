import { NavLink, useLocation,matchPath } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import './Nav.css';
import { CgLayoutGrid } from "react-icons/cg";

const Nav=()=>{

  const location = useLocation();

  // console.log(location)

  const isHome = location.pathname === '/' || location.pathname === '/laptop';
  const isDetails = matchPath('/details/:id', location.pathname);
  const isDashboard=matchPath('/dashboard' , location.pathname);


  const className = `
  ${isHome ? 'home' : ''}
  ${isDetails ? 'rest-other' : ''} 
  ${isDashboard ? 'rest-other' : ''}
`
const outerBox= `
${isHome ? 'boxStyle' : ''}
${isDetails ? 'box-style' : ''} 
${isDashboard ? 'box-style' : ''}
`

const innerclass=`
  ${isHome ? 'text-white text-xl font-bold': ' '}
  ${ isDetails ? 'text-black text-xl font-bold' : ' '}
 ${ isDashboard ? 'text-black text-xl font-bold' : ''}
`





  

   return (

    <div className={outerBox}>

      <div className={className}>
        <h2 className={`mt-[5vh] ${innerclass}`}>Gadget Heaven</h2>
        <div className="mt-[5vh]  w-[20vw]">
          <ul className="flex justify-between">
            <li className={innerclass}><NavLink to={'/'}>Home</NavLink></li>
            <li className={innerclass}><NavLink to={'/dashboard'}>Dash Board</NavLink></li>
            <li className={innerclass}><NavLink>Statistics</NavLink></li>
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
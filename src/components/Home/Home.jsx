import { NavLink, Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import './Home.css';


const Home=()=>{

   return (
      <div>
         <Banner></Banner>
         <div className="sidebar">
            <div className="flex flex-col w-[12vw] h-[48vh] bg-slate-200">
            <NavLink  className={({ isActive }) => isActive ? 'active-link' : 'links'} to={'/'}>All Products</NavLink>
            <NavLink  className={({ isActive }) => isActive ? 'active-link' : 'links'} to={'/laptop'}> Laptop</NavLink>
            <NavLink  className={({ isActive }) => isActive ? 'active-link' : 'links'} to={'/smartphone'}>Smart Phones</NavLink>
            <NavLink  className={({ isActive }) => isActive ? 'active-link' : 'links'} to={'/smartwatch'}>Smart Watches</NavLink>
            <NavLink  className={({ isActive }) => isActive ? 'active-link' : 'links'} to={'/mac'}>Mac Books</NavLink>
            </div>
            <div className="w-[57vw]  mr-[10vw] ">
               <Outlet></Outlet>
            </div>

            
         </div>
      </div>
   )


}

export default Home ;
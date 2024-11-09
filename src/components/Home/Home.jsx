import { NavLink, Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import './Home.css';
import { useContext } from "react";
import { dataContext } from "../Statistics/ContextProvider/Provider";


const Home=()=>{

   
   

  

   return (
      <div>
         <Banner></Banner>
         <div className="sidebar">
            <div className="flex flex-row    lg:flex-col w-[30vw] h-[12vh]  lg:w-[12vw]  lg:h-[48vh] bg-slate-200 responsbox">
            <NavLink  className={({ isActive }) => isActive ? 'active-link' : 'links'} to={'/'}>All Products</NavLink>
            <NavLink  className={({ isActive }) => isActive ? 'active-link' : 'links'} to={'/laptop'}> Laptop</NavLink>
            <NavLink  className={({ isActive }) => isActive ? 'active-link' : 'links'} to={'/smartphone'}>Smart Phones</NavLink>
            <NavLink  className={({ isActive }) => isActive ? 'active-link' : 'links'} to={'/smartwatch'}>Smart Watches</NavLink>
            <NavLink  className={({ isActive }) => isActive ? 'active-link' : 'links'} to={'/mac'}>Mac Books</NavLink>
            </div>
            <div className="products">
               <Outlet></Outlet>
            </div>

            
         </div>
      </div>
   )


}

export default Home ;
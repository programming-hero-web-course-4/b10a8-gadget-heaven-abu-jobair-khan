import { NavLink, Outlet } from "react-router-dom";
import './dashboard.css';


const Dashboard=()=>{

   return (
      <div>
          
          <div className="dash-intro ">
             <h1 className="text-white text-2xl lg:text-3xl font-bold lg:ml-[17vw] w-[20vw] lg:w-auto">Dashboard</h1>
             <p className="text-white text-lg w-[50vw] lg:w-auto">Explore latest gadgets and experience new technology within affordable price range.</p>
          </div>
           <div className="dashlink">
           <NavLink to={'/dashboard/cart'}> Cart </NavLink>
           <NavLink to={'/dashboard/wishlist'}> Wish list </NavLink>
           </div>

           <div className="min-h-[80vh]">
            <Outlet></Outlet>
           </div>
           
      </div>
   )
}

export default Dashboard;
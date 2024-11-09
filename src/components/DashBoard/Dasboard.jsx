import { NavLink, Outlet } from "react-router-dom";


const Dashboard=()=>{

   return (
      <div>
          
           <div className="w-[15vw] flex justify-between text-2xl font-bold ">
           <NavLink to={''}> Cart </NavLink>
           <NavLink to={'/dashboard/wishlist'}> Wish list </NavLink>
           </div>

           <div>
            <Outlet></Outlet>
           </div>
           
      </div>
   )
}

export default Dashboard;
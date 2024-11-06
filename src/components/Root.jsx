
import Nav from "./Nav"
import Footer from './Footer/Footer';
import { Outlet } from "react-router-dom";
import './Root.css';



const Root=()=>{

   return (
      <div>
          <Nav></Nav>
          <Outlet></Outlet>
          <Footer></Footer>
      </div>
   )
}

export default Root ;
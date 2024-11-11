
import Nav from "./Nav"
import Footer from './Footer/Footer';
import { Outlet } from "react-router-dom";
import './Root.css';
import { ToastContainer,Bounce } from "react-toastify";



const Root=()=>{

   return (
      <div>

         <div>
         <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}  ></ToastContainer>
         </div>
          <Nav></Nav>
          <Outlet></Outlet>
          <Footer></Footer>
      </div>
   )
}

export default Root ;
import { useContext } from "react";
import { dataContext } from "../Statistics/ContextProvider/Provider";


const Cart=()=>{

   const {cart} = useContext(dataContext);

   console.log(cart)

   return(
      <div>
         {
            cart.map(device => {
               return (
                   <div key={device.product_id}>
                       {device.product_title}
                   </div>
               );
           })
         }
      </div>
   )
}

export default Cart;
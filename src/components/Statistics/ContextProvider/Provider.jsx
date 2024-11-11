import {  createContext, useState } from "react"



export const dataContext=createContext()
const Provider=({children})=>{

   const [countCart , setCartCount ]=useState(0);
   const [wishCount,setWishCount] = useState(0);
   const [cart , setCart] = useState([]);
   const [wish, setWish] = useState([]);

   return(
      <div>
         <dataContext.Provider value={{countCart,setCartCount,cart,setCart,wish,setWish,wishCount,setWishCount}}>
            {children}
         </dataContext.Provider>

      </div>
   )
}

export default Provider;
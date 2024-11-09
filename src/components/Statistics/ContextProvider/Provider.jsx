import {  createContext, useState } from "react"



export const dataContext=createContext()
const Provider=({children})=>{

   const [countCart , setCartCount ]=useState(0);
   const [cart , setCart] = useState([])

   return(
      <div>
         <dataContext.Provider value={{countCart,setCartCount,cart,setCart}}>
            {children}
         </dataContext.Provider>

      </div>
   )
}

export default Provider;
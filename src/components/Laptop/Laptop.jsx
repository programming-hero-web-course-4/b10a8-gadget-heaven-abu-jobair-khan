import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import CategoryProduct from "../CategoryProduct/CategoryProduct";


const Laptop=()=>{

   const data=useLoaderData()
   // console.log(data)
   const [laptops,setLaptops] = useState([])

   useEffect( ()=>{

      setLaptops(data.filter((x) => x.category === "Laptop"));
   }  , [])

   // console.log(laptops)
   return (
      <div className="grid lg:grid-cols-3 gap-[50px]">
            {
               laptops.map( (laptop)=><CategoryProduct key={laptop.id} laptop={laptop}></CategoryProduct>)
            }
      </div>
   )
}

export default Laptop;
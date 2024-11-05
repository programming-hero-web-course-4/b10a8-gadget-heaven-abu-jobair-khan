import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowPhone from "./ShowPhone";


const Phone=()=>{

   const data = useLoaderData()

   const [phones , setPhones]=useState([]);

   useEffect( ()=>{
      setPhones(data.filter((x)=>x.category === "Smartphone"))
   } ,[])

   return (
      <div className="grid lg:grid-cols-3 gap-[50px]">
            {
               phones.map((phone)=><ShowPhone key={phone.id} phone={phone}></ShowPhone>)
            }
      </div>
   )
}

export default Phone ;
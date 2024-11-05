import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import Showwatch from "./Showwatch";


const Watch=()=>{

   const data = useLoaderData()

   const [watches ,setWatches]=useState([]);

   useEffect( ()=>{
      setWatches(data.filter((x)=>x.category === "Smartwatch"))
   } ,[])

   return (
      <div className="grid lg:grid-cols-3 gap-[50px]">
            {
               watches.map((watch)=><Showwatch key={watch.id} watch={watch}></Showwatch>)
            }
      </div>
   )
}

export default Watch;
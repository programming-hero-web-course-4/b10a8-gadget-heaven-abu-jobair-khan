import { useLoaderData } from "react-router-dom";
import './Products.css';
import fakeData from '../../../public/fakeData.json';

import Product from "../Product/Product";
import { useEffect, useState } from "react";


const Products=()=>{

   // const products =useLoaderData();

   const [products , setProducts] = useState([]);

   useEffect( ()=>{
      setProducts(fakeData)
   } , [])

   console.log(products)

   // const {product_title,product_image,price}=products;

   return (
      <div className="    grid grid-cols-1  lg:grid-cols-3  gap-[50px]">
         
         {
           products.map(p => <Product key={p.product_id} product={p} />) 

         }
         
      </div>
   )
}

export default Products ;
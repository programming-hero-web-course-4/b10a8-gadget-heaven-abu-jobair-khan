import { useLoaderData } from "react-router-dom";
import './Products.css';

import Product from "../Product/Product";


const Products=()=>{

   const products =useLoaderData();

   // console.log(products)

   // const {product_title,product_image,price}=products;

   return (
      <div className="    grid grid-cols-1  lg:grid-cols-3  gap-[50px]">
         
         {
            products.map(p=><Product key={p.product_id} product={p}></Product>)
         }
         
      </div>
   )
}

export default Products ;
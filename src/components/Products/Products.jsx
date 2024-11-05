import { useLoaderData } from "react-router-dom";
import './Products.css';

import Product from "../Product/Product";


const Products=()=>{

   const products =useLoaderData();

   // console.log(products)

   // const {product_title,product_image,price}=products;

   return (
      <div className="grid lg:grid-cols-3 gap-[50px]">
         
         {
            products.map(p=><Product key={p.category} product={p}></Product>)
         }
         
      </div>
   )
}

export default Products ;
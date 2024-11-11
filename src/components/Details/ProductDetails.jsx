import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import './ProductDetails.css';
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { dataContext } from "../Statistics/ContextProvider/Provider";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails=()=>{

   const {countCart , setCartCount ,cart , setCart , setWish ,wish,wishCount,setWishCount}=useContext(dataContext);
   const {id}=useParams()
   const data=useLoaderData()

   const [number , setNumber] = useState([]);
   const [product,setProduct] = useState([]);

   useEffect( ()=>{

      setProduct(Array.isArray(data) ? data.find(x => x.product_id == id) : [])

   }   ,[id])

   


   // console.log(product)

   const { product_image , product_title, availability, price, description,specification ,rating,product_id } = product;

   const handleCart=(newitem)=>{

      setCart((prevItems) => [...prevItems, newitem]);

      setCartCount(countCart+1);
     toast.success(" added in the cart !!")
   }

//   console.log(cart)


   const addTowish=(newWishItem)=>{

         setWish((prevWishItems) => [...prevWishItems,newWishItem]);
         setWishCount(wishCount+1);
         toast.success(" added in the wishlist !!")

   }


   



   useEffect( ()=>{

      const extractId = [...wish].map( x=> x.product_id);
      setNumber(extractId); 



   } , [wish])

   // console.log(wish);
   // console.log(number);


  

   return(
      <div>
       
            <div >
               <h2 className="text-white font-bold  text-4xl relative bottom-[45vh] left-[40vw]">Product Details</h2>
               <p className=" text-white relative bottom-[40vh] left-[33vw] ">The product detailes section contains the detailed info of the product.</p>
            </div>

            <div className="detailbox">
                <div>
                  <img  className="h-[35vh] w-[20vw] "  src={product_image} alt="" />
                </div>
                <div>
                   <h1 className="ml-[5vw] mt-[3vh]">{product_title}</h1>
                   <h2 className="ml-[5vw] mt-[3vh]">Price:{price}</h2>
                   <div className={availability ? "in-stock" : "out-of-stock"}>
                   {availability ? "In Stock" : "Out of Stock"}
                   </div>
                   <p className=" mt-[5vh] w-[37vw]">{description}</p>
                   <h2 className="text-2xl font-bold mt-[5vh]">Specifications:</h2>
                   <ul>
                      {
                         specification?.map(x=>Object.entries(x)?.map(([key, value]) => (
                           <li key={key}>
                             <strong>{key}:</strong> {value.toString()}
                           </li>
                         )))
                      }
                  </ul>
                  <h2 className="flex mt-[3vh]">Rating:  <div className="flex mx-4 mt-1"><FaStar /><FaStar /><FaStar /><FaStar /  ><FaRegStarHalfStroke /></div>  {rating}</h2>

                  <div className="flex">
                  <button onClick={()=>handleCart(product)}   className="mt-[3vh] w-[12vw] h-[4vh] bg-blue-500 flex items-center justify-center">Add to Cart <CiShoppingCart className="text-2xl "/> </button>
                  <div onClick={()=>addTowish(product)}  className={ number.includes(product_id) ? 'disabled-wish-btn' : 'wish-btn'}> <FaRegHeart className="text-3xl  mt-4 ml-4" /></div>
                  </div>

                </div>
            </div>
      </div>
   )
}

export default ProductDetails ;
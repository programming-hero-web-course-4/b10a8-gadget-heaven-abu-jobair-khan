import { useNavigate } from 'react-router-dom';
import './Phone.css';
import { LuDollarSign } from "react-icons/lu";

const ShowPhone=({phone})=>{

   const {product_title,product_image,price,product_id}=phone;

   const navigate =useNavigate();

   const handleTheProduct = (id)=>{
      console.log(id)
      navigate(`/details/${id}`);
   }

   return (

      <div className='cart' >
         <img  className='rounded-lg'    src={product_image} alt="" />
         <h1 className='text-2xl font-bold mt-[10px] ml-[15px]'>{product_title}</h1>
         <div className="flex mt-[15px]"><h2 className="ml-4 ">{price}</h2><LuDollarSign className="mt-1"></LuDollarSign></div>

         <button  onClick={()=>handleTheProduct(`${product_id}`)}          className="btn ml-4">View Details</button>

      </div>
   )
}

export default ShowPhone;
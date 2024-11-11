import { useLocation } from "react-router-dom";
import './Wiishlist.css';
import { useContext } from "react";
import { dataContext } from "../Statistics/ContextProvider/Provider";
import { RxCross2 } from "react-icons/rx";
import { FaDollarSign } from "react-icons/fa";


const Wishlist=()=>{
   const {wish , countCart,setCartCount,cart,setCart,setWish,wishCount,setWishCount} = useContext(dataContext);
   const location = useLocation();


   // console.log(wish);

   const addToCart=(addItem)=>{

      setCart((prevItems) => [...prevItems, addItem]);

      setCartCount(countCart+1);


   }



   const removewishItem=(wishedItem)=>{

      const updatedWishItems = wish.filter(wishItem => wishItem.product_id !== wishedItem.product_id); 
      setWish(updatedWishItems);
      setWishCount(wishCount-1);
   }

   return(
      <div>
          
          <div className="wish">
            {location.pathname.split('/').filter(Boolean).pop()}
          </div>



          {
            wish.map(device => {
               return (
                   <div  className="wish-container"    key={device.product_id}>
                        <img src={device.product_image} alt="" />

                        <div>
                            <h2 className=" lg:text-2xl lg:font-bold   lg:mt-[40px]">{device.product_title}</h2>
                            <div className="lg:text-2xl lg:mt-[20px] flex"> <h2 className=""> price: {device.price}</h2> <FaDollarSign className="mt-1"/></div>


                            <div   onClick={()=>addToCart(device)}  className="btn mt-[20px]">
                              Add to Cart
                            </div>

                            <div onClick={()=>removewishItem(device)}   className="remove">
                              <RxCross2></RxCross2>
                            </div>
                        </div>
                   </div>
               );
           })
         }
          
      </div>
   )
}

export default Wishlist;
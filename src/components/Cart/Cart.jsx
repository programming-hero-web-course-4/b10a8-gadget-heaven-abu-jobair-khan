import { useContext, useState,useEffect } from "react";
import { dataContext } from "../Statistics/ContextProvider/Provider";
import { useLocation, useNavigate } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import './Cart.css';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Cart=()=>{

  const navigate = useNavigate();

   const location =useLocation()

   // console.log(location)

   const {cart , setCart,countCart, setCartCount} = useContext(dataContext);

   const [totalPrice , setTotalPrice] = useState(0);
   const [modalPrice , setModalPrice] = useState(0.00)

  

   useEffect(() => {
      const total = cart.reduce((sum, item) => sum + item.price, 0);
      setTotalPrice(total);
    }, [cart]);

   console.log(cart.length)


  

  console.log(modalPrice)

    const handleSort=()=>{


      setCart([...cart].sort((a, b) => b.price - a.price));
      toast.success("sorted according to price")

    }


    const removeItem=( item )=>{
      
      const updatedCart = cart.filter(cartItem => cartItem.product_id !== item.product_id);

      setCartCount(countCart-1);

         setCart(updatedCart);
         toast.success(" Item removed from cart !")

    }

    const cartClearer=()=>{
      setModalPrice(totalPrice.toFixed(2));
      setCart([])
      setCartCount(0);
    }

    const goToHome=()=>{

      navigate('/');

    }



   return(
      <div>
          <div className="path">
            {location.pathname.split('/').filter(Boolean).pop()}
          </div>

          <div className="totalprice">
            Total Price :  <div className="flex"> {totalPrice.toFixed(2)} <FaDollarSign className="mt-1 ml-[30px]"/>  </div>
          </div>

          <div  onClick={handleSort}   className="sort">
            Sort by price
          </div>


          {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className={cart.length==0 ? 'disabled' : 'purchase'}  onClick={() => {
    cartClearer();
    document.getElementById('my_modal_5').showModal();
  }}>purchase</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Your payment is Successful !!</h3>
    <h3 className="font-bold text-lg">Thanks for Visiting us</h3>
    <h3 className="font-bold text-lg"> Total Price : {modalPrice}</h3>
    
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button   onClick={goToHome}        className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

          {/* <div className="purchase">
            Purchase
          </div> */}

         {
            cart.map(device => {
               return (
                   <div  className="cart-container"    key={device.product_id}>
                        <img src={device.product_image} alt="" />

                        <div>
                            <h2 className=" lg:text-2xl lg:font-bold   lg:mt-[40px]">{device.product_title}</h2>
                            <div className="lg:text-2xl lg:mt-[20px] flex"> <h2 className=""> price: {device.price}</h2> <FaDollarSign className="mt-1"/></div>

                            <div onClick={()=>removeItem(device)}   className="remove">
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

export default Cart;
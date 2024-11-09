

import './Footer.css';
const Footer=()=>{


   return (
      <div className='footer-box' >
           <div className='heading'>
             <h1 className='text-lg lg:text-3xl font-bold ml-[]  lg:ml-[10vw]'>Gadget Heaven</h1>
             <p className='text-md w-[50vw] lg:w-auto  lg:text-lg mt-[2vh]'>A hub of authentic and digital tech gadgets at an affordable price range.</p>
           </div>
           <div className='brdr-top'></div>
           <div className='grid grid-cols-1  lg:grid-cols-3 mt-[15vh] ml-[10vw]'>
              <div >
               <h2 className='text-xl font-bold'>Service</h2>
               <ul className='mt-3'>
                  <li>Product support</li>
                  <li>Order tracking</li>
                  <li>Shipping & delivery</li>
                  <li>Returns</li>
               </ul>
              </div>
              <div >
               <h2 className='text-xl font-bold'>Company</h2>
               <ul className='mt-3'>
                  <li>about Us</li>
                  <li>Careers</li>
                  <li>Contacts</li>
               </ul>
              </div>
              <div >
               <h2 className='text-xl font-bold'>Legal</h2>
               <ul className='mt-3'>
                  <li>Terms of services</li>
                  <li>Privacy policy</li>
                  <li>Coockie policy</li>
               </ul>
              </div>
           </div>
      </div>
   )
}

export default Footer ;
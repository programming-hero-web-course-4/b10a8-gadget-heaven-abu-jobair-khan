import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './components/Root.jsx';
import Home from './components/Home/Home.jsx';
import Products from './components/Products/Products.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Laptop from './components/Laptop/Laptop.jsx';
import Phone from './components/SmartPhones/Phone.jsx';
import Watch from './components/Smartwatch/Watch.jsx';
import ProductDetails from './components/Details/ProductDetails.jsx';
import Dashboard from './components/DashBoard/Dasboard.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Provider from './components/Statistics/ContextProvider/Provider.jsx';
import Cart from './components/Cart/Cart.jsx';
import Wishlist from './components/Wishlist/Wishlist.jsx';
import Info from './components/Info/Info.jsx';

const route = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    children:[
      {
         path:'/',
         element:<Home></Home>,
         children:[
          {
            path:'/',
            // loader:()=>fetch('./fakeData.json'),
            element:<Products></Products>
          },
          {
            path:'/laptop',
            loader:()=>fetch('./fakeData.json'),
            element:<Laptop></Laptop>
          },
          {
            path:'/smartphone',
            loader:()=>fetch('./fakeData.json'),
            element:<Phone></Phone>
          },
          {
            path:'/smartwatch',
            loader:()=>fetch('./fakeData.json'),
            element:<Watch></Watch>
          }
         ]
      },
      {
        path:'/details/:id',
        loader:()=>fetch('./fakeData.json'),
        element:<ProductDetails></ProductDetails>
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
          {
            path:'cart',
            element:<Cart></Cart>
          },
          {
            path:'/dashboard/wishlist',
            element:<Wishlist></Wishlist>
          }
        ]
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/information',
        element:<Info></Info>
      }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider>
   <RouterProvider router={route}>
      <Root></Root>
    </RouterProvider>
   </Provider>
  </StrictMode>,
)

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer.jsx';
import Home from '../src/pages/Home.jsx';
import About from '../src/pages/About.jsx';
import Cart from '../src/pages/Cart.jsx';
import Collection from '../src/pages/Collection.jsx';
import Login from '../src/pages/Login.jsx';
import Contact from '../src/pages/Contact.jsx';
import Orders from '../src/pages/Orders.jsx';
import PlaceOrder from '../src/pages/PlaceOrder.jsx';
import Product from '../src/pages/Product.jsx';
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:(
        <>
          <Header/>
          <Outlet/>
          <Footer/>
        </>
      ),
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/collection',
          element:<Collection/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/cart',
          element:<Cart/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/orders',
          element:<Orders/>
        },
        {
          path:'/product/:productId',
          element:<Product/>
        },
        {
          path:'place-order',
          element:<PlaceOrder/>
        },
      ]
    }
  ])
  return (
   <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
     <RouterProvider router={router} />
   </div>
  )
}

export default App

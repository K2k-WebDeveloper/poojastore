import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../customer/Pages/HomePage/Homepage'
import Cart from '../customer/components/Cart/Cart'
import Nava from '../customer/components/navigation/Nava'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout';
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'

const CustomerRouters = () => {
  return (
    <div>
      <div>
      <Nava />
      </div>
      <Routes>
      <Route path='/login' element={<Homepage/>}></Route>
      <Route path='/register' element={<Homepage/>}></Route>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>
        <Route path='/product/:productId' element={<ProductDetails/>}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/account/order' element={<Order />}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
        
     {/*<Order />*/}
     {/*<OrderDetails />*/}
      </Routes>
      <div>
      <Footer />
      </div>
    </div>
  )
}

export default CustomerRouters

import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Preloader from './Preloader/Preloader'; 
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Footer from './customer/components/Footer/Footer';
import Nava from "./customer/components/navigation/Nava";
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Homepage from "./customer/Pages/HomePage/Homepage";
import CustomerRouters from './Routers/CustomerRouters';
import WhyWeCelebrate from './customer/Pages/WhyWeCelebrate/WhyWeCelebrate';
import PoojaSteps from './customer/Pages/PoojaSteps/PoojaSteps';
import BookPandit from './customer/Pages/BookPandit/BookPandit';
import Jan from './customer/Pages/WhyWeCelebrate/Festivals/Jan/Jan';
import Makar from './customer/Pages/WhyWeCelebrate/Festivals/Jan/Makar';
import Feb from './customer/Pages/WhyWeCelebrate/Festivals/Feb/Feb';
import April from './customer/Pages/WhyWeCelebrate/Festivals/April/April';
import Mar from './customer/Pages/WhyWeCelebrate/Festivals/March/Mar';
import Aug from './customer/Pages/WhyWeCelebrate/Festivals/August/Aug';
import Sept from './customer/Pages/WhyWeCelebrate/Festivals/Sept.js/Sept';
import Oct from './customer/Pages/WhyWeCelebrate/Festivals/Oct.js/Oct';
import Nov from './customer/Pages/WhyWeCelebrate/Festivals/Nov/Nov';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="">
      {loading && <Preloader />}
      {!loading && (
        <>
          <Routes>
            <Route path='/*' element={<CustomerRouters />} />
            <Route path='/whywecelebrate' element={<WhyWeCelebrate />} />
            <Route path='/jan' element={<Jan />} />
            <Route path='/feb' element={<Feb />} />
            <Route path='/mar' element={<Mar />} />
            <Route path='/april' element={<April />} />
            <Route path='/aug' element={<Aug />} />
            <Route path='/sept' element={<Sept />} />
            <Route path='/oct' element={<Oct />} />
            <Route path='/nov' element={<Nov />} />
            <Route path='/durgapuja' element={<Makar />} />
            <Route path='/poojasteps' element={<PoojaSteps />} />
            <Route path='/bookpandit' element={<BookPandit />} />
          </Routes>
          
        </>
      )}
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import MasterLayout from './Components/MasterLayout';
import Product from './Components/Product/Product';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MasterLayout />}>
            <Route index element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path='/cart' element={<Cart/>} />
          </Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
// import About from "./Pages/About";
import ProductsPage from "./Pages/ProductsPage";
import SingleProduct from "./Components/SingleProduct";
import Cart from "./Pages/Cart";
import { CartContext } from "./CartContext";

function App() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const cart = window.localStorage.getItem('cart');
  }, [])

  useEffect(()=>{
    window.localStorage.setItem('cart',JSON.stringify(cart));
  },[cart])

  return (
    <div className="App">
      <Router>
        <CartContext.Provider value={{ cart,setCart }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} exact />
            {/* <Route path="about" element={<About />} /> */}
            <Route path="products" element={<ProductsPage />} />
            <Route path="product/:_id" element={<SingleProduct />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </CartContext.Provider>
      </Router> 
    </div>
  );
}

export default App;

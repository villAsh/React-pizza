import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import SingleProduct from "./Components/SingleProduct";
import Cart from "./Pages/Cart";
function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="about" element={<About />} />
              <Route path="products" element={<Products />} />
              <Route path="product/:_id" element={<SingleProduct />} />
              <Route path="cart" element={<Cart />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;

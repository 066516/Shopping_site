import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import "./App.css"
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContext } from "./context/shop-context";
function App() {
  return (
    <div className="App">
      <ShopContext>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContext>
    </div>
  );
}

export default App;

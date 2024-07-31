import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Women from "./Pages/Women";
import {Toaster} from 'sonner'
import AddDetails from "./Pages/AddDetails";
import { CartProvider } from "./Pages/ContextReducer";


function App() {
  return (
    <CartProvider>
    <div className="h-screen ">
      
        <div className=''>
          <Navbar/>
        </div>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/women' element={<Women/>}/>
          <Route path="/productDetails" element={<ProductDetails/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/product" element={<AddDetails/>}/>
          
        </Routes>    

        <Footer/>
        <Toaster position="top-center" richColors/>
    </div>
    </CartProvider>
  );
}

export default App;

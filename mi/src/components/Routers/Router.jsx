import { Routes, Route, Link } from "react-router-dom";
import { Product } from "../AllProducts/Product";
// import { Footer } from "../Footer/Footer";
import { Home } from "../Home/Home";
import { ProductFeatures } from "../ProductFeatures/ProductFeatures";

export const Router= ()=>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/signin" element={<Home />}/>
                <Route path="/signup" element={<Home />}/>
                <Route path="/allproducts" element={<Product />}/>
                <Route path="/product" element={<ProductFeatures />}/>
                
            </Routes>
        </>
    );
}
import { Routes, Route, Link } from "react-router-dom";
import { Product } from "../AllProducts/Product";
// import { Footer } from "../Footer/Footer";
import { Home } from "../Home/Home";
import { ProductFeatures } from "../ProductFeatures/ProductFeatures";
import Login from "../SignIn/Login/Login";
import Signup from "../SignIn/signup/signup";

export const Router= ()=>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/signin" element={<Login />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/allproducts" element={<Product />}/>
                <Route path="/product" element={<ProductFeatures />}/>
                
            </Routes>
        </>
    );
}
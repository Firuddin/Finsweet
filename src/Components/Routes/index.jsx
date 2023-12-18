import React from "react";
import { Route, Routes} from "react-router";
import { MyRoutes } from "../My Routes";
import Home from "../../Pages/HomePage/Home";
import AboutUs from "../../Pages/About Us/AboutUs";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import Pricing from "../../Pages/Pricing/Pricing";
import Product from "../../Pages/Product/Product";


const WebRouting = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Pricing" element={<Pricing/>}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="*"
    </Routes>
  )
}

export default WebRouting

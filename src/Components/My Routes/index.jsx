import AboutUs from "../../Pages/About Us/AboutUs";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import Error from "../../Pages/Errorpage/Error";
import Home from "../../Pages/HomePage/Home";
import Pricing from "../../Pages/Pricing/Pricing";
import Product from "../../Pages/Product/Product";

export const MyRoutes = [
        { id: 1, path: "/", Element: Home, title: "Ana səhifə" },
        { id: 2, path: "/Product", Element: Product, title: "Məhsul" },
        { id: 3, path: "/Pricing", Element: Pricing, title: "Qiymət" },
        { id: 4, path: "/AboutUs", Element: AboutUs, title: "Haqqimizda" },
        { id: 5, path: "/blog", Element: Blog, title: "Blog" },
        { id: 6, path: "/Contact", Element: Contact, title: "Əlaqə" },
        { id: 7, path: "*", Element: Error },
]

import Home from "../../Pages/HomePage/Home";
import AboutUs from "../../Pages/About Us/AboutUs";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import Pricing from "../../Pages/Pricing/Pricing";
import Product from "../../Pages/Product/Product";
import Error from "../../Pages/Errorpage/Error";

export const MyRoutes =[
        { id: 1, path: "/", Element: Home, title: "Home" },
        { id: 2, path: "/AboutUs", Element: AboutUs, title: "AboutUs" },
        { id: 3, path: "/blog", Element: Blog, title: "Blog" },
        { id: 4, path: "/Pricing", Element: Pricing, title: "Pricing" },
        { id: 5, path: "/Product", Element: Product, title: "Product" },
        { id: 6, path: "/Contact", Element: Contact, title: "Contact" },
        { id: 7, path: "*", Element: Error },
]

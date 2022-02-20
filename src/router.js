import Home from "./container/Home";
import About from "./container/About";
import Contact from "./container/Contact";
import Layout from "./container/Layout";

const routers = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
             path: "",
             index: true,
             element: <Home/>   
            },
            {
             path: "contact",
             index: false,
             element: <Contact/>   
            },
            {
             path: "about",
             index: false,
             element: <About/>   
            },
        ]
    }
]

export default routers;
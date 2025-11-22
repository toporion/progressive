import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../layout/Dashboard";
import AdminHome from "../adminPages/AdminHome";
import Signup from "../pages/Signup";
import ServiceForm from "../adminPages/ServiceForm";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {path:'/',element:<Home/>},
      {path:'/login',element:<Login/>},
      {path:'/signup',element:<Signup/>},
      {path:'/about',element:<AboutUs/>},
      {path:'/contact',element:<ContactUs/>}
    ]
  },
  {
    path:'admin',
    element:<Dashboard/>,
    children:[
      {path:'',element:<AdminHome/>},
      // NEW ROUTES
      {path:'service_form',element:<ServiceForm/>}
    ]
  }
]);

export default router;
import {Routes, Route, Link} from "react-router-dom"
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import LoginPage from "./users/login";


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IndexPage from "./pages";
import AboutPage from "./pages/AboutPage";

export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  return (
    <div>
      <nav className="bg-purple-600">
    <div className="container mx-auto p-2 flex justify-between items-center">
        <Link to="/">
            <h2 className="text-white text-2xl font-bold">Kanta Online Merchant Store</h2>
        </Link>
        <div className="flex space-x-4">
            <Link to="/about" className="text-white font-medium hover:text-blue-200">About</Link>
            <Link to="/contact" className="text-white font-medium hover:text-blue-200">Contact</Link>
            <Link to="/faq" className="text-white font-medium hover:text-blue-200">FAQ</Link>
        </div>
    </div>
</nav>
 <br>
 
 </br>

      <div className="container mx-auto p-2 h-full">     
        <Routes>
        <Route index element={<IndexPage/>}></Route>
          <Route path="/home" element={<HomePage/>}></Route>
          <Route path="/create" element={<CreatePage/>}></Route>
          <Route path="/edit/:id" element={<EditPage/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
        </Routes>
      </div>
      <ToastContainer/>

      <footer className="bg-purple-600">
    <div className="container mx-auto py-8 px-4 flex justify-between items-center">
        <div>
            <Link to="/about" className="text-white text-2xl font-bold hover:text-blue-200">Kanta Online Merchant Store</Link>
            <p className="text-gray-300 mt-2">Your go-to destination for online shopping</p>
        </div>
        <div>
            <h3 className="text-white text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-300">North Industrial Area</p>
            <p className="text-gray-300">Accra, Ghana</p>
            <p className="text-gray-300">Email: wisdomdzontoh@gmail.com.com</p>
            <p className="text-gray-300">Phone: +233 558749735</p>
        </div>
    </div>
</footer>


    </div>
  );
}

export default App;
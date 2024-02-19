import {Routes, Route, Link} from "react-router-dom"
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import LoginPage from "./users/login";


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IndexPage from "./pages";

export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  return (
    <div>
      <nav className="bg-purple-600">
        <div className="container mx-auto p-2">
          <Link to="/"><h2 className="text-white text-2xl font-bold">Online Merchant Store</h2></Link>
        </div>
      </nav>  

      <div className="container mx-auto p-2 h-full">     
        <Routes>
        <Route index element={<IndexPage/>}></Route>
          <Route path="/home" element={<HomePage/>}></Route>
          <Route path="/create" element={<CreatePage/>}></Route>
          <Route path="/edit/:id" element={<EditPage/>}></Route>
          <Route path="/login" element={<login/>}></Route>
        </Routes>
      </div>
      <ToastContainer/>

    </div>
  );
}

export default App;
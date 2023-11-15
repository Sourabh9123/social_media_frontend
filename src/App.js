import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import LogInPage from "./components/pages/LogInPage";
import AboutUs from "./components/pages/AboutUs";
import SignUpPage from "./components/pages/SignUpPage";
import HomePage from "./components/pages/HomePage";
import Changepassword from "./components/pages/Changepassword";
import CartPage from "./components/pages/CartPage";
import Post from "./components/pages/Post";




function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route excat path="/" element={<HomePage />} />
          <Route excat path="/login" element={<LogInPage />} />
          <Route excat path="/about" element={<AboutUs />} />
          <Route excat path="/signup" element={<SignUpPage />} />
         
          <Route excat path="/change-password" element={<Changepassword/>} />
          <Route excat path="/cart" element={<CartPage/>} />
          <Route excat path="/*" element={<HomePage />} />
          <Route excat path="/posts" element={<Post/>} />
          
          
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

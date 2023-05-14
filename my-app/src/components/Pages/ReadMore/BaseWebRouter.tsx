import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import Navigation from "../../Common/Navigation/Navigation";
import Home from "../Home/Home";

function BaseWebRouter() {
  return (
    <BrowserRouter>
      <Navigation />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<p>404 Page not found</p>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}
export default BaseWebRouter;

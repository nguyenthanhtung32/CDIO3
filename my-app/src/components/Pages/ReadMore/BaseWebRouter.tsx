import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
// import Navigation from "../../Common/Navigation/Navigation";
import Login from "../Auth/Login";
import SignUp from "../Auth/Signup";
import DetailGarage from "../DetailGarage/DetailGarage";
import Home from "../Home/Home";
import List from "../List/List";
import DetailRoute from "../DetailRoute/DetailRoute";

function BaseWebRouter() {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/detail/:id/detail/:id" element={<DetailGarage />} />
        <Route path="/detail/:id" element={<DetailRoute />} />
        <Route path="*" element={<p>404 Page not found</p>} />

      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}
export default BaseWebRouter;

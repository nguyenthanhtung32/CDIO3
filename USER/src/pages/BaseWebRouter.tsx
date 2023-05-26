import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Footer from "../components/Footer/Footer";
// import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Login from "./Auth/Login";
import SignUp from "./Auth/Signup";
import Detail from "./Detail/Detail";
import Home from "./Home/Home";
import List from "./List/List";

function BaseWebRouter() {
  return (
    <BrowserRouter>
      <Navigation />
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<p>404 Page not found</p>} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
export default BaseWebRouter;

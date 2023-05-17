import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Dashboard from "./Dashboard/Dashboard";
import ChuyenXe from "./ChuyenXe";
import CreateChuyenXe from "./ChuyenXe/create";
import LoTrinh from "./LoTrinh";
import CreateLoTrinh from "./LoTrinh/create";
import NhanVien from "./NhanVien";
import CreateNhanVien from "./NhanVien/create";
import VeXe from "./VeXe";
import CreateVeXe from "./VeXe/create";
import Xe from "./Xe";
import CreateXe from "./Xe/create";
import KhachHang from "./KhachHang";

function BaseWebRouter() {
  return (
    <BrowserRouter>
      <Header
        setIsLogin={function (value: boolean): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Navigation />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chuyenxe" element={<ChuyenXe />} />
        <Route path="/createchuyenxe" element={<CreateChuyenXe />} />
        <Route path="/lotrinh" element={<LoTrinh />} />
        <Route path="/createlotrinh" element={<CreateLoTrinh />} />
        <Route path="/nhanvien" element={<NhanVien/>} />
        <Route path="/createnhanvien" element={<CreateNhanVien />} />
        <Route path="/vexe" element={<VeXe/>} />
        <Route path="/createvexe" element={<CreateVeXe />} />
        <Route path="/xe" element={<Xe/>} />
        <Route path="/createxe" element={<CreateXe />} />
        <Route path="/khachhang" element={<KhachHang />} />
        <Route
          path="#"
          element={
            <main style={{ padding: "1rem" }}>
              <p>404 Page not found ☻☺</p>
            </main>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default BaseWebRouter;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Dashboard from "./Dashboard/Dashboard";
import Trips from "./Trips";
import CreateTrips from "./Trips/create";
import Routees from "./Route";
import CreateRoute from "./Route/create";
import Employees from "./Employees";
import CreateEmployees from "./Employees/create";
import Tickets from "./Tickets";
import CreateTickets from "./Tickets/create";
import Cars from "./Cars";
import CreateCars from "./Cars/create";
import Customers from "./Customers";
import Statistical from "./Statistical";

interface IProps {
  setIsLogin: (value: boolean) => void;
}

function BaseWebRouter(props: IProps) {
  const { setIsLogin } = props;

  return (
    <BrowserRouter>
      <Header setIsLogin={setIsLogin} />
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/createTrips" element={<CreateTrips />} />
        <Route path="/route" element={<Routees />} />
        <Route path="/createRoute" element={<CreateRoute />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/createEmployees" element={<CreateEmployees />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/createTickets" element={<CreateTickets />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/createCars" element={<CreateCars />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/statistical" element={<Statistical />} />
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

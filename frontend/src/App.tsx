import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import Navigation from "./components/Shared/Navigation/Navigation";
import AllMaterials from "./components/AllMaterials/AllMaterials";
import Contact from "./components/Contact/Contact";
import Opportunities from "./components/Opportunities/Opportunities";
import AllProjects from "./components/Home/OurProjects/AllProjects/AllProjects";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Success from "./components/Shopping/Success";
import Cancel from "./components/Shopping/Cancel";
import PrivateRoute from "./routes/PrivateRoute";
import Secret from "./routes/Secret";
import { MessengerCustomerChat } from "typescript-react-facebook-messenger";
interface PropTypes {}

const App: React.FC<PropTypes> = () => {
  return (
      <main>
        <Header/>
        <Navigation />
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/projects" element={<AllProjects />}></Route>
          <Route path="/materials" element={<AllMaterials />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/opportunities" element={<Opportunities />}></Route>
          <Route
            path="/secret"
            element={
              <PrivateRoute>
                <Secret />
              </PrivateRoute>
            }></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/cancel" element={<Cancel />}></Route>
        </Routes>
        <MessengerCustomerChat
          pageId="117993816707482"
          appId="1259288758102262"
        />
        <Footer />
      </main>
  );
};

export default App;

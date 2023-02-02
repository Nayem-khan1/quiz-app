import React from "react";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <ToastContainer />
      <Outlet></Outlet>
    </div>
  );
};

export default Main;

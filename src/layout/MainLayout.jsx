import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-1 w-[95%] mx-auto my-4 md:my-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

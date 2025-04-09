import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Layout() {
  return (
    <div className="bg-rose-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

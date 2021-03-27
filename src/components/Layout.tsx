import React from "react";

import Navbar from "./Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col max-w-max min-h-screen bg-gray-100">
      <Navbar />

      <main className="container bg-white flex-1 min-h-full mx-auto my-6 px-6 mb-10 py-4 rounded-lg">
        {children}
      </main>
    </div>
  );
};

export default Layout;

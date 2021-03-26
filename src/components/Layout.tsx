import React from "react";

import Navbar from "./Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="max-w-max min-h-screen bg-gray-100">
      <Navbar />

      <main className="container mx-auto my-6 px-6 py-4 bg-white rounded-lg">
        {children}
      </main>
    </div>
  );
};

export default Layout;

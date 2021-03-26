import "./App.css";

import React from "react";

import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <>
      {/* <SignUp /> */}
      <LogIn />
    </>
  );
};

export default App;

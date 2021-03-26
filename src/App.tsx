import "./App.css";

import React from "react";

import Header from "./components/Header";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Feedback from "./components/Feedback";

const App: React.FC = () => {
  return (
    <Layout>
      <Header title="Dashboard" />
      <Feedback />
      {/* <SignUp /> */}
      {/* <LogIn /> */}
      {/* <Layout /> */}
    </Layout>
  );
};

export default App;

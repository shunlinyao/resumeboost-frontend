import "./App.css";

import React from "react";

import { DashboardReviews } from "./components/DashboardReviews";
import { DashboardScoreCard } from "./components/DashboardScoreCard";
import PDFview from "./components/PDFview";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  return (
    <Layout>
      <Header title="Dashboard" />

      {/* <SignUp /> */}
      {/* <LogIn /> */}
      {/* <Layout /> */}
      {/* <DashboardReviews /> */}
      {/* <DashboardScoreCard metric="Visual" score={4.7} /> */}
      {/* <PDFview /> */}
      <Dashboard />
    </Layout>
  );
};

export default App;

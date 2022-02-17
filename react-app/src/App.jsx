import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Workshops from "./components/Workshops";
import "./css/app.css";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Workshops />
      <Routes>
        <Route path="/" elements={<App />} />
        <Route path="/categories/workshops" elements={<Workshops />} />
      </Routes>
    </>
  );
};

export default App;

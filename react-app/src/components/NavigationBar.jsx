import React from "react";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 data-cy="main-header">COURSE LIST</h1>
      <div id="container">
        <button
          onClick={() => navigate("/categories/workshops")}
          data-cy="workshops"
        >
          Workshops
        </button>
        <button data-cy="testing">Testing</button>
        <button data-cy="vue">Vue</button>
        <button data-cy="productivity">Productivity</button>
        <button data-cy="node">Node</button>
        <button data-cy="react"> React</button>
      </div>
    </>
  );
};

export default NavigationBar;

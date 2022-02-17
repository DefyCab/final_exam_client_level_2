import React from "react";

const NavigationBar = () => {
  return (
    <>
      <h1 data-cy="main-header">COURSE LIST</h1>
      <div id="container">
        <button data-cy="workshops">Workshops</button>
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

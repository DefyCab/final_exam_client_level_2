import React from "react";

const NavigationBar = () => {
  return (
    <>
      <h1 data-cy="main-header">COURSE LIST</h1>
      <div id="container">
        <h2 data-cy="workshops">Workshops</h2>
        <h2 data-cy="testing">Testing</h2>
        <h2 data-cy="vue">Vue</h2>
        <h2 data-cy="productivity">Productivity</h2>
        <h2 data-cy="node">Node</h2>
        <h2 data-cy="react"> React</h2>
      </div>
    </>
  );
};

export default NavigationBar;

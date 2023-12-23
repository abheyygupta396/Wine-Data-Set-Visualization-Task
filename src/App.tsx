import React from "react";
import "./assets/main.css";
import FlavanoidsStats from "./components/flavanoidsStats";
import GammaStats from "./components/gammaStats";

const App = () => {
  return (
    <React.Fragment>
      {/* Headers */}
      <span className="display-flex justify-content-center align-items-center">
        <h3 className="text-decoration-underline">
          Statistical Data Visualization
        </h3>
      </span>
      {/* Main Components */}
      <div className="display-flex flex-col row-gap-45">
        <FlavanoidsStats />
        <GammaStats />
      </div>
    </React.Fragment>
  );
};

export default App;

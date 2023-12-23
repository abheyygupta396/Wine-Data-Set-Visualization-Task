import React from "react";
import TableComponents from "../common/table";
import wineData from "../wineData.json";

const FlavanoidsStats = () => {
  return (
    <div className="display-flex justify-content-center align-items-center">
      <TableComponents data={wineData} statsFor="Flavanoids" />
    </div>
  );
};

export default FlavanoidsStats;

import React from "react";
import TableComponents from "../common/table";
import wineData from "../wineData.json";

const GammaStats = () => {
  // Here, calculating Gamma from the given dataset and formula given: Gamma = (Ash * Hue) / Magnesium.
  const prepareGammaDataSet = wineData?.map((it: any) => {
    const calculateGamma = (it?.Ash * it?.Hue) / it?.Magnesium;
    return {
      ...it,
      Gamma: parseFloat(calculateGamma?.toFixed(2)),
    };
  });
  return (
    <div className="display-flex justify-content-center align-items-center">
      <TableComponents data={prepareGammaDataSet} statsFor="Gamma" />
    </div>
  );
};

export default GammaStats;

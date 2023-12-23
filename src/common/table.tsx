import React, { useEffect, useState } from "react";
import "../assets/table.css";
import { measureDataSet } from "../helpers/utils";

interface DataPropsSet {
  data?: any;
  statsFor?: string;
}

const TableComponents = ({ data = [], statsFor = "" }: DataPropsSet) => {
  // this is a helper functions which takes a data set and a property as an argument and return the calculated desired results
  const returnedDataSets = measureDataSet(data, statsFor);
  return (
    <div className="w-600">
      <table id="stats">
        <tr>
          <th>{`${statsFor} Measure`}</th>
          {/* Render table headers for each class of Alcohol */}
          {returnedDataSets?.map(({ alcoholClass }) => (
            <th key={alcoholClass}>{`Class-${alcoholClass}`}</th>
          ))}
        </tr>

        {/* Render Mean Median Mode for each class of Alcohol */}
        <tr>
          <td>{`${statsFor} Mean`}</td>
          {returnedDataSets?.map(({ mean }) => (
            <td key={mean}>{mean?.toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td>{`${statsFor} Median`}</td>
          {returnedDataSets?.map(({ median }) => (
            <td key={median}>{median?.toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td>{`${statsFor} Mode`}</td>
          {returnedDataSets?.map(({ mode }) => (
            <td key={mode}>{mode?.toFixed(3)}</td>
          ))}
        </tr>
      </table>
    </div>
  );
};

export default TableComponents;

import React from "react";
import { Link } from "react-router-dom";
import "./YearSelector.scss";

export const YearSelector = ({ teamName }) => {
  let years = [];
  const startYear = parseInt(process.env.REACT_APP_DATA_START_YEAR, 10);
  const endYear = parseInt(process.env.REACT_APP_DATA_END_YEAR, 10);

  for (let i = startYear; i < endYear; i++) {
    years.push(i);
  }

  return (
    <ol className="years-list">
      {years.map((year) => (
        <li key={year}>
          <Link to={`/teams/${teamName}/matches/${year}`}>{year}</Link>
        </li>
      ))}
    </ol>
  );
};

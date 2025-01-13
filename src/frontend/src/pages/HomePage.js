import { React, useEffect, useState } from "react";
import { TeamTile } from "../components/TeamTile";
import "./HomePage.scss";
import iplIcon from "../components/IconImages/Cricket_black_logo.png";

export const HomePage = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetchAllTeams = async () => {
      const response = await fetch(
        `http://localhost:8080/team` // Template literal for dynamic URL
      );
      const data = await response.json();
      console.log(data);
      setTeams(data);
    };
    fetchAllTeams();
  }, []);

  return (
    <div className="HomePage">
      <div className="header-section">
        <a href="/">
          <img className="ipl-icon" src={iplIcon} alt="IPL-ICON" />
        </a>
        <h1 className="app-name">IPL Dashboard</h1>
      </div>
      <div className="team-grid">
        {teams.map((team) => (
          <TeamTile className="team-name" teamName={team.teamName}></TeamTile>
        ))}
      </div>
    </div>
  );
};

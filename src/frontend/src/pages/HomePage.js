import { React, useEffect, useState } from "react";
import { TeamTile } from "../components/TeamTile";
import "./HomePage.scss";
import iplIcon from "../components/IconImages/Cricket_black_logo.png";
import headerBackG from "../components/IconImages/Header Background.jpg";

export const HomePage = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetchAllTeams = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_ROOT_URL}/team` // Template literal for dynamic URL
      );
      const data = await response.json();
      console.log(data);
      setTeams(data);
    };
    fetchAllTeams();
  }, []);

  return (
    <div className="HomePage">
      <img
        className="header-BackGround"
        src={headerBackG}
        alt="header Background"
      />
      <div className="header-section">
        <a href="/">
          <img className="ipl-icon" src={iplIcon} alt="IPL-ICON" />
        </a>
        <h1 className="app-name">IPL Dashboard</h1>
      </div>
      <div className="team-grid">
        {teams.map((team) => (
          <TeamTile
            key={team.id}
            className="team-name"
            teamName={team.teamName}
          ></TeamTile>
        ))}
      </div>
    </div>
  );
};

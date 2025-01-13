import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";
import { PieChart } from "react-minimal-pie-chart";
import { Link } from "react-router-dom";
import iplIcon from "../components/IconImages/Cricket_black_logo.png";

import "./TeamPage.scss";

export const TeamPage = () => {
  const [team, setTeam] = useState({ matches: [] });
  const { teamName } = useParams();

  useEffect(() => {
    const fetchTeam = async () => {
      const response = await fetch(
        `http://localhost:8080/team/${teamName}` // Template literal for dynamic URL
      );
      const data = await response.json();
      console.log(data);
      setTeam(data);
    };
    fetchTeam();
  }, [teamName]);

  if (!team || !team.teamName) {
    return <h1>Team not Found</h1>;
  }

  return (
    <div className="TeamPage">
      <div className="team-name-section">
        <a href="/">
          <img src={iplIcon} alt="IPL Logo" className="ipl-Icon" />
        </a>
        <h1 className="team-name">{team.teamName}</h1>

        <div className="win-loss-section">
          <PieChart
            data={[
              {
                title: "Losses",
                value: team.totalMatches - team.totalWins,
                color: "#a34d5d",
              },
              { title: "Wins", value: team.totalWins, color: "#4da375" },
            ]}
          />
        </div>
      </div>

      {/* {team.matches.length > 0 ? ( */}
      {/* <> */}

      <div className="match-detail-section">
        <h1 className="Latest-Matches">Latest Matches</h1>
        <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
      </div>
      {team.matches.slice(1).map((match) => (
        <MatchSmallCard key={match.id} teamName={team.teamName} match={match} />
      ))}
      <div className="more-link">
        <Link
          to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}
        >
          More >
        </Link>
      </div>
      <div className="bake-TO-Dashbord">
        <Link to={"../"}>Back to Dashboard</Link>
      </div>
    </div>
  );
};

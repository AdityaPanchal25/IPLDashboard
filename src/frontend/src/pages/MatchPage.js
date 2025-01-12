import React, { useEffect, useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { useParams } from 'react-router-dom';

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        `http://localhost:8080/team/${teamName}/matches?year=${year}`
      );
      const data = await response.json();
      console.log(data);
      setMatches(data);
    };
    fetchMatches();
  }, [teamName, year]); // Include teamName and year in the dependency array

  return (
    <div className="MatchPage">
      <h1>Match Page</h1>
      {matches.map((match) => (
        <MatchDetailCard key={match.id} teamName={teamName} match={match} />
      ))}
    </div>
  );
};

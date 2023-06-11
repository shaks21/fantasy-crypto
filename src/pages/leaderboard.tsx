import React from "react";
import Layout from "./components/Layout";

const LeagueStandingsPage: React.FC = () => {
  // Assume you have league standings, participant rankings, and match results data
  const leagueStandings = [
    { team: "Team A", wins: 5, losses: 1 },
    { team: "Team B", wins: 4, losses: 2 },
    { team: "Team C", wins: 3, losses: 3 },
    // ...
  ];

  const participantRankings = [
    { name: "Player 1", points: 100 },
    { name: "Player 2", points: 90 },
    { name: "Player 3", points: 80 },
    // ...
  ];

  const matchResults = [
    { team1: "Team A", team2: "Team B", winner: "Team A", score: "3-2" },
    { team1: "Team C", team2: "Team D", winner: "Team C", score: "2-1" },
    // ...
  ];

  return (
    <Layout>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">League Standings</h2>
        <table className="w-full mb-8">
          <thead>
            <tr>
              <th className="text-left">Team</th>
              <th className="text-left">Wins</th>
              <th className="text-left">Losses</th>
            </tr>
          </thead>
          <tbody>
            {leagueStandings.map((team, index) => (
              <tr key={index}>
                <td>{team.team}</td>
                <td>{team.wins}</td>
                <td>{team.losses}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-2xl font-bold mb-4">Participant Rankings</h2>
        <table className="w-full mb-8">
          <thead>
            <tr>
              <th className="text-left">Player</th>
              <th className="text-left">Points</th>
            </tr>
          </thead>
          <tbody>
            {participantRankings.map((player, index) => (
              <tr key={index}>
                <td>{player.name}</td>
                <td>{player.points}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-2xl font-bold mb-4">Match Results</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Team 1</th>
              <th className="text-left">Team 2</th>
              <th className="text-left">Winner</th>
              <th className="text-left">Score</th>
            </tr>
          </thead>
          <tbody>
            {matchResults.map((match, index) => (
              <tr key={index}>
                <td>{match.team1}</td>
                <td>{match.team2}</td>
                <td>{match.winner}</td>
                <td>{match.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default LeagueStandingsPage;

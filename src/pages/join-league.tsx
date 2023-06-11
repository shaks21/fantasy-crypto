import React, { useState, ChangeEvent, FormEvent } from "react";
import Layout from "./components/Layout";

const JoinLeaguePage: React.FC = () => {
  const [leagueCode, setLeagueCode] = useState("");

  const handleLeagueCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLeagueCode(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("League Code:", leagueCode);
    // Reset form field
    setLeagueCode("");
  };

  return (
    <Layout>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Join a League</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="leagueCode" className="block text-gray-700 font-bold mb-2">
              League Code:
            </label>
            <input
              type="text"
              id="leagueCode"
              value={leagueCode}
              onChange={handleLeagueCodeChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition duration-300"
          >
            Join League
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default JoinLeaguePage;

import React, { useState, ChangeEvent, FormEvent } from "react";
import Layout from "./components/Layout";

const CreateLeaguePage: React.FC = () => {
  const [leagueName, setLeagueName] = useState("");
  const [leagueType, setLeagueType] = useState("");

  const handleLeagueNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLeagueName(event.target.value);
  };

  const handleLeagueTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLeagueType(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("League Name:", leagueName);
    console.log("League Type:", leagueType);
    // Reset form fields
    setLeagueName("");
    setLeagueType("");
  };

  return (
    <Layout>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Create a League</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="leagueName" className="block text-gray-700 font-bold mb-2">
              League Name:
            </label>
            <input
              type="text"
              id="leagueName"
              value={leagueName}
              onChange={handleLeagueNameChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="leagueType" className="block text-gray-700 font-bold mb-2">
              League Type:
            </label>
            <select
              id="leagueType"
              value={leagueType}
              onChange={handleLeagueTypeChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            >
              <option value="">Select League Type</option>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition duration-300"
          >
            Create League
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CreateLeaguePage;

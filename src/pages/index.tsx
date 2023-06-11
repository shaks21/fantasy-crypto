import React from "react";
import Link from "next/link";
import Layout from "./components/Layout";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-gray-500 to-red-500">
        <h1 className="text-4xl text-white font-bold mb-6">
          Welcome to Fantasy Crypto!
        </h1>
        <div className="max-w-lg text-center">
          <p className="text-lg text-white mb-4">
            Experience the excitement of fantasy cryptocurrency trading.
            Compete with other traders and climb the leaderboard to win amazing
            prizes.
          </p>
          <p className="text-lg text-white mb-8">
            Sign up or log in to get started!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Link
            href="/login"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log in
          </Link>
          <p className="text-white mt-4">
            Don't have an account?{" "}
            <Link href="/register" className="underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

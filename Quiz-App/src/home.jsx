import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz");
  };

  return (
    <>
      <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100 px-2">
        <div className="border-4 border-gray-400 p-4 sm:p-8 rounded-xl bg-white shadow-lg text-center w-full max-w-xs sm:max-w-md md:max-w-lg">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Welcome Agba Dev's Quiz
          </h1>
          <p className="text-gray-700 mb-2 text-base sm:text-lg">
            The World's Hardest ever Quiz!
          </p>
          <button
            className="mt-4 w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-base sm:text-lg transition"
            onClick={handleStartQuiz}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import "./App.css";

import { useNavigate } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function Quiz() {

  function getRandomQuestions(arr, n) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  }

  const allQuestions = [
    {
      question: "Which region was the first to be unlocked?",
      options: ["Sumeru", "Mondstadt", "Liyue", "Inazuma"],
      answer: "Mondstadt",
    },
    {
      question: "Who is the Geo Archon?",
      options: ["Raiden Shogun", "Zhongli", "Albedo", "Childe"],
      answer: "Zhongli",
    },
    {
      question: "Which character is known as the Tone-Deaf Bard?",
      options: ["Venti", "Klee", "Kaeya", "Lisa"],
      answer: "Venti",
    },
    {
      question: "Which currency is used to make wishes?",
      options: ["Primogems", "Mora", "Resin", "Stardust"],
      answer: "Primogems",
    },
    {
      question: "Which character uses a Hydro Vision?",
      options: ["Xingqiu", "Diluc", "Amber", "Noelle"],
      answer: "Xingqiu",
    },
    {
      question: "What is the name of the Traveler's twin sibling?",
      options: ["Lumine", "Aether", "Paimon", "Dainsleif"],
      answer: "Lumine",
    },
    {
      question: "Which element does Diluc use?",
      options: ["Electro", "Pyro", "Cryo", "Geo"],
      answer: "Pyro",
    },
    {
      question: "What is the name of Mondstadt's Archon?",
      options: ["Zhongli", "Ei", "Venti", "Nahida"],
      answer: "Venti",
    },
    {
      question: "Who is the Electro Archon?",
      options: ["Venti", "Ei", "Raiden", "Beidou"],
      answer: "Ei",
    },
    {
      question: "Which region is Inazuma based on?",
      options: ["China", "Japan", "France", "India"],
      answer: "Japan",
    },
    {
      question: "What is the maximum Adventure Rank?",
      options: ["50", "60", "55", "70"],
      answer: "60",
    },
    {
      question: "Who founded the Knights of Favonius?",
      options: ["Jean", "Varka", "Vennessa", "Kaeya"],
      answer: "Vennessa",
    },
    {
      question: "What weapon type does Xiao use?",
      options: ["Claymore", "Sword", "Polearm", "Bow"],
      answer: "Polearm",
    },
    {
      question:
        "Which character is known as the 'Uncrowned Lord of the Ocean'?",
      options: ["Beidou", "Kokomi", "Tartaglia", "Jean"],
      answer: "Beidou",
    },
    {
      question: "What is the name of the traveler's floating companion?",
      options: ["Paimon", "Amber", "Lisa", "Lumine"],
      answer: "Paimon",
    },
    {
      question:
        "Which character is the Acting Grand Master of the Knights of Favonius?",
      options: ["Lisa", "Kaeya", "Jean", "Eula"],
      answer: "Jean",
    },
    {
      question: "What is Xiangling's signature dish?",
      options: [
        "Wanmin Fish",
        "Black-Back Perch Stew",
        "Jueyun Chili Chicken",
        "Chef's Special",
      ],
      answer: "Chef's Special",
    },
    {
      question: "What is the name of the Fatui Harbinger also known as Childe?",
      options: ["Dottore", "Tartaglia", "Scaramouche", "Capitano"],
      answer: "Tartaglia",
    },
    {
      question: "Which region is known as the 'Nation of Contracts'?",
      options: ["Inazuma", "Mondstadt", "Liyue", "Sumeru"],
      answer: "Liyue",
    },
    {
      question: "What element does Mona use?",
      options: ["Hydro", "Cryo", "Pyro", "Electro"],
      answer: "Hydro",
    },
    {
      question: "Which character is the Geo Archon?",
      options: ["Albedo", "Zhongli", "Ningguang", "Noelle"],
      answer: "Zhongli",
    },
    {
      question: "Which of these weapons is a catalyst?",
      options: [
        "Skyward Atlas",
        "Primordial Jade Winged-Spear",
        "The Black Sword",
        "Favonius Greatsword",
      ],
      answer: "Skyward Atlas",
    },
    {
      question: "What is Klee's element?",
      options: ["Anemo", "Pyro", "Electro", "Geo"],
      answer: "Pyro",
    },
    {
      question: "Which character is known for their obsession with dandelions?",
      options: ["Jean", "Venti", "Barbara", "Amber"],
      answer: "Venti",
    },
    {
      question: "Who is Fischl's raven companion?",
      options: ["Noir", "Nightwing", "Oz", "Shadow"],
      answer: "Oz",
    },
    {
      question: "What is Albedo's official title?",
      options: ["Chief Alchemist", "Captain", "Scribe", "Librarian"],
      answer: "Chief Alchemist",
    },
    {
      question: "What is Ayaka's full name?",
      options: [
        "Kamisato Ayaka",
        "Ayaka Himeko",
        "Takanashi Ayaka",
        "Ayaka Shirasagi",
      ],
      answer: "Kamisato Ayaka",
    },
    {
      question: "Which character comes from Natlan?",
      options: ["Amber", "Hu Tao", "Xinyan", "Itto"],
      answer: "Xinyan",
    },
    {
      question: "What is the main ingredient in 'Adeptus' Temptation'?",
      options: ["Fish", "Tofu", "Crab", "Lotus Head"],
      answer: "Crab",
    },
    {
      question: "Which boss drops the 'Dvalin's Claw' material?",
      options: ["Stormterror", "Andrius", "Childe", "Azhdaha"],
      answer: "Stormterror",
    },
    {
      question: "Who is the head of the Yashiro Commission?",
      options: ["Ayato", "Thoma", "Ayaka", "Kujou Sara"],
      answer: "Ayato",
    },
    {
      question: "What is the name of the organization that Ningguang leads?",
      options: [
        "Adepti Order",
        "Jade Pavilion",
        "Liyue Qixing",
        "Wangshu Bureau",
      ],
      answer: "Liyue Qixing",
    },
    {
      question: "Which of these characters does not use a bow?",
      options: ["Tighnari", "Ganyu", "Chongyun", "Yoimiya"],
      answer: "Chongyun",
    },
    {
      question: "What is the name of Sumeru's Dendro Archon?",
      options: ["Nahida", "Rukkhadevata", "Cyno", "Alhaitham"],
      answer: "Nahida",
    },
    {
      question: "What is Paimon's favorite food?",
      options: [
        "Sticky Honey Roast",
        "Teyvat Fried Egg",
        "Fisherman's Toast",
        "Sweet Madame",
      ],
      answer: "Sticky Honey Roast",
    },
    // ... add 45 more questions in same format
  ];

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setQuestions(getRandomQuestions(allQuestions, 7));
  }, []);

  const handleAnswer = (option) => {
    setSelected(option);
    const correct = option === questions[current].answer;
    setIsCorrect(correct);
    if (correct) setScore((prev) => prev + 1);
    setAnswers ((prev) => [
      ...prev,
      {
        question: questions[current].question,
        selected: option,
        correct: questions[current].answer,
        isCorrect: correct,
        options: questions[current].options,
      },
    ]);
  };

  const handleNext = () => {
    setSelected(null);
    setIsCorrect(null);
    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setQuestions(getRandomQuestions(allQuestions, 7));
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResults(false);
    setIsCorrect(null);
    setAnswers([]);
  }

  localStorage.setItem("quizScore", score);
  localStorage.setItem("quizQuestions", JSON.stringify(questions));

  if (questions.length === 0) return <div>Loading...</div>;

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-2">
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-lg flex flex-col items-center">
        {!showResults ? (
          <>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center text-blue-700">
              Quiz
            </h2>
            <div className="w-full flex flex-col items-center">
              <h3 className="font-semibold mb-4 text-base sm:text-lg md:text-xl text-red-500 text-center break-words whitespace-pre-line">
                {questions[current].question}
              </h3>
              {questions[current].options.map((option, idx) => {
                const isSelected = selected === option;
                const isCorrectOption = option === questions[current].answer;
                return (
                  <button
                    key={idx}
                    className={`w-full sm:w-4/5 md:w-3/5 text-center px-4 sm:px-5 py-2 sm:py-3 my-2 rounded-lg border transition-all duration-200
                      bg-gray-100 hover:bg-blue-200 border-gray-300
                      shadow text-base sm:text-lg
                      ${
                        isSelected
                          ? isCorrectOption
                            ? "bg-green-500 text-white border-green-700 scale-105"
                            : "bg-red-500 text-white border-red-700 scale-105"
                          : "bg-gray-100 hover:bg-blue-200 border-gray-300"
                      }
                      ${
                        selected
                          ? "cursor-not-allowed opacity-80"
                          : "hover:scale-105"
                      }
                      shadow
                    `}
                    disabled={!!selected}
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </button>
                );
              })}
              {selected && (
                <div
                  className={`mt-4 text-base sm:text-lg font-bold ${
                    isCorrect ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {isCorrect ? (
                    "Correct!"
                  ) : (
                    <>
                      Wrong! <br />
                      <span className="text-gray-700 font-normal">
                        The correct answer is:{" "}
                      </span>
                      <span className="font-bold">
                        {questions[current].answer}
                      </span>
                    </>
                  )}
                </div>
              )}
              {selected && (
                <button
                  className="mt-6 w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-bold text-base sm:text-lg hover:bg-blue-700 transition"
                  onClick={handleNext}
                >
                  {current === questions.length - 1
                    ? "Finish Quiz"
                    : "Next Question"}
                </button>
              )}
            </div>
            <div className="mt-4 text-gray-500 text-xs sm:text-sm">
              Question {current + 1} of {questions.length}
            </div>
          </>
        ) : (
          <div className="text-center w-full">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-green-700">
              Quiz Complete!
            </h2>
            <div className="text-lg sm:text-xl font-bold mb-6">
              Your Score: {score} / {questions.length}
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 text-blue-700">
              Summary
            </h3>
            <div className="space-y-4">
              {answers.map((ans, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-lg shadow text-purple-500 text-left ${
                    ans.isCorrect
                      ? "bg-green-100 border-l-4 border-green-500"
                      : "bg-red-100 border-l-4 border-red-500"
                  }`}
                >
                  <div className="font-semibold break-words whitespace-pre-line text-sm sm:text-base">
                    {idx + 1}. {ans.question}
                  </div>
                  <div className="text-sm sm:text-base">
                    Your answer:{" "}
                    <span
                      className={
                        ans.isCorrect
                          ? "text-green-700 font-bold"
                          : "text-red-700 font-bold"
                      }
                    >
                      {ans.selected}
                    </span>
                  </div>
                  {!ans.isCorrect && (
                    <div className="text-sm sm:text-base">
                      Correct answer:{" "}
                      <span className="text-green-700 font-bold">
                        {ans.correct}
                      </span>
                    </div>
                  )}
                </div>
              ))}
              <button
                className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold text-base sm:text-lg hover:bg-blue-700 transition"
                onClick={restartQuiz}
              >
                Restart Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz

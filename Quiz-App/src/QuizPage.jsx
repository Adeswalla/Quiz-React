import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Questions() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch("http://localhost:5000/api/questions")
        .then((res) => res.json())
        .then((data) => {
          setQuestions(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching questions:", err);
          setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
      <>
        {/* <h1>Quiz Page</h1> */}

        <div>
          {questions.map((q) => (
            <div key={q.id}>
              <h3>{q.question}</h3>
              {/* Render options/answers here */}
            </div>
          ))}
        </div>
      </>
    );
}

export default Questions;
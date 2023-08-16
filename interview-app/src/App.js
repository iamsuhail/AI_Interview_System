import React, { useState, useRef } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import UploadButton from "./components/UploadButton";
import QuestionCard from "./components/QuestionCard";
import AnswerCard from "./components/AnswerCard";
import "./App.css";
function App() {
  const [topic, setTopic] = useState("");
  const [questions, setQuestions] = useState("");

  const generateQuestions = async () => {
    try {
      const apiKey = "OpenAI_API_key";
      const prompt = `Generate 2 technical interview questions related to ${topic}.`;

      const response = await axios.post(
        "https://api.openai.com/v1/engines/text-davinci-003/completions",
        {
          prompt,
          max_tokens: 50,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      setQuestions(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className="main">
      <Navbar />
      <div className="container">
      <UploadButton />
      <div className="question_input">
      <input
          type="text"
          visibility="hidden"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter a topic"
        />
        <button onClick={generateQuestions}>Generate Questions</button>
        <QuestionCard questions={questions} />
      </div>

        <AnswerCard/>
      </div>
      
    </div>
  );
}

export default App;

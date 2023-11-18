import React, { useState, useRef } from "react";
import axios from "axios";
import QuestionCard from "./components/QuestionCard";
import AnswerCard from "./components/AnswerCard";
import "./App.css";
function App() {
  const [topic, setTopic] = useState("");
  const [questions, setQuestions] = useState([]);

  const generateQuestions = async () => {
    try {
      const apiKey = "";
      const prompt = `Generate 5 technical interview questions related to ${topic}.`;

      const response = await axios.post(
        "https://api.openai.com/v1/engines/text-davinci-003/completions",
        {
          prompt,
          max_tokens: 150,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      setQuestions([...response.data.choices.map(choice => choice.text)]);
    } catch (error) {
      console.error(error);
    }
  };
  

    const [selectedFile, setSelectedFile] = useState(null);
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };
  
    const handleUpload = () => {
      // Add your file upload logic here
      if (selectedFile) {
        console.log('Uploading file:', selectedFile);
        // You can use libraries like axios or fetch to send the file to the server
        // Example using fetch:
        // const formData = new FormData();
        // formData.append('file', selectedFile);
        // fetch('your-upload-url', {
        //   method: 'POST',
        //   body: formData,
        // })
        //   .then(response => response.json())
        //   .then(data => console.log(data))
        //   .catch(error => console.error('Error uploading file:', error));
      } else {
        console.warn('No file selected');
      }
    };

  return (
    <div className="container">

      
      
      <nav>
        <div className="logo_container">
        <a href="">Interview System</a>
        </div>

        <div className="menu_container">
        <ul>
          <li>
            <a href="" className="active">Practice</a>
          </li>

          <li>
            <a href=""> Pricing</a>
          </li>
          <li>
            <a href=""> Contact</a>
          </li>
        </ul>
        </div>
        
        <div className="btn_container">        
        <button className="btn">
         Log In
        </button>     
        </div>      
      </nav>
      {/* hero section */}
      <div className="content">
      
        <div class="hero-text">
        <p className="content_para">AI Based Interview Platform</p>
        <h1>Questions based on <span className="content_span">Resume</span></h1>
        <h1>Easy And Fast.</h1>
        <p className="content_alice">A Platform where you can prepare for your job without any hasse</p>
        
        <div className="file-upload-container">
          
      <input
        type="file"
        id="file-input"
        onChange={handleFileChange}
        className="file-input"
      />
      <label htmlFor="file-input" className="file-label">
        {selectedFile ? selectedFile.name : 'Choose a file'}
      </label>
      <button onClick={handleUpload} className="upload-button">
        Upload
      </button>
      
    </div>
        <form onSubmit={(e) => { e.preventDefault();}}>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter a topic"
        />
        <button onClick={generateQuestions} className="btn_sec" type="submit">Generate</button>
        
        </form>
        
      </div>
      
      </div>

        
        <div className="question_output">
          <div className="hehe">
            <QuestionCard questions={questions} />
            <h1></h1>
          <AnswerCard/>
          </div>
        </div>
      </div>
      
  );
}

export default App;

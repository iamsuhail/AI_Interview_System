import React from 'react';
import './QuestionCard.css';

// import { useSpeechSynthesis } from 'react-speech-kit';

function QuestionCard({ questions }) {
    // const { speak } = useSpeechSynthesis();
    return (
        <div className="question-card">
            <h2>Generated Questions</h2>
            <p>{questions}</p>
            {/* <button onClick={() => speak({ text: questions })}>Play Questions</button> */}
        </div>
    );
}

export default QuestionCard;

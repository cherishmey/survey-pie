import { useState } from "react";

import ProgressIndicator from "./components/ProgressIndicator";
import QuestionBox from "./components/QuestionBox";

function App() {
  const questions = [
    { title: '問1', desc: '説明1', type: 'text', required: false,  options: {} },
    { title: '問2', desc: '説明1', type: 'text', required: true, options: {}},
  ];

  const step = 0;

  const [answers, setAnswers] = useState([]);

  return (
    <div className="App">
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answers={answers[step]}
        setAnswer={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          });
        }}
        />
    </div>
  );
}

export default App;

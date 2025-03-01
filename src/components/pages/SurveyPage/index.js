import { useState } from "react";
import { useParams } from "react-router-dom";

import ProgressIndicator from "../../ProgressIndicator";
import QuestionBox from "../../QuestionBox";

function SurveyPage() {
    const params = useParams();

    const questions = [
        { title: '問1', desc: '説明1', type: 'text', required: false,  options: {} },
        { title: '問2', desc: '説明1', type: 'text', required: true, options: {}},
      ];
      const step = parseInt(params.step);
      const [answers, setAnswers] = useState([]);

    return (
        <>
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
        </>
    );
}

export default SurveyPage;
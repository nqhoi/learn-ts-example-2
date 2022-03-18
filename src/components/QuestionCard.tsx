import React from "react";
import { AnswerObject } from "../App";
import "./QuestionCard.css";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <div className="QuestionCard">
      <p className="QuestionCard-number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p
        className="QuestionCard-question"
        dangerouslySetInnerHTML={{ __html: question }}
      />
      <div className="QuestionCard-answer">
        {answers.map((answer) => (
          <div key={answer}>
            <button
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;

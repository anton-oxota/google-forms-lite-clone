import type { Answer, Question } from "../../../../app/api/generated";
import css from "./MultipleVariantsAnswer.module.css";

function MultipleVariantsAnswer({
    question,
    answer,
}: {
    question: Question;
    answer: Answer["answer"];
}) {
    return (
        <ul className={css.variants}>
            {question.data.map((q, index) => {
                return (
                    <li key={`${q.value}${index}`}>
                        <input
                            readOnly
                            type={
                                question.type === "CHECKBOX"
                                    ? "checkbox"
                                    : "radio"
                            }
                            checked={answer.includes(q.value) || false}
                        />
                        {q.value}
                    </li>
                );
            })}
        </ul>
    );
}

export default MultipleVariantsAnswer;

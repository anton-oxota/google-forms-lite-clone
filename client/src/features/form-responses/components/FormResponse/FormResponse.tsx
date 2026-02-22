import css from "./FormResponse.module.css";
import MultipleVariantsAnswer from "../MultipleVariantsAnswer/MultipleVariantsAnswer";
import type { Answer, Question } from "../../../../app/api/generated";

function FormResponse({
    questions,
    answers,
}: {
    questions: Question[];
    answers: Answer[];
}) {
    return (
        <div className={css.response}>
            {questions.map((q, i) => (
                <div key={`${q.title}${i}`} className={css.question}>
                    <h3>{`${q.title} ${q.isRequired ? "*" : ""}`}</h3>

                    <div className={css.answer}>
                        {q.type === "TEXT" && (
                            <p>{answers[i]?.answer[0] || "No answer"}</p>
                        )}
                        {q.type === "DATE" && (
                            <p>{answers[i]?.answer[0] || "No answer"}</p>
                        )}

                        {(q.type === "CHECKBOX" ||
                            q.type === "MULTIPLE_CHOICE") && (
                            <MultipleVariantsAnswer
                                question={q}
                                answer={answers[i].answer}
                            />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FormResponse;

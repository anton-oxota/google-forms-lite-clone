import css from "./MultipleVariantsQuestion.module.css";
import type { Control } from "react-hook-form";
import type { Question } from "../../../../app/api/generated";
import type { Answers } from "../../../../shared/types/Form";

function MultipleVariantsQuestion({
    question,
    control,
    parentIndex,
}: {
    parentIndex: number;
    question: Question;
    control: Control<Answers>;
}) {
    const isCheckbox = question.type === "CHECKBOX";

    return (
        <ul className={css.variants}>
            {question.data.map(({ value }, index) => {
                return (
                    <li key={`${value}${index}`} className={css.variant}>
                        <label>
                            <input
                                type={isCheckbox ? "checkbox" : "radio"}
                                value={value || ""}
                                {...control.register(
                                    `answers.${parentIndex}.answer`,
                                    { required: question.isRequired },
                                )}
                            />
                            {value}
                        </label>
                    </li>
                );
            })}
        </ul>
    );
}

export default MultipleVariantsQuestion;

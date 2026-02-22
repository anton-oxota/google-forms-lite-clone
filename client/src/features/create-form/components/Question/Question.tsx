import css from "./Question.module.css";

import type {
    Form,
    Question as QuestionType,
} from "../../../../app/api/generated";
import { questionTitleValidation } from "../../utils/formInputsValidation";
import {
    useWatch,
    type Control,
    type FieldErrors,
    type UseFormSetValue,
} from "react-hook-form";
import MultipleVariantsList from "../MultipleVariantsList/MultipleVariantsList";

function Question({
    control,
    parentIndex,
    inputErrors,
    setValue,
    onDelete,
}: {
    control: Control<Form>;
    parentIndex: number;
    inputErrors?: FieldErrors<Form["questions"][number]>;
    setValue: UseFormSetValue<Form>;
    onDelete: () => void;
}) {
    const { questions } = useWatch({
        control,
    });
    const type = questions![parentIndex].type;

    function handleChangeSelect(e: React.ChangeEvent<HTMLSelectElement>) {
        const { value } = e.target;

        if (value === "TEXT" || value === "DATE") {
            setValue(`questions.${parentIndex}.data`, []);
        } else {
            setValue(`questions.${parentIndex}.data`, [{ value: "" }]);
        }
    }

    return (
        <div className={css.question}>
            <div className={css.info}>
                <div className={css.questionTitle}>
                    <input
                        type="text"
                        placeholder="Question name"
                        {...control.register(
                            `questions.${parentIndex}.title`,
                            questionTitleValidation,
                        )}
                    />
                    {inputErrors?.title && (
                        <p className={css.error}>{inputErrors.title.message}</p>
                    )}
                </div>

                <select
                    {...control.register(`questions.${parentIndex}.type`, {
                        onChange: handleChangeSelect,
                    })}
                >
                    <option value="TEXT">Text</option>
                    <option value="MULTIPLE_CHOICE">Multiple Choice</option>
                    <option value="CHECKBOX">Checkbox</option>
                    <option value="DATE">Date</option>
                </select>

                {control._getFieldArray("questions").length > 1 && (
                    <button type="button" onClick={onDelete}>
                        Close
                    </button>
                )}
            </div>

            <div className={css.variants}>
                {/* TEXT */}
                {type === "TEXT" && (
                    <input type="text" placeholder="Answer" disabled />
                )}

                {/* "MULTIPLE_CHOICE" ||  "CHECKBOX" */}
                {(type === "MULTIPLE_CHOICE" || type === "CHECKBOX") && (
                    <MultipleVariantsList
                        control={control}
                        type={type}
                        parentIndex={parentIndex}
                        inputErrors={
                            inputErrors?.data as FieldErrors<
                                QuestionType["data"]
                            >
                        }
                    />
                )}

                {/* "DATE" */}
                {type === "DATE" && <input type="date" disabled />}
            </div>

            <label className={css.requiredInput}>
                <input
                    type="checkbox"
                    {...control.register(`questions.${parentIndex}.isRequired`)}
                />
                Required
            </label>
        </div>
    );
}

export default Question;

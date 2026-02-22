import css from "./MultipleVariantsList.module.css";

import { useFieldArray, type Control, type FieldErrors } from "react-hook-form";
import type {
    Form,
    Question,
    QuestionTypes,
} from "../../../../app/api/generated";
import { variantValidation } from "../../utils/formInputsValidation";

function MultipleVariantsList({
    control,
    type,
    inputErrors,
    parentIndex,
}: {
    control: Control<Form>;
    type: QuestionTypes;
    // inputErrors?: FieldErrors<Form["questions"][number]["data"]>;
    inputErrors?: FieldErrors<Question["data"]>;
    parentIndex: number;
}) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: `questions.${parentIndex}.data`,
    });

    function handleAddInput() {
        append({ value: "" });
    }

    return (
        <>
            <ul className={css.inputs}>
                {fields.map((field, index) => {
                    return (
                        <li key={field.id}>
                            <input
                                type={
                                    type === "CHECKBOX" ? "checkbox" : "radio"
                                }
                                disabled
                            />
                            <input
                                type="text"
                                placeholder="Variant"
                                {...control.register(
                                    `questions.${parentIndex}.data.${index}.value`,
                                    variantValidation,
                                )}
                            />
                            {inputErrors?.[index] && (
                                <p className={css.error}>
                                    {inputErrors?.[index].value?.message}
                                </p>
                            )}

                            {fields.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => remove(index)}
                                >
                                    Close
                                </button>
                            )}
                        </li>
                    );
                })}
            </ul>
            <button
                className={css.addInputButton}
                type="button"
                onClick={handleAddInput}
            >
                Add input
            </button>
        </>
    );
}

export default MultipleVariantsList;

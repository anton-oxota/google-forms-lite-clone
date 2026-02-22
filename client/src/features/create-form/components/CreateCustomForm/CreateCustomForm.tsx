import css from "./CreateCustomForm.module.css";

import { useCreateFormMutation } from "../../../../app/api/enhanced";
import { QuestionTypes, type Form } from "../../../../app/api/generated";
import Question from "../Question/Question";

import { useFieldArray, useForm } from "react-hook-form";
import { titleValidation } from "../../utils/formInputsValidation";

function CreateCustomForm() {
    const [trigger, { isLoading, isSuccess, isError }] =
        useCreateFormMutation();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        control,
    } = useForm<Form>({
        defaultValues: {
            questions: [{ title: "", type: QuestionTypes.Text, data: [] }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "questions",
    });

    function handleFormSubmit(data: Form) {
        trigger(data);
    }

    function handleAddQuestion() {
        append({
            type: QuestionTypes.Text,
            title: "",
            data: [],
            isRequired: false,
        });
    }

    function handleDeleteQuestion(index: number) {
        remove(index);
    }

    return (
        <form className={css.form} onSubmit={handleSubmit(handleFormSubmit)}>
            <div className={css.info}>
                <input
                    className={css.inputTitle}
                    type="text"
                    placeholder="Form title"
                    {...register("title", titleValidation)}
                />
                {errors.title && (
                    <p className={css.error}>{errors.title.message}</p>
                )}

                <textarea
                    placeholder="Description"
                    {...register("description")}
                ></textarea>
            </div>

            <div className={css.questions}>
                {fields.map((field, index) => {
                    return (
                        <Question
                            key={field.id}
                            parentIndex={index}
                            control={control}
                            inputErrors={errors.questions?.[index]}
                            setValue={setValue}
                            onDelete={() => handleDeleteQuestion(index)}
                        />
                    );
                })}
            </div>

            <div className={css.actions}>
                <button type="button" onClick={handleAddQuestion}>
                    Add question
                </button>
                <button type="submit" disabled={isLoading}>
                    Submit
                </button>
            </div>

            <div className={css.resultText}>
                {isSuccess && <p>Form Created</p>}
                {isError && <p className={css.error}>Fail to create form</p>}
            </div>
        </form>
    );
}

export default CreateCustomForm;

import css from "./FillFormPage.module.css";

import MultipleVariantsQuestion from "../../componenets/MultipleVariantsQuestion/MultipleVariantsQuestion";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { QuestionTypes, useGetFormQuery } from "../../../../app/api/generated";
import { useSubmitResponseMutation } from "../../../../app/api/enhanced";
import type { Answers } from "../../../../shared/types/Form";

function FillFormPage() {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetFormQuery(
        { formId: id! },
        { skip: !id },
    );
    const [trigger, result] = useSubmitResponseMutation();

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Answers>();

    function hanedleFormSubmit(data: Answers) {
        const answers = data.answers.map((a) => {
            return Array.isArray(a.answer) ? a : { answer: [a.answer || ""] };
        });

        trigger({
            answers,
            formId: id!,
        });
    }

    return (
        <main>
            <div className="container">
                {isLoading && !data && <p>Loading...</p>}
                {isError && <p>Fail to load form</p>}
                {data?.form && (
                    <form onSubmit={handleSubmit(hanedleFormSubmit)}>
                        <div className={css.info}>
                            <h1>{data.form.title}</h1>
                            <p>{data.form.description}</p>
                        </div>

                        <div className={css.questions}>
                            {data.form.questions.map((q, index) => {
                                const isMultipleVariantsQuestion =
                                    q.type === "CHECKBOX" ||
                                    q.type === "MULTIPLE_CHOICE";
                                return (
                                    <div key={`${q}${index}`}>
                                        <div className={css.question}>
                                            <h3>{`${q.title} ${q.isRequired ? "*" : ""}`}</h3>

                                            {!isMultipleVariantsQuestion && (
                                                <input
                                                    type={
                                                        q.type ===
                                                        QuestionTypes.Text
                                                            ? "text"
                                                            : "date"
                                                    }
                                                    {...register(
                                                        `answers.${index}.answer.0`,
                                                        {
                                                            required:
                                                                q.isRequired,
                                                        },
                                                    )}
                                                />
                                            )}

                                            {isMultipleVariantsQuestion && (
                                                <MultipleVariantsQuestion
                                                    parentIndex={index}
                                                    control={control}
                                                    question={q}
                                                />
                                            )}
                                        </div>
                                        {errors.answers?.[index] && (
                                            <p className={css.error}>
                                                Question is required *
                                            </p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <button
                            className={css.submitButton}
                            type="submit"
                            disabled={result.isLoading}
                        >
                            Submit
                        </button>

                        <div className={css.resultText}>
                            {result.isSuccess && <p>Form Submitted</p>}
                            {result.isError && (
                                <p className={css.error}>Submit error</p>
                            )}
                        </div>
                    </form>
                )}
            </div>
        </main>
    );
}

export default FillFormPage;

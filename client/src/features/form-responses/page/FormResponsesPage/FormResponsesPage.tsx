import css from "./FormResponsesPage.module.css";

import { useParams } from "react-router";
import { useGetResponsesQuery } from "../../../../app/api/enhanced";
import FormResponse from "../../components/FormResponse/FormResponse";

function FormResponsesPage() {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetResponsesQuery(
        { formId: id! },
        { skip: !id },
    );

    return (
        <main>
            <div className="container">
                <h1>Form Responses</h1>

                <div className={css.responses}>
                    {isLoading && <p>Loging...</p>}
                    {isError && <p>Fail to load responses</p>}
                    {!isLoading && !data?.responses.length && (
                        <p>No responses</p>
                    )}
                    {data &&
                        data.responses.map(({ form, answers, id }) => {
                            return (
                                <FormResponse
                                    key={id}
                                    questions={form.questions}
                                    answers={answers}
                                />
                            );
                        })}
                </div>
            </div>
        </main>
    );
}

export default FormResponsesPage;

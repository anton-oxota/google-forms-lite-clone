import css from "./FormItem.module.css";
import type { GetFormsQuery } from "../../../../app/api/generated";

import { Link } from "react-router";

function FormItem({ form }: { form: GetFormsQuery["forms"][0] }) {
    return (
        <div className={css.formItem}>
            <div className={css.info}>
                <h2>{form.title}</h2>
                <p>{form.description || "No description"}</p>
            </div>

            <div className={css.actions}>
                <Link to={`/forms/${form.id}/fill`}>View Form</Link>
                <Link to={`/forms/${form.id}/responses`}>View Responses</Link>
            </div>
        </div>
    );
}

export default FormItem;

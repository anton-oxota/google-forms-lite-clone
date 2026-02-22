import css from "./HomePage.module.css";

import FormItem from "../../components/FormItem/FormItem";
import { useGetFormsQuery } from "../../../../app/api/enhanced";

function HomePage() {
    const { data, isLoading, isError } = useGetFormsQuery();

    return (
        <main>
            <div className="container">
                <div className={css.formItemsList}>
                    {isLoading && <p>Loading...</p>}
                    {isError && <p>Fail to load forms</p>}
                    {!isLoading && !data?.forms.length && (
                        <p>There is no active forms</p>
                    )}
                    {data &&
                        data.forms.map((form) => {
                            return <FormItem key={form.id} form={form} />;
                        })}
                </div>
            </div>
        </main>
    );
}

export default HomePage;

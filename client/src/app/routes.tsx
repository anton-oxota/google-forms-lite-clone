import { createBrowserRouter } from "react-router";

import CreateFormPage from "../features/create-form/pages/CreateFormPage/CreateFormPage";
import FillFormPage from "../features/fill-form/pages/FillFormPage/FillFormPage";
import FormResponsesPage from "../features/form-responses/page/FormResponsesPage/FormResponsesPage";
import HomePage from "../features/home/pages/HomePage/HomePage";
import RootLayout from "../shared/layouts/RootLayout/RootLayout";

const router = createBrowserRouter([
    {
        path: "",
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "/forms/new", element: <CreateFormPage /> },
            { path: "/forms/:id/fill", element: <FillFormPage /> },
            { path: "/forms/:id/responses", element: <FormResponsesPage /> },
        ],
    },
]);

export { router };

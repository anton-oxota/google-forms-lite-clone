import { api as generatedApi } from "./generated";

export const api = generatedApi.enhanceEndpoints({
    addTagTypes: ["Form", "Response"],
    endpoints: {
        GetForms: {
            providesTags: ["Form"],
        },
        CreateForm: {
            invalidatesTags: ["Form"],
        },
        GetResponses: {
            providesTags: ["Response"],
        },
        SubmitResponse: {
            invalidatesTags: ["Response"],
        },
    },
});

export const {
    useGetFormsQuery,
    useCreateFormMutation,
    useGetResponsesQuery,
    useSubmitResponseMutation,
} = api;

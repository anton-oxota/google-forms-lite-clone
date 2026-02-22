import type { Answer } from "../../app/api/generated";

// export type QuestionTypes = `TEXT` | `MULTIPLE_CHOICE` | `CHECKBOX` | `DATE`;

// export type Form = {
//     title: string;
//     description: string;
//     questions: {
//         title: string;
//         isRequired: boolean;
//         type: QuestionTypes;
//         data: { value: string }[];
//     }[];
// };

export type Answers = {
    answers: Answer[];
};

// export type Responses = {
//     id: string;
//     formId: string;
//     form: Form;
//     answers: { answer: string[] }[];
// };

import { Form, QuestionTypes } from "../../client/src/app/api/generated";

export const forms: Form[] = [
    {
        id: "1",
        title: "Job Application Form",
        description: "Please fill out all required fields.",
        questions: [
            {
                title: "What is your full name?",
                isRequired: true,
                type: QuestionTypes.Text,
                data: [],
            },
            {
                title: "What is your birth date?",
                isRequired: true,
                type: QuestionTypes.Date,
                data: [],
            },
            {
                title: "What is your highest level of education?",
                isRequired: true,
                type: QuestionTypes.MultipleChoice,
                data: [
                    { value: "High School" },
                    { value: "Bachelor's Degree" },
                    { value: "Master's Degree" },
                    { value: "PhD" },
                ],
            },
            {
                title: "Which programming languages do you know?",
                isRequired: false,
                type: QuestionTypes.Checkbox,
                data: [
                    { value: "JavaScript" },
                    { value: "Python" },
                    { value: "Java" },
                    { value: "C#" },
                ],
            },
        ],
    },
    {
        id: "2",
        title: "Event Registration",
        description: "Register for the annual tech conference.",
        questions: [
            {
                title: "Your email address",
                isRequired: true,
                type: QuestionTypes.Text,
                data: [],
            },
            {
                title: "Meal preference",
                isRequired: false,
                type: QuestionTypes.MultipleChoice,
                data: [
                    { value: "Standard" },
                    { value: "Vegetarian" },
                    { value: "Vegan" },
                ],
            },
        ],
    },
];

export const responses = [
    {
        id: 1,
        formId: 1,
        answers: [
            { answer: ["Alex"] },
            { answer: ["2026-02-12"] },
            { answer: ["Bachelor's Degree"] },
            { answer: ["JavaScript"] },
        ],
    },
];

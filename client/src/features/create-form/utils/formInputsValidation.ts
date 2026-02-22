import type { RegisterOptions } from "react-hook-form";
import type { Form } from "../../../app/api/generated";

export const titleValidation: RegisterOptions<Form, "title"> = {
    required: {
        value: true,
        message: "Field is required *",
    },
    minLength: {
        value: 5,
        message: "Min length is 10",
    },
};

export const questionTitleValidation: RegisterOptions<
    Form,
    `questions.${number}.title`
> = {
    required: {
        value: true,
        message: "Field is required *",
    },
};

export const variantValidation: RegisterOptions<
    Form,
    `questions.${number}.data.${number}.value`
> = {
    required: {
        value: true,
        message: "Field is required *",
    },
};

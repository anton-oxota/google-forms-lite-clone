import { api } from './baseApi';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Answer = {
  __typename?: 'Answer';
  answer: Array<Scalars['String']['output']>;
};

export type AnswerInput = {
  answer: Array<Scalars['String']['input']>;
};

export type Form = {
  __typename?: 'Form';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  questions: Array<Question>;
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createForm?: Maybe<Form>;
  submitResponse?: Maybe<Response>;
};


export type MutationCreateFormArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  questions: Array<InputMaybe<QuestionInput>>;
  title: Scalars['String']['input'];
};


export type MutationSubmitResponseArgs = {
  answers?: InputMaybe<Array<InputMaybe<AnswerInput>>>;
  formId: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  form: Form;
  forms: Array<Form>;
  responses: Array<Response>;
};


export type QueryFormArgs = {
  id: Scalars['ID']['input'];
};


export type QueryResponsesArgs = {
  formId: Scalars['ID']['input'];
};

export type Question = {
  __typename?: 'Question';
  data: Array<QuestionData>;
  isRequired: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  type: QuestionTypes;
};

export type QuestionData = {
  __typename?: 'QuestionData';
  value: Scalars['String']['output'];
};

export type QuestionDataInput = {
  value: Scalars['String']['input'];
};

export type QuestionInput = {
  data: Array<InputMaybe<QuestionDataInput>>;
  isRequired: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
  type: QuestionTypes;
};

export enum QuestionTypes {
  Checkbox = 'CHECKBOX',
  Date = 'DATE',
  MultipleChoice = 'MULTIPLE_CHOICE',
  Text = 'TEXT'
}

export type Response = {
  __typename?: 'Response';
  answers: Array<Answer>;
  form: Form;
  formId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
};

export type CreateFormMutationVariables = Exact<{
  title: Scalars['String']['input'];
  questions: Array<QuestionInput> | QuestionInput;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateFormMutation = { __typename?: 'Mutation', createForm?: { __typename?: 'Form', description?: string | null, title: string, questions: Array<{ __typename?: 'Question', title: string, type: QuestionTypes, isRequired: boolean, data: Array<{ __typename?: 'QuestionData', value: string }> }> } | null };

export type GetFormQueryVariables = Exact<{
  formId: Scalars['ID']['input'];
}>;


export type GetFormQuery = { __typename?: 'Query', form: { __typename?: 'Form', title: string, id: string, description?: string | null, questions: Array<{ __typename?: 'Question', title: string, type: QuestionTypes, isRequired: boolean, data: Array<{ __typename?: 'QuestionData', value: string }> }> } };

export type GetFormsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFormsQuery = { __typename?: 'Query', forms: Array<{ __typename?: 'Form', id: string, title: string, description?: string | null, questions: Array<{ __typename?: 'Question', type: QuestionTypes, title: string, isRequired: boolean, data: Array<{ __typename?: 'QuestionData', value: string }> }> }> };

export type GetResponsesQueryVariables = Exact<{
  formId: Scalars['ID']['input'];
}>;


export type GetResponsesQuery = { __typename?: 'Query', responses: Array<{ __typename?: 'Response', id: string, form: { __typename?: 'Form', id: string, title: string, description?: string | null, questions: Array<{ __typename?: 'Question', title: string, isRequired: boolean, type: QuestionTypes, data: Array<{ __typename?: 'QuestionData', value: string }> }> }, answers: Array<{ __typename?: 'Answer', answer: Array<string> }> }> };

export type SubmitResponseMutationVariables = Exact<{
  formId: Scalars['ID']['input'];
  answers?: InputMaybe<Array<InputMaybe<AnswerInput>> | InputMaybe<AnswerInput>>;
}>;


export type SubmitResponseMutation = { __typename?: 'Mutation', submitResponse?: { __typename?: 'Response', id: string, formId: string, answers: Array<{ __typename?: 'Answer', answer: Array<string> }> } | null };


export const CreateFormDocument = `
    mutation CreateForm($title: String!, $questions: [QuestionInput!]!, $description: String) {
  createForm(title: $title, questions: $questions, description: $description) {
    description
    title
    questions {
      title
      type
      isRequired
      data {
        value
      }
    }
  }
}
    `;
export const GetFormDocument = `
    query GetForm($formId: ID!) {
  form(id: $formId) {
    title
    id
    description
    questions {
      title
      type
      isRequired
      data {
        value
      }
    }
  }
}
    `;
export const GetFormsDocument = `
    query GetForms {
  forms {
    id
    title
    description
    questions {
      type
      title
      isRequired
      data {
        value
      }
    }
  }
}
    `;
export const GetResponsesDocument = `
    query GetResponses($formId: ID!) {
  responses(formId: $formId) {
    id
    form {
      id
      title
      description
      questions {
        title
        isRequired
        type
        data {
          value
        }
      }
    }
    answers {
      answer
    }
  }
}
    `;
export const SubmitResponseDocument = `
    mutation SubmitResponse($formId: ID!, $answers: [AnswerInput]) {
  submitResponse(formId: $formId, answers: $answers) {
    id
    formId
    answers {
      answer
    }
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    CreateForm: build.mutation<CreateFormMutation, CreateFormMutationVariables>({
      query: (variables) => ({ document: CreateFormDocument, variables })
    }),
    GetForm: build.query<GetFormQuery, GetFormQueryVariables>({
      query: (variables) => ({ document: GetFormDocument, variables })
    }),
    GetForms: build.query<GetFormsQuery, GetFormsQueryVariables | void>({
      query: (variables) => ({ document: GetFormsDocument, variables })
    }),
    GetResponses: build.query<GetResponsesQuery, GetResponsesQueryVariables>({
      query: (variables) => ({ document: GetResponsesDocument, variables })
    }),
    SubmitResponse: build.mutation<SubmitResponseMutation, SubmitResponseMutationVariables>({
      query: (variables) => ({ document: SubmitResponseDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useCreateFormMutation, useGetFormQuery, useLazyGetFormQuery, useGetFormsQuery, useLazyGetFormsQuery, useGetResponsesQuery, useLazyGetResponsesQuery, useSubmitResponseMutation } = injectedRtkApi;


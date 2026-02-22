export const typeDefs = `#graphql

    type Form {
        id: ID!
        title: String!
        description: String
        questions: [Question!]!
    }
    
    enum QuestionTypes {
        TEXT  
        MULTIPLE_CHOICE  
        CHECKBOX  
        DATE
    }

    type Question {
        title: String!        
        isRequired: Boolean!
        type: QuestionTypes!
        data: [QuestionData!]!
    }

    type QuestionData {
        value: String!
    }




    type Response {
        id: ID!
        form: Form!
        formId: ID!
        answers: [Answer!]!
    }

    type Answer {
        answer: [String!]!
    }




    type Query {
        forms: [Form!]!
        form(id: ID!): Form!
        responses(formId: ID!): [Response!]!
    }




    input QuestionInput {
        title: String!
        type: QuestionTypes!
        isRequired: Boolean!
        data: [QuestionDataInput]!
    }

    input QuestionDataInput {
        value: String!
    }



    input AnswerInput {
        answer: [String!]!
    }

    type Mutation {
        createForm(title: String!, description: String, questions: [QuestionInput]!): Form
        submitResponse(formId: ID!, answers: [AnswerInput]): Response
    }
`;

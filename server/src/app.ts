import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema";
import { forms, responses } from "./db";
import { Form, Response } from "../../client/src/app/api/generated";

const resolvers = {
    Query: {
        forms() {
            return forms;
        },

        form(_, args: { id: number }) {
            return (
                forms.find(
                    (form) => form.id.toString() === args.id.toString(),
                ) || []
            );
        },

        responses(_, args: { formId: number }) {
            return responses.filter(
                (r) => r.formId.toString() === args.formId.toString(),
            );
        },
    },

    Response: {
        form(parent: Response) {
            return forms.find(
                (form) => form.id.toString() === parent.formId.toString(),
            );
        },
    },

    Mutation: {
        createForm(_, args: Form) {
            const newForm = {
                ...args,
                id: Date.now().toString(),
            };

            forms.push(newForm);
            return newForm;
        },

        submitResponse(
            _,
            args: { formId: number; answers: { answer: string[] }[] },
        ) {
            const newReponse = {
                ...args,
                id: Date.now(),
            };
            responses.push(newReponse);
            return newReponse;
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 3000 } });

console.log("Server is running on 3000 port");

import gql from "graphql-tag";
import { useMutation } from '@apollo/react-hooks';
import { CreateContent, CreateContentVariables } from "../types/CreateContent";

const MUTATION = gql`
    mutation CreateContent($content: String!) {
        createContent(content: $content) {
            id
            content
        }
    }
`;

export const useCreateContentMutation = () => useMutation<CreateContent, CreateContentVariables>(MUTATION);

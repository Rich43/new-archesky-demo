import ApolloClient from 'apollo-boost';

export const client = (token: string) => new ApolloClient({
    request: operation => {
        operation.setContext({
            headers: {
                Authorization: token ? token : '',
                Host: window.location.host
            }
        });
    },
    uri: `/graphql`
});

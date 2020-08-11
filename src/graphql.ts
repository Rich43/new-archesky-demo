import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
    request: operation => {
        const token = window.sessionStorage.getItem('token');
        operation.setContext({
            headers: {
                Authorization: token ? token : ''
            }
        });
    },
    uri: `/graphql`
});

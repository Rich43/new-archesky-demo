import React, { FunctionComponent } from 'react';
import './App.css';
import ApolloProvider from 'react-apollo/ApolloProvider';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import { client } from "./graphql";
import { BrowserRouter } from 'react-router-dom';
import { KeycloakProvider, useKeycloak } from '@react-keycloak/web'
import keycloak from "./keycloak";
import { RouteSwitcher } from "./components/RouteSwitcher";

export const AppInner: FunctionComponent = () => {
    const [keycloak, initialized] = useKeycloak();
    let token = '';
    if (initialized && keycloak.token) {
        token = keycloak.token;
    }
    const gqlClient = client(token);
    return (
        <ApolloProvider client={gqlClient}>
            <ApolloHooksProvider client={gqlClient}>
                <BrowserRouter basename="/app">
                    <RouteSwitcher/>
                </BrowserRouter>
            </ApolloHooksProvider>
        </ApolloProvider>
    );
};

function App() {
    return (
        <KeycloakProvider keycloak={keycloak}>
            <AppInner />
        </KeycloakProvider>
    );
}

export default App;

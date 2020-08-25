import React from 'react';
import './App.css';
import ApolloProvider from 'react-apollo/ApolloProvider';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import { client } from "./graphql";
import { BrowserRouter } from 'react-router-dom';
import { KeycloakProvider } from '@react-keycloak/web'
import keycloak from "./keycloak";
import { RouteSwitcher } from "./components/RouteSwitcher";

function App() {
    return (
        <ApolloProvider client={client}>
            <ApolloHooksProvider client={client}>
                <KeycloakProvider keycloak={keycloak}>
                    <BrowserRouter basename="/app">
                        <RouteSwitcher />
                    </BrowserRouter>
                </KeycloakProvider>
            </ApolloHooksProvider>
        </ApolloProvider>
    );
}

export default App;

import React, { FunctionComponent, useEffect, useState } from 'react';
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
    const [token, setToken] = useState('');
    useEffect(() => {
        if (initialized && keycloak.token) {
            setToken(keycloak.token);
        }
    }, [initialized, keycloak.token]);
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

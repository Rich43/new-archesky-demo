import React, { FunctionComponent, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { KeycloakProvider, useKeycloak } from '@react-keycloak/web'
import keycloak from "./keycloak";
import { RouteSwitcher } from "./components/RouteSwitcher";

export const AppInner: FunctionComponent = () => {
    const [keycloak, initialized] = useKeycloak();
    const [, setToken] = useState('');
    useEffect(() => {
        if (initialized && keycloak.token) {
            setToken(keycloak.token);
        }
    }, [initialized, keycloak.token]);
    return (
        <BrowserRouter basename="/app">
            <RouteSwitcher/>
        </BrowserRouter>
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

import React from 'react';
import './App.css';
import ApolloProvider from 'react-apollo/ApolloProvider';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import { client } from "./graphql";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import { Navigation } from "./components/nav/Navigation";
import { KeycloakProvider } from '@react-keycloak/web'
import keycloak from "./keycloak";
import { UserPage } from "./components/UserPage";
import { ConfigureEnvironment } from "./components/ConfigureEnvironment";
import { LoginRedirect } from './components/LoginRedirect';
import { Login } from './components/Login';

export const HOME = '/';
export const USER = '/user';
export const LOGIN = '/login';
export const LOGIN_REDIRECT = '/login_redirect';

function App() {
    return (
        <ApolloProvider client={client}>
            <ApolloHooksProvider client={client}>
                <KeycloakProvider keycloak={keycloak}>
                    <ConfigureEnvironment />
                    <BrowserRouter>
                        <Navigation/>
                        <Switch>
                            <Route path={LOGIN_REDIRECT} component={LoginRedirect}/>
                            <Route path={LOGIN} component={Login}/>
                            <Route path={USER} component={UserPage}/>
                            <Route path={HOME} component={Home}/>
                        </Switch>
                    </BrowserRouter>
                </KeycloakProvider>
            </ApolloHooksProvider>
        </ApolloProvider>
    );
}

export default App;

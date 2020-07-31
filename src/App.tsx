import React from 'react';
import './App.css';
import ApolloProvider from 'react-apollo/ApolloProvider';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import { client } from "./graphql";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import { KeycloakProvider } from '@react-keycloak/web'
import keycloak from "./keycloak";
import { UserPage } from "./components/UserPage";
import { LoginRedirect } from './components/LoginRedirect';
import { Login } from './components/Login';
import { Base } from './components/Base';

export const HOME = '/';
export const USER = '/user';
export const LOGIN = '/login';
export const LOGIN_REDIRECT = '/login_redirect';

function App() {
    return (
        <ApolloProvider client={client}>
            <ApolloHooksProvider client={client}>
                <KeycloakProvider keycloak={keycloak}>
                    <BrowserRouter>
                        <Switch>
                            <Route path={LOGIN_REDIRECT} render={ () => <LoginRedirect /> }/>
                            <Route path={LOGIN} render={ () => <Base><Login /></Base> }/>
                            <Route path={USER} render={ () => <Base><UserPage /></Base> }/>
                            <Route path={HOME} render={ () => <Base><Home /></Base> }/>
                        </Switch>
                    </BrowserRouter>
                </KeycloakProvider>
            </ApolloHooksProvider>
        </ApolloProvider>
    );
}

export default App;

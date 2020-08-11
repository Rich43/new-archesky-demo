import React, { FunctionComponent } from 'react';
import { Route, Switch } from "react-router-dom";
import { LoginRedirect } from "./LoginRedirect";

export const LOGIN_REDIRECT = '/login_redirect';

export const RedirectRoute: FunctionComponent = ({ children }) => {
    return (
        <>
            <Switch>
                <Route path={LOGIN_REDIRECT} component={LoginRedirect}/>
            </Switch>
        </>
    );
};

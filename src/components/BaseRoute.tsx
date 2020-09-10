import React, { FunctionComponent } from 'react';
import { Navigation } from './nav/Navigation';
import { Route, Switch } from "react-router-dom";
import { Login } from "./Login";
import { UserPage } from "./UserPage";
import Home from "./Home";

export const HOME = '/';
export const USER = '/user';
export const LOGIN = '/login';

export const BaseRoute: FunctionComponent = ({ children }) => {
    return (
        <>
            <Navigation/>
            <Switch>
                <Route path={LOGIN} component={Login}/>
                <Route path={USER} component={UserPage}/>
                <Route path={HOME} component={Home}/>
            </Switch>
        </>
    );
};

import React, { FunctionComponent } from 'react';
import useRouter from "use-react-router";
import { LOGIN_REDIRECT, RedirectRoute } from "./RedirectRoute";
import { BaseRoute } from "./BaseRoute";


export const RouteSwitcher: FunctionComponent = ({ children }) => {
    const { location } = useRouter();
    console.log(location.pathname);
    return (
        <>
            { location.pathname === LOGIN_REDIRECT ? <RedirectRoute /> : <BaseRoute />}
        </>
    );
};

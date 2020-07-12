import React, { FunctionComponent } from "react";
import { useKeycloak } from "@react-keycloak/web";

export const ConfigureEnvironment: FunctionComponent = () => {
    const [keycloak, initialized] = useKeycloak();
    if (initialized && keycloak.token) {
        window.sessionStorage.setItem('token', keycloak.token);
    }
    return (<></>);
};

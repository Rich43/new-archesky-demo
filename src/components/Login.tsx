import React, { FunctionComponent } from "react";
import { useKeycloak } from "@react-keycloak/web";

export const Login: FunctionComponent = () => {
    const [keycloak, initialized] = useKeycloak();
    if (!initialized) {
        return (
          <div>Loading...</div>
        );
    }
    return (
        <div>
            <div>{`User is ${
                !keycloak.authenticated ? 'NOT ' : ''
            }authenticated`}</div>
            {!!keycloak.authenticated && (
                <button type="button" onClick={() => keycloak.logout()}>
                    Logout
                </button>
            )}
            <button type="button" onClick={() => keycloak.login()}>
                Login
            </button>
        </div>
    );
};

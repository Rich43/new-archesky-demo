import React, { FunctionComponent } from "react";
import { useKeycloak } from "@react-keycloak/web";

export const UserPage: FunctionComponent = () => {
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
            <pre>
                { JSON.stringify(keycloak, null, 4) }
            </pre>
        </div>
    );
};

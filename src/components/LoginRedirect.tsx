import React, { FunctionComponent } from 'react';
import { useKeycloak } from '@react-keycloak/web';

export const LoginRedirect: FunctionComponent = () => {
    const [keycloak, initialized] = useKeycloak();
    if (!initialized) {
        return (
          <div>Loading...</div>
        );
    }
    keycloak.login();
    return (<></>);
};

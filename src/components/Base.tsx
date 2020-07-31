import React, { FunctionComponent } from 'react';
import { ConfigureEnvironment } from './ConfigureEnvironment';
import { Navigation } from './nav/Navigation';

export const Base: FunctionComponent = ({ children }) => {
    return (
        <>
            <ConfigureEnvironment />
            <Navigation/>
            { children }
        </>
    );
};

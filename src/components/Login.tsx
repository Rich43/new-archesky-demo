import React, { FunctionComponent } from 'react';
import { Box, makeStyles, Theme } from '@material-ui/core';
import { LOGIN_REDIRECT } from "./RedirectRoute";

const useStyles = makeStyles<Theme, {}>((theme) => {
    return ({
        iframe: {
            height: '100%',
            width: "100%",
            margin: 0,
            padding: 0,
            border: 0
        },
    });
});

export const Login: FunctionComponent = () => {
    const classes = useStyles({});
    return (
        <Box display="flex" flex="1">
            <iframe src={LOGIN_REDIRECT} title="SSO Login" className={classes.iframe}>
            </iframe>
        </Box>
    );
};

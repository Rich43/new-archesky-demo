import React, {FunctionComponent} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import {SideDrawer} from './SideDrawer';

const useStyles = makeStyles({
    title: {
        flexGrow: 1
    }
});

export const Navigation: FunctionComponent = () => {
    const classes = useStyles();
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <SideDrawer />
                <Typography variant='h6' className={classes.title}>Pynguins</Typography>
            </Toolbar>
        </AppBar>
    );
};

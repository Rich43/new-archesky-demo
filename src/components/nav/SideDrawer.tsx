import React, { FunctionComponent, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Close from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import useReactRouter from 'use-react-router';
import { HOME, LOGIN, USER } from "../BaseRoute";

const useStyles = makeStyles({
    list: {
        width: 200
    },
    logo: {
        width: 140,
        height: 105.5
    }
});

export const SideDrawer: FunctionComponent = () => {
    const [open, setOpen] = useState(false);
    const { history } = useReactRouter();
    const classes = useStyles();
    const menu = [
        [HOME, 'Home'],
        [USER, 'User Area'],
        [LOGIN, 'Login']
    ];
    let count = 0;

    return (
        <>
            <IconButton
                edge='start'
                color='inherit'
                aria-label='Open drawer'
                onClick={(() => setOpen(true))}>
                <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <Box display='flex' flexDirection='column'>
                    <Box display='flex' flexDirection='row'>
                        <Box display='flex' flexGrow={1} />
                        <IconButton onClick={() => setOpen(false)}>
                            <Close />
                        </IconButton>
                    </Box>
                    <List className={classes.list}>
                        {menu.map(item => {
                            count++;
                            return (
                                <ListItem button key={count} onClick={() => {
                                    history.push(item[0]);
                                    setOpen(false);
                                }}>
                                    <ListItemText>{item[1]}</ListItemText>
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

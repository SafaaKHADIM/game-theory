import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import {useStyles } from './style';




function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function HideAppBar(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <div className={classes.root}>
                    <AppBar position="static" className={classes.paperContainer}>
                        <Toolbar className={classes.toolbar}>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="open drawer"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography className={classes.title} variant="h5" noWrap>

                            </Typography>
                            <IconButton aria-label="search" color="inherit">
                                <SearchIcon />
                            </IconButton>
                            <IconButton aria-label="display more actions" edge="end" color="inherit">
                                <MoreIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </div>
            </HideOnScroll>

        </React.Fragment>
    );
}

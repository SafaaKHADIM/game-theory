import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useStyles  } from './style';
import { withStyles } from "@material-ui/core/styles/withStyles";
import TextButtons from "../TextButtons/TextButtons";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import PropTypes from "prop-types";

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
export default function ButtonAppBar(props) {
    const classes = useStyles();

    return (
        <HideOnScroll>
        <div className={{root:classes.root}}>
            <AppBar position="static" color="default" className={classes.paperContainer}   >
                <Toolbar variant="dense" >
                    <TextButtons style={{ marginLeft: '50px' }}>Courses</TextButtons>
                    <TextButtons style={{ marginLeft: '120px' }}>Exercices</TextButtons>
                    <TextButtons style={{ marginLeft: '150px' }}>Examples</TextButtons>
                    <TextButtons style={{ marginLeft: '140px' }}>Statistiques</TextButtons>
                    <TextButtons style={{ marginLeft: '130px' }}>author</TextButtons>

                </Toolbar>
            </AppBar>
        </div>
        </HideOnScroll>
    );
}
//export default withStyles(classes)(ButtonAppBar);
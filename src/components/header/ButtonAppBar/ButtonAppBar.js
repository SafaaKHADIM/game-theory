import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useStyles } from './style';
import TextButtons from "../TextButtons/TextButtons";



export default function ButtonAppBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent" className={classes.paperContainer}>
                <Toolbar variant="dense" >
                    <TextButtons>Courses</TextButtons>
                    <TextButtons>Exercices</TextButtons>
                    <TextButtons>Examples</TextButtons>
                    <TextButtons>Statistiques</TextButtons>
                    <TextButtons>author</TextButtons>

                </Toolbar>
            </AppBar>
        </div>
    );
}

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

//const classes = useStyles();
export default function ButtonAppBar(props) {
    const classes = useStyles();

    return (
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
    );
}
//export default withStyles(classes)(ButtonAppBar);
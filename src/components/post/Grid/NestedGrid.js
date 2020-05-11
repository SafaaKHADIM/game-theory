import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useStyles} from "./style";



export default function NestedGrid() {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>ads</Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>ads</Paper>
                </Grid>

            </React.Fragment>
        );
    }
    function Ads() {
        return (
            <React.Fragment>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>ads</Paper>
                </Grid>

            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={1}>
                    <Ads />
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <FormRow />
                </Grid>

            </Grid>
        </div>
    );
}

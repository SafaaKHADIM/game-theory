import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useStyles} from "../TextButtons/style";



export default function TextButtons(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button href={props.href} style={props.style}>
                <Typography variant="h6" gutterBottom >
                    {props.children}
                </Typography>
            </Button>

        </div>
    );
}

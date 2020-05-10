import React from 'react';

import Button from '@material-ui/core/Button';
import {useStyles} from "../TextButtons/style";



export default function TextButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button href="#text-buttons">Default</Button>

        </div>
    );
}

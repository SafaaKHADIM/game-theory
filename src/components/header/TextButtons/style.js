import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        colorPrimary:'#ff6d00',
    },
    colorPrimary:{
        color:'#ff6d00',
    }
}));
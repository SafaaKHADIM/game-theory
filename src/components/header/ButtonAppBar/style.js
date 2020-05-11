import { makeStyles } from '@material-ui/core/styles';
import Image from '../../../images/background2.png';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height:'20%',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    paperContainer: {
        backgroundImage: `url(${Image})`,

    },
    colorDefault: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
    },

}));
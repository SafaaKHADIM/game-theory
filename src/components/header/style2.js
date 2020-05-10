import { makeStyles } from '@material-ui/core/styles';
import Image from '../../images/background.png';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    paperContainer: {
        backgroundImage: `url(${Image})`
    },

}));
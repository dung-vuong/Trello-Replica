import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
    inputPlace: {
        margin: theme.spacing(1),
    },
    clearButton: {
        "&:hover": {
            backgroundColor: 'transparent'
        }
    },
}))
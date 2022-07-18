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

    inputCard: {
        borderColor: "#4169e1",
        borderWidth: "2px",
        marginTop: "9px",
        marginBottom: "3px",
        padding: theme.spacing(0,1.5,0,1.5),
    },
}))
import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
    inputCard: {
        margin: theme.spacing(1),
    },
    inputPaper: {
        borderColor: "#4169e1",
        borderWidth: "2px",
        marginTop: "9px",
        marginBottom: "3px"
    },
    input: {
        margin: theme.spacing(0,1.5,0,1.5),
    },
    clearButton: {
        "&:hover": {
            backgroundColor: 'transparent'
        }
    }
}))
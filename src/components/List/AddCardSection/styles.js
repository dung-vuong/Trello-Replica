import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
    addSection: {
        marginTop: '1em'
    },
    pageInput: {
        width: '270px',
        backgroundColor: "#ebecf0",
        padding: theme.spacing(0.5,1,0.5,1),
        margin: theme.spacing(1),
    },
    addCardButton: {
        display: "flex",
        color: "gray",
        width: '270px',
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        backgroundColor: "#ebecf0",
        boxShadow: 'none',
        "&:hover": {
            backgroundColor: 'rgba(0,0,0,.1)',
            color: "black",
        }
    },
    addListButton: {
        display: "flex",
        color: "white",
        width: '270px',
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        backgroundColor: "#0099e6",
        boxShadow: 'none',
        "&:hover": {
            backgroundColor: '#33bbff',
        }
    }
}))
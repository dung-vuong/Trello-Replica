import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
    addButton: {
        display: "flex",
        color: "gray",
        padding: theme.spacing(0.5),
        margin: theme.spacing(1),
        backgroundColor: 'transparent',
        boxShadow: 'none',
        "&:hover": {
            backgroundColor: 'rgba(0,0,0,.1)',
            color: "black",
        }
    }
}))
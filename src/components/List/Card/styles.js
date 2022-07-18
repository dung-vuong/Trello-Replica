import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
    paper: {
        padding: theme.spacing(1,1,1,2),
        margin: theme.spacing(1)
    },
    bigDash: {
        backgroundColor: "rgb(0, 121, 191)",
        width: "40px",
        height: "8px",
        marginBottom: "2px",
        fontSize: "12px",
        fontWeight: "700",
        borderRadius: "4px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    }
}))
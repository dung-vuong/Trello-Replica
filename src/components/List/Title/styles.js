import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
    title: {
        display: 'flex',
        margin: theme.spacing(2),
        '&:hover': {
            cursor: "pointer"
        }
    },
    weight: {
        fontWeight: '500',
    }
}))
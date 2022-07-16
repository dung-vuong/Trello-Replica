import React from 'react'
import { Paper, Typography, CssBaseline } from '@mui/material'
import useStyles from './styles'

const List = () => {
    const {classes} = useStyles()
    return (
        <Paper>
            <CssBaseline/>
            <Typography>
                To Do
            </Typography>
        </Paper>
    )
}

export default List
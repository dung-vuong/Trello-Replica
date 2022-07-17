import React from 'react'
import useStyles from './styles'
import { Typography } from '@mui/material'
import { MoreHorizOutlined } from '@mui/icons-material'

const Title = ({title}) => {
    const {classes} = useStyles()
    return (
        <div className={classes.title}>
            <Typography flexGrow={1}>
                {title}
            </Typography>
            <MoreHorizOutlined/>
        </div>
    )
}

export default Title
import React from 'react'
import Paper from '@mui/material/Paper'

import useStyles from './styles'

const Card = ({card}) => {
    const {classes} = useStyles()
    return (
        <div>
            <Paper className={classes.paper}>
                {card.name}
            </Paper>
        </div>
    )
}

export default Card
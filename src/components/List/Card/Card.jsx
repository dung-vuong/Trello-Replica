import React from 'react'
import Paper from '@mui/material/Paper'

import useStyles from './styles'
import { Draggable } from 'react-beautiful-dnd'

const Card = ({card, index}) => {
    const {classes} = useStyles()
    return (
        <Draggable draggableId={card.id} index={index}>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                    <Paper className={classes.paper}>
                        <div className={classes.bigDash}></div>
                        {card.name}
                    </Paper>
                </div>
            )}

        </Draggable>

    )
}

export default Card
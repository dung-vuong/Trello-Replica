import React from 'react'
import { Paper } from '@mui/material'

import Card from './Card/Card'
import Title from './Title/Title'
import AddSection from './AddCardSection/AddSection'

import useStyles from './styles'
import { Droppable } from 'react-beautiful-dnd'

const Box = ({box}) => {
    const {classes} = useStyles()
    return (
        <div>
            <Paper className={classes.root}>
                <Droppable droppableId={box.id}>
                    {(provided) => (            
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <Title title={box.title}/>
                            {box.cards.map((card,index) => (
                                <Card 
                                    key={card.id}
                                    card={card}
                                    index={index}
                                />
                            ))}
                            {provided.placeholder}
                            <AddSection boxId={box.id} type="card"/>
                        </div>     
                    )}
                </Droppable>
            </Paper>
        </div>
    )
}

export default Box
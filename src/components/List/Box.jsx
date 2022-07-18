import React from 'react'
import { Paper } from '@mui/material'

import Card from './Card/Card'
import Title from './Title/Title'
import AddSection from './AddCardSection/AddSection'

import useStyles from './styles'

const Box = ({box}) => {
    const {classes} = useStyles()
    console.log(box.title)
    return (
        <>
            <Paper className={classes.root}>
                <Title title={box.title}/>
                {box.cards.map((card) => (
                    <Card 
                        key={card.id}
                        card={card}
                    />
                ))}
                <AddSection boxId={box.id} type="card"/>
            </Paper>
        </>
    )
}

export default Box
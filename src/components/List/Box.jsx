import React from 'react'
import { Paper } from '@mui/material'

import Card from './Card/Card'
import Title from './Title/Title'
import AddCardSection from './AddCardSection/AddCardSection'

import useStyles from './styles'

const Box = ({box}) => {
    const {classes} = useStyles()
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
                <AddCardSection/>
            </Paper>
        </>
    )
}

export default Box
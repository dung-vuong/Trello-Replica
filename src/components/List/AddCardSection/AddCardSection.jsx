import React, {useState} from 'react'
import { Paper, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import InputCard from './InputCard/InputCard';

import useStyles from './styles'

const AddCardSection = () => {
    const {classes} = useStyles()

    const [open, setOpen] = useState(false)
    const clickAdd = () => {
        setOpen(!open)
    }

    return (
        <>
            {open && <InputCard clickAdd={clickAdd}/>}
            {!open &&
                <Paper className={classes.addButton} onClick={clickAdd}>
                    <AddIcon/>
                    <Typography>
                        &nbsp; Add a card
                    </Typography>
                </Paper>
            }
        </>
    )
}

export default AddCardSection
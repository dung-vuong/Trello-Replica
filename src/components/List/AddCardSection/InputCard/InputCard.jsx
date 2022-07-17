import React from 'react'
import { Paper, InputBase, Button, IconButton } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';

import useStyles from './styles'

const InputCard = ({clickAdd}) => {
    const {classes} = useStyles()
    return (
        <div className={classes.inputCard}>
            <Paper className={classes.inputPaper} variant="outlined">
                <InputBase className={classes.input} fullWidth placeholder='Enter a title for this card...'/>
            </Paper>
            
            <Button variant="contained" size="small" onClick={clickAdd}>Add card</Button>
            <IconButton className={classes.clearButton} onClick={clickAdd}>
                <ClearIcon/>
            </IconButton>
        </div>
    )
}

export default InputCard
import React, {useContext, useState} from 'react'
import { Paper, InputBase, Button, IconButton } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';

import useStyles from './styles'
import storeAPI from '../../../../utils/storeAPI';

const InputCard = ({clickAdd, setOpen, boxId, type}) => {
    const {classes} = useStyles()
    const {addCard,addList} = useContext(storeAPI)

    const [name, setName] = useState("")

    const handleOnChange = (e) => {
        setName(e.target.value)
    }

    const handleAdd = () => {
        if (type === 'card'){
            setOpen(false)
            addCard(name, boxId)
            setName("")
        }
        else{
            setOpen(false)
            addList(name)
            setName("")
        }
    }

    return (
        <div className={classes.inputPlace}>
            <Paper className={classes.inputCard} variant="outlined">
                <InputBase 
                    className={classes.input} 
                    onChange={handleOnChange}
                    value={name}
                    fullWidth 
                    placeholder={type === "card" ? 'Enter a title for this card...' : 'Enter list title...'}
                />
            </Paper>
            
            <Button variant="contained" size="small" onClick={handleAdd}>{type === "card" ? "Add card" : "Add list"}</Button>
            <IconButton className={classes.clearButton} onClick={clickAdd}>
                <ClearIcon/>
            </IconButton>
        </div>
    )
}

export default InputCard
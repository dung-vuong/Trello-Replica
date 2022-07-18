import React, {useContext, useState} from 'react'
import { Paper, Button, IconButton,TextField } from '@mui/material'
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
            <form onSubmit={handleAdd}>
                <Paper variant="outlined">
                    <TextField 
                        onChange={handleOnChange}
                        size='small'
                        value={name}
                        fullWidth 
                        autoFocus
                        placeholder={type === "card" ? 'Enter a title for this card...' : 'Enter list title...'}
                        required
                    />
                </Paper>
                <Button type="submit" variant="contained" size="small">
                    {type === "card" ? "Add card" : "Add list"}
                </Button>
                <IconButton className={classes.clearButton} onClick={clickAdd}>
                    <ClearIcon/>
                </IconButton>
            </form>
        </div>
    )
}

export default InputCard
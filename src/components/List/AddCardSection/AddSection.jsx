import React, {useState} from 'react'
import { Paper, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import InputPlace from './InputPlace/InputPlace';

import useStyles from './styles'

const AddCardSection = ({boxId, type}) => {
    const {classes} = useStyles()

    const [open, setOpen] = useState(false)
    const clickAdd = () => {
        setOpen(!open)
    }

    return (
        <div className={classes.addSection}>
            {open &&
                <>
                    {type === "card" 
                        ?
                            <InputPlace 
                                clickAdd={clickAdd} 
                                setOpen={setOpen} 
                                boxId={boxId}
                                type={type}
                            />
                        :
                            <Paper className={classes.pageInput}>
                                <InputPlace 
                                    clickAdd={clickAdd} 
                                    setOpen={setOpen} 
                                    boxId={boxId}
                                    type={type}
                                />
                            </Paper>
                    }
                </>

            }
            {!open &&
                <div>
                    <Paper className={type === "card" ? classes.addCardButton : classes.addListButton} onClick={clickAdd}>
                        <AddIcon/>
                        <Typography>
                            &nbsp; {type === "card" ? "Add a card" : "Add another list"}
                        </Typography>
                    </Paper>
                </div>
            }
        </div>
    )
}

export default AddCardSection
import { useState } from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material'
import { createWord } from '../services/wordsService';
import WordForm from './WordForm';

const AddWord = ({handleWordCreate})=> {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e)=>{
    e.preventDefault()

    const form = e.target
    const title = form.title.value
    const definition = form.definition.value
    const example = form.example.value
    const type = form.type.value
    const newWord = {title,definition,example,type}

    const savedNewWord = await createWord(newWord);
    handleWordCreate(savedNewWord);
    setOpen(false)
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} sx={{marginTop:'30px'}}>
        Add Word
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add word</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter all fields
          </DialogContentText>
          <WordForm handleSubmit={handleSubmit}/>
          <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
  }

export default AddWord

import { useState } from "react";
import { Button, Dialog, DialogActions, DialogTitle,DialogContent, DialogContentText } from "@mui/material";
import WordForm from "./WordForm";
import { updateWord } from "../services/wordsService";

const UpdateWord = ({handleWordUpdate, id, title, example, definition, type})=>{
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

    const updatedWord = await updateWord({id, ...newWord});
    handleWordUpdate(updatedWord);
    setOpen(false)
  }

  return (
    <div>
      <Button  onClick={handleClickOpen}sx={{marginBottom:'10px'}} size='small' variant='text'  color='secondary'>
        Update
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update word</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter all fields
          </DialogContentText>
          <WordForm handleSubmit={handleSubmit} title={title} example={example} type={type} definition={definition}/>
          <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );

}

export default UpdateWord

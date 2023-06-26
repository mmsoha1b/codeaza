import { TextField, DialogActions, Button } from "@mui/material";
import { useState } from "react";

const WordForm = ({handleSubmit, title, definition, example, type})=>{
  const [titleValue,setTitleValue] = useState(title)
  const [definitionValue,setDefinitionValue] = useState(definition)
  const [typeValue,setTypeValue] = useState(type)
  const [exampleValue,setExampleValue] = useState(example)

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        autoFocus
        margin="dense"
        id="title"
        label="Word"
        type="text"
        value={titleValue}
        onChange={(e)=>{setTitleValue(e.target.value)}}
        fullWidth
        variant="standard"
        />
        <TextField
        margin="dense"
        id="definition"
        label="Definition"
        type="text"
        value={definitionValue}
        onChange={(e)=>{setDefinitionValue(e.target.value)}}
        fullWidth
        variant="standard"
        />
        <TextField
        margin="dense"
        id="type"
        label="Type"
        value={typeValue}
        onChange={(e)=>{setTypeValue(e.target.value)}}
        type="text"
        fullWidth
        variant="standard"
        />
        <TextField
        margin="dense"
        id="example"
        label="Example"
        type="text"
        value={exampleValue}
        onChange={(e)=>{setExampleValue(e.target.value)}}
        fullWidth
        variant="standard"
        />
      <DialogActions>
        <Button type='submit'>OK</Button>
      </DialogActions>
    </form>
  )

}
export default WordForm;

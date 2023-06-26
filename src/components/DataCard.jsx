import {Card,CardContent,Button,Typography,CardActions} from '@mui/material'
import UpdateWord from './UpdateWord'
import { deleteWord } from '../services/wordsService'

const DataCard = ({id, title, definition, example, type, handleWordDelete, handleWordUpdate})=>{
  const deleteHandler = async()=>{
    await deleteWord(id)
    handleWordDelete(id)
  }

  return(
    <>
    <Card sx={{ width: 275, marginTop:'20px'}}>
    <CardContent>
      <Button sx={{marginBottom:'2px'}} size='small' variant='text'  color='error' onClick={deleteHandler} >
        Delete
      </Button>
      <UpdateWord id={id} title={title} definition={definition} example={example} type={type} handleWordUpdate={handleWordUpdate}/>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {type}
      </Typography>
      <Typography variant="body2">
        {definition}.
        <br />
        {`"${example}"`}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
    </Card>
  </>
)}
export default DataCard

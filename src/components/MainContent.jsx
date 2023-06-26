import DataCard from "./DataCard"
import AddWord from "./AddWord"
import {Grid} from '@mui/material'
import { useState, useEffect } from "react"
import { getWords } from "../services/wordsService"

const MainContent = ()=>{
  const [words, setWords] = useState(null)

  const handleWordCreate = (newWord)=>{
    setWords([...words, newWord])
  }

  const handleWordDelete = (deletedWordId)=>{
    const newWords = words.filter((word)=>
      word.id !== deletedWordId
    )
    setWords(newWords)
  }

  const handleWordUpdate = (updatedWord)=>{
    const newWords = words.map(word => word.id === updatedWord.id ? updatedWord : word)
    setWords(newWords)
  }

  useEffect(()=>{
    getWords().then((data)=>{
      setWords(data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  if( !words ){
    return null
  }

  return(
    <>
    <Grid container sx={{marginX:'auto', width:'80%', marginTop:'50px'}}>

      {words.map(word=>
        <Grid item xs={4} key={word.id}>
          <DataCard id={word.id} type={word.type} title={word.title} definition={word.definition} example={word.example} handleWordDelete={handleWordDelete}
                    handleWordUpdate={handleWordUpdate}/>
        </Grid>
      )}

      <Grid item xs={4}>
        <AddWord handleWordCreate={handleWordCreate} />
      </Grid>

    </Grid>
    </>
  )
}
export default MainContent

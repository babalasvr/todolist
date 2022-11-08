import React, { useState } from 'react'
import { Paper, Button, TextField } from '@mui/material'


export default function Form({addItem, props}) {

  const [ text, setText ] = useState(null)
  const [ id, setId ] = useState(0)

  const todoCreate = (text) => {
    const todoObj = {
      text: text,
      id: id
    }
    setId(id + 1)
    addItem(todoObj)
  }

  return (
    <Paper style={{ padding: '1em' }}>
      <div style={{ display: 'flex', JustifyContent: 'center' }}>
        <TextField id="outlined-basic" 
        label="Tarefa" variant="outlined"
        onChange={ (e) => setText(e.target.value) }
        fullWidth />
        <Button variant="text" 
        onClick={ () => todoCreate(text) }>ADD</Button>
      </div>
    </Paper>
  )
}

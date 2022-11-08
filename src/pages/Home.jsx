import React, { useState } from 'react'
import Form from '../components/Form';
import TodoItem from '../components/TodoItem';
import { Container, List } from '@mui/material';

export default function Home() {

    const [ todos, setTodos ] = useState([])
    
    const addItem = (todo) => {
        setTodos([ ...todos, todo ])
        // console.log(todo);
    }

    const delItem = (id) => {
        let filteredItems = todos.filter(todo => todo.id !== id )
        setTodos(filteredItems)
      }

  return (
    <>
    <Container maxWidth="xs" style={ {marginTop: "1em"} }>
      <Form addItem={addItem} delItem={delItem} />
      <List sx={{ marginTop: '1em' }}>
        {todos.map( (todo) => (
            <div key={todo.id} style={{ marginTop: '1em' }}>
                <TodoItem todo={todo} delItem={delItem}/> 
            </div>
        ))}
      </List>
    </Container>
    </>
  )
}

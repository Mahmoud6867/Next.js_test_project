"use client"
import React from 'react'
import { useEffect , useState } from 'react'


function Todo() {

    const [todo , setTodo] = useState({})

    useEffect(async()=>{
        
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const result = await response.json();

      setTodo(result);

    },[])


  return (
    <div>
      <h1>This is the response from the clint side</h1>
      <h1>{todo.title}</h1>
      <h1>{todo.id}</h1>
      <h1>{todo.userId}</h1>
    </div>
  )
}

export default Todo;
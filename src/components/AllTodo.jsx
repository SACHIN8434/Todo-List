import React from 'react'
import { useSelector } from 'react-redux'

const AllTodo = () => {

  const todos = useSelector(state => state.todo.todos);
  console.log("todos length");
  console.log(todos.length);
  return (
    <div>
      {
        todos.map((todo) => (
          <li key={todo.id}>
            {
              todo.text
            }

          </li>
        ))
      }

    </div>
  )
}

export default AllTodo
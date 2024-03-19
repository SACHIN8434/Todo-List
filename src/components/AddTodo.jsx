import React from 'react'
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { addtodo } from "../features/tode/todoSlice";

const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    function changeHandler(event) {

        setInput(event.target.value);

    }

    function clickHandler(event) {
        event.preventDefault();
        dispatch(addtodo(input));
        setInput('');
    }
    return (
       <form onSubmit={clickHandler}>
            <input onChange={changeHandler}>

            </input>
            <button>add todos</button>

       </form>
       
    )
}

export default AddTodo
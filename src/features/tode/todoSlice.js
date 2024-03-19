import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos : [{id : 1, text :"Hello"},]
}
export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {

        addtodo : (state,action)=>{
            const obj = {
                id : nanoid(),
                text : action.payload,

            }
            state.todos.push(obj);
        },

        removetodo : (state,action)=>{
            // todos = todos.filter((todo)=>{
            //     tode.id !== todo.action.id;
            // })
        },
    },
})

export const {addtodo,removetodo} = todoSlice.actions;
export default todoSlice.reducer;

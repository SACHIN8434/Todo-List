import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../features/tode/todoSlice";

export const store = configureStore({
    reducer:{
        todo : todoReducer,
    },
})
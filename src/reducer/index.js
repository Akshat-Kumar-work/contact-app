
import contactReducer from "../slices/contactSlice";
import actionReducer from "../slices/actionSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    contact: contactReducer ,
    action:  actionReducer
})

export default rootReducer;
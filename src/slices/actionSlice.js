
import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    editContact: false,
    createContact:false
}

const actionSlice = createSlice({
    name:"action",
    initialState,
    reducers:{

        setEditContact(state ,action){
            state.editContact = action.payload;
        },
        setCreateContact(state ,action){
            state.createContact = action.payload;
        }
    }
})

export const {setEditContact , setCreateContact } = actionSlice.actions;

export default actionSlice.reducer;
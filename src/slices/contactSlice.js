
import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    firstName:localStorage.getItem("firstName") ? JSON.parse(localStorage.getItem("firstName")) : [],
    lastName:localStorage.getItem("lastName") ? JSON.parse(localStorage.getItem("lastName")) : [],
    email:localStorage.getItem("email") ? JSON.parse(localStorage.getItem("email")) : [],
    status:false
}

const contactSlice = createSlice({
    name:"contact",
    initialState,
    reducers:{

        setFirstName(state ,action){
            state.firstName = action.payload;
        },
        setLastName(state ,action){
            state.lastName = action.payload;
        },
        setEmail(state ,action){
            state.email = action.payload;
        },
        setStatus(state ,action){
            state.status = action.payload;
        }
    }
})

export const {setFirstName , setLastName ,setStatus ,setEmail} = contactSlice.actions;

export default contactSlice.reducer;
import React from 'react'
import ContactList from './ContactList';
import { useDispatch , useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const Main = () => {
  const Navigate = useNavigate();

  const {firstName , lastName ,status} = useSelector( (state)=>state.contact);
  const {editContact , createContact} = useSelector( (state)=>state.action);


  return (
    <div>

    <button onClick={()=> Navigate("/dashboard/contacts/create-contact")}>
        Create Contact
    </button>

      <ContactList/>

    </div>
  )
}

export default Main
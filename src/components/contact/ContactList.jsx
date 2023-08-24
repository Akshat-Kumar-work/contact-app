import React from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {setEditContact} from "../../slices/actionSlice"; 



const ContactList = () => {
  const Navigate = useNavigate();


    const dispatch = useDispatch();

const {firstName , lastName ,email} = useSelector( (state)=>state.contact);
const {editContact } = useSelector( (state)=>state.action);

console.log(firstName)
console.log(typeof(firstName))

  return (
    <div>

   
    {/* firstName */}
    <div>
        {
            firstName.map( (name)=>{
                return(<p>{name}</p>);
            })
        }
    </div>

    {/* lastName */}
    <div>
        {
            lastName.map( (name)=>{
                return(<p>{name}</p>);
            })
        }
    </div>

    {/* email */}
    <div>
        {
            email.map( (name)=>{
                return(<p>{name}</p>);
            })
        }
    </div>

    <button onClick={()=>{ Navigate("/dashboard/contacts/edit-contact") ;dispatch(setEditContact(true)) }}>
        Edit Contact
    </button>

   

    </div>
  )
}

export default ContactList
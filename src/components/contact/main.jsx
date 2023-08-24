import React, { useEffect, useState } from 'react'
import ContactList from './ContactList';
import { useDispatch , useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCreateContact } from '../../slices/actionSlice';



const Main = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const {firstName } = useSelector( (state)=>state.contact);
  const {editContact , createContact} = useSelector( (state)=>state.action);

  const [display , setdisplay] = useState(false);


  useEffect( ()=>{

    if(firstName.length !== 0 ){
        setdisplay(true);
        }

},[])



  return (
    <div className=' flex flex-col flex-wrap' >

    <button className={`${ display ? "hidden" : "flex"} border-dotted border-[2px]`} onClick={()=>{ Navigate("/dashboard/contacts/create-contact") ; dispatch(setCreateContact(true))}}>
        Create Contact
    </button>

      <ContactList/>

    </div>
  )
}

export default Main
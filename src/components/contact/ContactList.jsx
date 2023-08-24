import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {setEditContact} from "../../slices/actionSlice"; 




const ContactList = () => {

    const [display , setdisplay] = useState(false);



  const Navigate = useNavigate();


    const dispatch = useDispatch();

const {firstName , lastName ,email} = useSelector( (state)=>state.contact);


useEffect( ()=>{

    if(firstName.length !== 0 ){
        setdisplay(true);
        }

},[])

console.log(display)



  return (
    <div className='flex flex-col gap-10'>

    

   
    {/* firstName */}
    <div>
        {
            firstName.map( (name)=>{
                return(<p> FIRST NAME: {name}</p>);
            })
        }
    </div>

    {/* lastName */}
    <div>
        {
            lastName.map( (name)=>{
                return(<p> LAST NAME: {name}</p>);
            })
        }
    </div>

    {/* email */}
    <div>
        {
            email.map( (name)=>{
                return(<p> EMAIL: {name}</p>);
            })
        }
    </div>

       

    <button className={ display ? "" : " hidden"} 
    onClick={()=>{ Navigate("/dashboard/contacts/edit-contact") ; dispatch(setEditContact(true)) }}>
     Edit Contact
    </button>

   
   

   

    
    
 

    </div>
  )
}

export default ContactList
import React, { useEffect, useState } from 'react'
import {useForm} from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import {setFirstName , setLastName , setEmail} from "../../slices/contactSlice"

const ContactForm = () => {

const {firstName , lastName , email} = useSelector( (state)=>state.contact);
const {editContact ,createContact } = useSelector( (state)=>state.action);
 

    const dispatch = useDispatch();


    const {register , handleSubmit , reset , getValues, setValue , formState:{errors , isSubmitSuccessful}} = useForm();

    

    const SubmitForm = (data)=>{


        if(editContact){
            if(isFormUpdated){

                const formData = new FormData();
        
                formData.append("firstname",data.firstname);
                formData.append("lastname",data.lastname);
                formData.append("email",data.email)

            }
          }

          
          if(createContact){

            localStorage.setItem(firstName,data.firstname) ;
            localStorage.setItem(lastName,data.lastname) ;
            localStorage.setItem(email,data.email) ;
    
            dispatch(setFirstName([ data.firstname]));
            dispatch(setLastName([data.lastname]));
            dispatch(setEmail([data.email]));

          }
        
      

        
    }

    useEffect( ()=>{
        if(editContact){

            setValue("firstname",firstName);
            setValue("lastname",lastName);
            setValue("email",email)
    
        }

    },[])
  
      //kya form update hua hai
  const isFormUpdated= ()=>{

    //sari value form ki fetch kro
    const currentValues = getValues();


    //agar course ki value or form ki value equal nai hai toh update hua hai
    if(currentValues.firstname !== firstName ||
      currentValues.lastname !== lastName ){
      return true
    }
    else{
      return false
    }
  }



    useEffect(() => {
        if (isSubmitSuccessful) {
          reset({
            email: "",
            firstname: "",
            lastname: "",
          })
        }
      }, [reset, isSubmitSuccessful])


  return (
    <form onSubmit={handleSubmit(SubmitForm)} >


 <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="firstname" className="lable-style">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter first name"
            className="form-style"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              Please enter your name.
            </span>
          )}
        </div>


        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="lastname" className="lable-style">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter last name"
            className="form-style"
            {...register("lastname")}
          />
        </div>

        <div className="flex flex-col gap-2">
        <label htmlFor="email" className="lable-style">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          className="form-style"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            Please enter your Email address.
          </span>
        )}
      </div>
    

        <button type='submit'>
            Submit
        </button>
        


    </form>
  )
}

export default ContactForm
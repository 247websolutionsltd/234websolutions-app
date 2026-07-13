import { useState } from "react";
import useHook from "./generalHook";

export default function useInput(){
    const { handleLink } = useHook();
    const [ name, setName ] = useState("");
    const [ contact, setContact ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ nameError, setNameError ] = useState("");
    const [ contactError, setContactError ] = useState("");
    const [ messageError, setMessageError ] = useState("");
    const handleName = (name:string)=>{
        setNameError("");
        setName(name)
    }
    const handleContact = (contact:string)=>{
        setContactError("");
        setContact(contact)
    }
    const handleMessage = (message:string)=>{
        setMessageError("");
        setMessage(message)
    }
    const handleSend = ()=>{
        if(name.length === 0){
            setNameError("Please enter your name")
        }else if(contact.length === 0){
            setContactError("Please enter your contact information")
        }else if(message.length === 0){
            setMessageError("Please enter your message")
        }else{
            handleLink( "...", "mail", message + "\n" + "\n" + name + "\n" + contact );
            setName("");
            setContact("");
            setMessage("");
        }
    }

    return{
        name, contact, message, nameError, contactError, messageError, handleName, handleContact, handleMessage, handleSend
    }
}
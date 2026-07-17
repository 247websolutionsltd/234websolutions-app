import { useState } from "react";
import { Alert } from "react-native";
import { sendContactEmail } from "./email";

export default function useInput(){
    const [ loading, setLoading ] = useState(false);
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
        setLoading(true);
        if(name.length === 0){
            setNameError("Please enter your name");
            setLoading(false);
        }else if(contact.length === 0){
            setContactError("Please enter your contact information");
            setLoading(false);
        }else if(message.length === 0){
            setMessageError("Please enter your message");
            setLoading(false);
        }else{
            sendContactEmail({
            name: name,
            contact: contact,
            message: message,
            });
            setName("");
            setContact("");
            setMessage("");
            setLoading(false);
            Alert.alert('Message Sent', 'We will contact you soon', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
        }
    }

    return{
        name, contact, message, nameError, contactError, messageError, handleName, handleContact, handleMessage, handleSend, loading
    }
}
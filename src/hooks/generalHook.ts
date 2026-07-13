import { useState } from "react";
import { Alert, Linking } from "react-native";

export default function useHook() {
  const [isLoading, setIsLoading] = useState(false);
  const showTitle = (title:string, length=25)=>{
    if(title.length < length) return title
    else return title.slice(0,length) + "..."
  }
  const savings = (oldPrice: string, newPrice: string)=>{
    const oldNum = Number(oldPrice);
    const newNum = Number(newPrice);
    return Math.round(((newNum - oldNum) / newNum) * 100)
  }
  const mailData = {
    to: '247websolutionsltd@gmail.com',
    subject: 'Project Development Request',
    body:'Hello, I came accross yor mobile app and would love to have my project created by 247websolutions Limited. Please let me know what it takes, all that is required from me and how long this project can be executed. I look forward to hearing fro you.'
  }
  const handleLink = async (url:string, type:string, body=mailData.body) => {
    const supported = await Linking.canOpenURL(url);
    if (type === 'link'){
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }else{
      const { to, subject } = mailData;
      const mailLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      try {
        const supported = await Linking.canOpenURL(mailLink);
        if (supported) {
          await Linking.openURL(mailLink);
        } else {
          console.log("Email apps are not available on this device");
        }
      } catch (error) {
        console.error("An error occurred", error);
      }
    }
  };
  
  return {
    isLoading,
    setIsLoading,
    showTitle,
    savings,
    handleLink
  };
}
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
  const handleLink = async (
      url: string,
      type: "link" | "call" | "email",
      body = mailData.body
    ) => {
      try {
        switch (type) {
          case "link":
          case "call": {
            try {
              await Linking.openURL(url);
            } catch (e) {
              Alert.alert("Phone app unavailable");
            }
            break;
          }

          case "email": {
            const { to, subject } = mailData;

            const mailLink =
              `mailto:${to}` +
              `?subject=${encodeURIComponent(subject)}` +
              `&body=${encodeURIComponent(body)}`;

            try {
              await Linking.openURL(mailLink);
            } catch (e) {
              Alert.alert("Phone app unavailable");
            }
            break;
          }
        }
      } catch (error) {
        console.error(error);
        Alert.alert("Something went wrong.");
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
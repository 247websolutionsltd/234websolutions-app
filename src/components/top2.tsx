import { View } from "react-native";
import { ThemedText } from "./themed-text";

interface TopProps{
    title: string;
    description: string;
}
export default function Top({ title, description }:TopProps){
    return(
        <View>
            <ThemedText type="subtitle">{title}</ThemedText>
            <ThemedText>{description}</ThemedText>
        </View>
    )
}
import { Spacing } from "@/constants/theme";
import { styles } from "@/style/global-styles";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { ThemedText } from "./themed-text";

interface WorkProps extends TouchableOpacityProps{
    title: string;
    description?: string;
}
export default function Work({title, description, style}: WorkProps){
    return(
        <TouchableOpacity style={[styles.work, style]}>
            <View style={styles.workImage}/>
            <View style={{padding:Spacing.three}}>
                <ThemedText>{title}</ThemedText>
                {
                    description &&
                    <ThemedText style={{fontWeight:400}}>{description}</ThemedText>
                }
            </View>
            
        </TouchableOpacity>
    )
}
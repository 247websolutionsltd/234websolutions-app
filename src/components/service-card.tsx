import Icon from "@/constants/icons";
import { styles } from "@/style/global-styles";
import * as icons from 'lucide-react-native';
import { ChevronRight } from "lucide-react-native";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { ThemedText } from "./themed-text";

interface ServiceProps extends TouchableOpacityProps{
    title: string;
    description: string;
    icon:keyof typeof icons;
}
export default function Service({ title, description, icon, onPress, style }: ServiceProps){
    return(
        <TouchableOpacity style={[styles.serviceCard, style]} onPress={onPress}>
            <View style={styles.cardIcon}>
                <Icon name={icon} size={22}/>
            </View>
            <View style={{alignSelf:'flex-start', maxWidth:'56%'}}>
                <ThemedText style={{color:"#000"}}>{title}</ThemedText>
                 <ThemedText type="medium" style={{fontWeight:400, color:"#000"}}>{description}</ThemedText>
            </View>
            <View style={styles.cardIcon}>
                <ChevronRight size={25}/>
            </View>
        </TouchableOpacity>
    )
}
import Icon from "@/constants/icons";
import { styles } from "@/style/global-styles";
import * as icons from 'lucide-react-native';
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { ThemedText } from "./themed-text";

interface ServiceProps extends TouchableOpacityProps{
    title:string;
    icon:keyof typeof icons;
}
export default function Service({title, icon, style}:ServiceProps){
    return(
        <View style={ {width:'50%', padding:5, } }>
            <TouchableOpacity style={[styles.cardCenter, styles.service, style]}>
                <Icon name={icon} size={22}/>
                <ThemedText style={{marginTop:8}}>{title}</ThemedText>
            </TouchableOpacity>
        </View>
    )
}
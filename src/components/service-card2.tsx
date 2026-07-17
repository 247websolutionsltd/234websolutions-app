import Icon from "@/constants/icons";
import { styles } from "@/style/global-styles";
import * as icons from 'lucide-react-native';
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import Whatsapp from '../../assets/expo.icon/whatsapp.svg';
import { ThemedText } from "./themed-text";

interface ServiceProps extends TouchableOpacityProps{
    title:string;
    icon:keyof typeof icons | 'Whatsapp';
    width: string | number;
    padding?: string | number;
    top?: string;
}
export default function Service({title, icon, style, width='auto', padding=0, top, onPress}:ServiceProps){
    return(
        <View style={ {width:width, padding:padding } }>
            <TouchableOpacity style={[styles.cardCenter, styles.service, style]} onPress={onPress}>
                {
                    icon === "Whatsapp" ?
                    <Whatsapp width={22} height={22}/>
                    :
                    top ?
                    <ThemedText type="subtitle">{top}</ThemedText>
                    :
                    <Icon name={icon} size={22}/>
                }  
                <ThemedText type={top? "medium" : "default"} style={{marginTop:8, textAlign:'center'}}>{title}</ThemedText>
            </TouchableOpacity>
        </View>
    )
}
import { router } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from './themed-text';

interface TopProps{
    text:string;
}
export default function Top({text}:TopProps){
    return(
        <TouchableOpacity style={styles.container} onPress={()=>router.back()}>
            <ChevronLeft size={25} style={styles.left}/>
            <ThemedText style={styles.text} type='subtitle'>{text}</ThemedText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:8
    },
    left:{
        
    },
    text:{
        fontSize:22,
        marginLeft:10
    }
});
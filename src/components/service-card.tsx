import { ChevronRight } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface CardProps extends TouchableOpacityProps{
    name:string;
}
export default function Card({name, onPress}:CardProps){
    return(
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{name}</Text>
        <ChevronRight size={25}/>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:20,
        paddingHorizontal:20
    },
    text:{
        fontSize:18,
        fontWeight:500
    }
});
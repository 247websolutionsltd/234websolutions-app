import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { router } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from './themed-text';

interface TopProps{
    text:string;
}
export default function Top({text}:TopProps){
    const theme = useTheme();
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>router.back()} style={{padding:Spacing.three, paddingLeft:0}}>
                <ChevronLeft size={25} color={theme.text}/>
            </TouchableOpacity>
            <ThemedText style={styles.text} type='subtitle'>{text}</ThemedText>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
    },
    left:{
        
    },
    text:{
        fontSize:22,
    }
});
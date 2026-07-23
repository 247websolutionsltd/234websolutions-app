import { useTheme } from "@/hooks/use-theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Image, View } from "react-native";
export default function Index(){
    useEffect(() => {
        const loadTasks = async () => {
            const onboarded = await AsyncStorage.getItem('onboarded');
            if (onboarded === 'true'){
                router.replace('/(tabs)');
            }else{
                router.replace('/onboarding');
            }
        };
        loadTasks();
    
    }, []);
    const theme = useTheme();
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#FFF'}}>
            <Image style={{width:300, height:300, marginBottom:10}} source={require('../../assets/images/logo.png')}/>
            <ActivityIndicator size={60} color={theme.primary}/>
        </View>
    )
}
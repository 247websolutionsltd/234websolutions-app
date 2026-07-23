import useHook from '@/hooks/generalHook';
import { useTheme } from '@/hooks/use-theme';
import { styles } from "@/style/global-styles";
import { ImageBackground } from "expo-image";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { ThemedText } from "./themed-text";

interface WorkProps extends TouchableOpacityProps{
    title: string;
    description?: string;
    image: any;
    url: string;
}
export default function Work({title, description, image, url, style}: WorkProps){
    const theme = useTheme();
    const { handleLink } = useHook();
    return(
        <TouchableOpacity onPress={()=>handleLink(url, "link")}>
            <ImageBackground source={image}  style={[styles.work, style]} imageStyle={{borderTopLeftRadius:20, borderTopRightRadius:20}}>
                {/* <Image
                    source={require('../../assets/images/e-commerce.png')}
                    style={styles.workImage}
                /> */}
                <View style={styles.workBottom}>
                    <ThemedText style={{color:'#000'}}>{title}</ThemedText>
                    {
                        description &&
                        <ThemedText type='small' style={{fontWeight:400, color:'#000'}}>{description}</ThemedText>
                    }
                </View>
            </ImageBackground>
            
        </TouchableOpacity>
    )
}
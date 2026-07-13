import { ScrollView } from "react-native";
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";

interface ContainerProps extends SafeAreaViewProps{
    backgroundColor?:string;
}
export default function Container({children, backgroundColor='#FFF', style, edges=['top']}:ContainerProps){
    return(
        <SafeAreaView style={{flex:1, backgroundColor}} edges={edges}>
            <ScrollView contentContainerStyle={[{flexGrow:1}, style]} showsVerticalScrollIndicator={false}>
                {children}
            </ScrollView>
        </SafeAreaView>
    )
}


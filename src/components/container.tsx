import { ScrollView } from "react-native";
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";

interface ContainerProps extends SafeAreaViewProps{
    backgroundColor?:string;
}
export default function Container({children, backgroundColor='#FFF', style, edges=['top']}:ContainerProps){
    return(
        <SafeAreaView style={{flex:1, backgroundColor}} edges={edges}>
            <ScrollView contentContainerStyle={[{flex:1}, style]} style={{flexGrow:1}} showsVerticalScrollIndicator={false}>
                {children}
            </ScrollView>
        </SafeAreaView>
    )
}


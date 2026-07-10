import { ScrollView } from "react-native";
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";
import KeyboardContainer from "./keyboard-container";

interface ContainerProps extends SafeAreaViewProps{
    backgroundColor?:string;
}
export default function Container({children, backgroundColor='#FFF', style, edges=['top']}:ContainerProps){
    return(
        <SafeAreaView style={{flex:1, backgroundColor}} edges={edges}>
            <ScrollView contentContainerStyle={style} style={{flexGrow:1}} showsVerticalScrollIndicator={false}>
                <KeyboardContainer>
                    {children}
                </KeyboardContainer>
            </ScrollView>
        </SafeAreaView>
    )
}


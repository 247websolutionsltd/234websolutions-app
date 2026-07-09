import { ScrollView } from "react-native";
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";
import KeyboardContainer from "./keyboard-container";

interface ContainerProps extends SafeAreaViewProps{
}
export default function Container({children, style, edges=['top']}:ContainerProps){
    return(
        <SafeAreaView style={{flex:1}} edges={edges}>
            <ScrollView contentContainerStyle={[{flex:1}, style]}>
                <KeyboardContainer>
                    {children}
                </KeyboardContainer>
            </ScrollView>
        </SafeAreaView>
    )
}


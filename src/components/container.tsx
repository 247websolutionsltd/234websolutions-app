import { useTheme } from '@/hooks/use-theme';
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";

interface ContainerProps extends SafeAreaViewProps{
    backgroundColor?:string;
}

export default function Container({children, backgroundColor, style, edges=['top']}:ContainerProps){
    const theme = useTheme();
    return(
        <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={
            Platform.OS === "ios"
            ? "padding"
            : "height"
        }
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
        >
        <SafeAreaView style={{flex:1, backgroundColor:theme['background']}} edges={edges}>
            <ScrollView contentContainerStyle={[{flexGrow:1}, style]} showsVerticalScrollIndicator={false}>
                {children}
            </ScrollView>
        </SafeAreaView>
        </KeyboardAvoidingView>
    )
}


import { Spacing } from "@/constants/theme";
import { styles } from "@/style/global-styles";
import { TextInput, TextInputProps, View, ViewProps } from "react-native";
import { ThemedText } from "./themed-text";

interface InputProps extends TextInputProps{
    label:string;
    type?:'message' | 'default';
    style?:ViewProps;
}

export default function Input({label, type='default', placeholder, style}:InputProps){
    return(
        <View style={[{marginVertical:Spacing.two},style]}>
            <ThemedText style={{fontWeight:400}}>{label}</ThemedText>
            <View style={styles.inputView}>
                <TextInput 
                placeholder={placeholder}
                multiline={type === 'message'}
                style={{
                    flex:1,
                    fontSize:16,
                    minHeight: type === 'message' ? 120 : 16,
                    textAlignVertical: "top", // Android only
                }}
                />
            </View>
        </View>
    )
}
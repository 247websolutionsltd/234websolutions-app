import { Spacing } from "@/constants/theme";
import { styles } from "@/style/global-styles";
import { TextInput, TextInputProps, View, ViewProps } from "react-native";
import { ThemedText } from "./themed-text";

interface InputProps extends TextInputProps{
    label:string;
    type?:'message' | 'default';
    style?:ViewProps;
    handleText:(text:string)=>void;
    error:string;
}

export default function Input({label, type='default', placeholder, handleText, value, error, style}:InputProps){
    return(
        <View style={[{marginVertical:Spacing.two},style]}>
            <ThemedText style={{fontWeight:400}}>{label}</ThemedText>
            <View style={styles.inputView}>
                <TextInput 
                placeholder={placeholder}
                multiline={type === 'message'}
                value={value}
                onChangeText={(text:string)=>handleText(text)}
                style={{
                    flex:1,
                    fontSize:16,
                    minHeight: type === 'message' ? 120 : 16,
                    textAlignVertical: "top", // Android only
                }}
                />
            </View>
            {
                error &&
                <ThemedText type="small" style={{color:'red'}}>{error}</ThemedText>
            }
        </View>
    )
}
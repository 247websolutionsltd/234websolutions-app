import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, ViewProps } from "react-native";

export default function KeyboardContainer({children}:ViewProps){
    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
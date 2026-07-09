import { StyleSheet, Text, View } from "react-native";

interface CardProps {
    heading:string;
    subheading:string;
    backgroundColor: string;
}
export default function Card({heading, subheading, backgroundColor}:CardProps){
    return(
    <View style={[styles.container, {backgroundColor:backgroundColor}]}>
        <Text style={[styles.text1, {color:backgroundColor === '#e5e7eb' ? '#000' : "#FFF"}]}>{heading}</Text>
        <Text style={[styles.text2, {color:backgroundColor === '#e5e7eb' ? '#000' : "#FFF"}]}>{subheading}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        margin:15,
        borderRadius:12
    },
    text1:{
        fontSize:20,
        fontWeight:600,
        textAlign:'center'
    },
    text2:{
        fontSize:16,
        fontWeight:400,
        textAlign:'center'
    }
});
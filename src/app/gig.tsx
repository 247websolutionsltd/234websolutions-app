import Button from "@/components/button";
import Container from "@/components/container";
import { ThemedText } from "@/components/themed-text";
import Top from "@/components/top";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function GigScreen(){
    const { service, message } = useLocalSearchParams<{ service: string, message:string; }>();
    return(
        <Container>
            <View>
            <Top text={service}/>
            <View style={styles.top}>
                <Image style={styles.image} source={require('../../assets/images/mobile.jpg')} />
                <View style={styles.topRight}>
                    <View/>
                    <View style={{maxWidth:'80%'}}>
                        <ThemedText type="subtitle" style={{fontSize:18, lineHeight:18}}>{message}</ThemedText>
                        {/* <ThemedText type="subtitle" style={{fontSize:18, lineHeight:18}}>Mobile Development</ThemedText>
                        <ThemedText style={{lineHeight:14, marginTop:5, fontSize:14}}>Create your dream app today</ThemedText> */}
                    </View>
                    <Button onPress={()=>console.log('Hii')} style={styles.button} textSize={12}>Contact us</Button>
                </View>
            </View>
            </View>
        </Container>
    )
}

const styles=StyleSheet.create({
    image:{
        width:126,
        height:136,
        borderRadius:28
    },
    top:{
        padding:8,
        flexDirection:'row'
    },
    button:{
        width:95,
        alignSelf:'flex-start'
    },
    topRight:{
        justifyContent:'space-between',
        paddingLeft:20
    }
});
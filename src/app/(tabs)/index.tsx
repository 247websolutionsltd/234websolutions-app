import Container from "@/components/container";
import Card from "@/components/service-card";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index(){
  const handlePress = (service:string, message:string)=>{
    router.push({
      pathname: "/gig",
      params: { service, message }
    });
  }
  return(
    <Container>
      <View>
        <View style={styles.top}>
          <TouchableOpacity onLongPress={()=>AsyncStorage.setItem('onboarded', 'false')}>
            <Text style={styles.topText}>247 Websolutions</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Card name="Software Development" onPress={()=>handlePress('Mobile Development', 'Start building your software today')}/>
          <Card name="E-commerce" onPress={()=>handlePress('E-commerce', 'Get started on your E-commerce app')}/>
          <Card name="Website Design & Development" onPress={()=>handlePress('Website Design & Development', 'Create your unique website today')}/>
          <Card name="Mobile Application" onPress={()=>handlePress('Mobile Application', 'Create your dream app today')}/>
        </View>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  top:{
    alignItems:'center'
  },
  topText:{
    fontWeight:600,
    fontSize:21,
  }
});
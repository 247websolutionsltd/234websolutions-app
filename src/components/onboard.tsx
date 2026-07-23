import { Dimensions, Image, StyleSheet, View } from "react-native";
import { ThemedText } from "./themed-text";

const { width } = Dimensions.get("window");

const OnboardingItem = ({ item }: any) => {
  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.textContainer}> 
        <Image style={[styles.image, {width:item.size.width, height:item.size.height}]} source={item.image} resizeMode="contain"/>
        <View style={styles.texts}>
          <ThemedText type="subtitle" style={{textAlign:'center'}}>{item.title}</ThemedText>
          <View style={{width:'90%'}}>
            <ThemedText style={styles.desc}>
                {item.description}
            </ThemedText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    padding:10
  },
  image: {
    marginVertical:20,
    alignSelf:'center'
  },
  textContainer: {
    flex: 1,
  },
  desc: {
    marginTop: 10,
    textAlign:'center',
    fontSize:16
  },
  texts:{
    marginTop:30,
    alignItems:'center'
  }
});
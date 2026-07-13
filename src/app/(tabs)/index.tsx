import Container from "@/components/container";
import Service from "@/components/service-card2";
import { ThemedText } from "@/components/themed-text";
import Work from "@/components/work";
import { Spacing } from "@/constants/theme";
import { projects, services1 } from "@/data/projects-data";
import { useTheme } from '@/hooks/use-theme';
import { styles } from "@/style/global-styles";
import { Image } from "expo-image";
import { router } from "expo-router";
import { ArrowRight, Info } from 'lucide-react-native';
import { TouchableOpacity, View } from "react-native";

export default function HomeScreen(){
  const theme = useTheme();
  return(
    <Container style={{paddingHorizontal:Spacing.three}}>
        <View style={[styles.rowSpace, styles.top]}>
          <View style={{maxWidth:'70%'}}>
            <View style={styles.row}>
              <Image source={require('../../../assets/images/logo.jpeg')} style={styles.logo}/>
              <ThemedText type="subtitle">247Websolutions</ThemedText>
            </View>
            <ThemedText type="medium">Websites, apps and digital marketing for your business.</ThemedText>
          </View>
          <TouchableOpacity style={[styles.row, {top:Spacing.two}]} onPress={()=>router.navigate('/about')}>
            <Info size={18} />
            <ThemedText type="medium"> About</ThemedText>
          </TouchableOpacity>
        </View>
        <View style={[styles.cardCenter, {padding:Spacing.five}]}>
          <ThemedText type="large">Have a project in mind?</ThemedText>
          <ThemedText style={{textAlign:'center'}}>Tell us about it and we'll get back to you.</ThemedText>
          <TouchableOpacity style={[styles.row, {padding:Spacing.two}]}>
            <ThemedText type="medium">Get a quote</ThemedText>
            <ArrowRight size={18}/>
          </TouchableOpacity>
        </View>
        <View>
          <ThemedText style={{padding:5}}>What we do</ThemedText>
          <View style={styles.services}>
            {
              services1.map(({title, icon, description, features, timeline}, index)=>(
              <Service 
              title={title} 
              style={{backgroundColor:theme['container'], }} 
              icon={icon} 
              key={index}
              width={'50%'}
              padding={5}
              onPress={()=>router.navigate({
                pathname: '/detail',
                params: { title, description, icon, features:JSON.stringify(features), timeline }
              })}
              />
            ))
            }
          </View>
        </View>
        <View style={{marginTop:Spacing.four}}>
          <View style={styles.rowSpace}>
            <ThemedText>Recent Work</ThemedText>
            <TouchableOpacity onPress={()=>router.navigate('/(tabs)/work')}>
              <ThemedText type="medium" style={{color:'blue'}}>See all</ThemedText>
            </TouchableOpacity>
          </View>
          <View>
            {
              projects.map(({title,}, index)=>(
              <Work title={title} style={{backgroundColor:theme['container']}} key={index}/>
            ))
            }
          </View>
        </View>
    </Container>
  )
}
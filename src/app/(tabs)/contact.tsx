import Button from "@/components/button";
import Container from "@/components/container";
import Input from "@/components/custom-input";
import Service from "@/components/service-card2";
import { ThemedText } from "@/components/themed-text";
import Top from "@/components/top2";
import { Spacing } from "@/constants/theme";
import { socials } from "@/data/projects-data";
import { useTheme } from '@/hooks/use-theme';
import { styles } from "@/style/global-styles";
import { View } from "react-native";

export default function ContactScreen(){
    const theme = useTheme();
    return(
        <Container style={{paddingHorizontal:Spacing.three}}>
                <Top
                    title="Contact us"
                    description="Reach out any way that works for you."
                />
                <View style={styles.socials}>
                    {
                        socials.map(({title, icon}, index)=>(
                            <Service 
                                title={title} 
                                style={{backgroundColor:theme['container']}} 
                                icon={icon} 
                                key={index}
                                width={'31%'}
                                // onPress={()=>router.navigate({
                                //     pathname: '/detail',
                                //     params: { title, description, icon, features:JSON.stringify(features), timeline }
                                // })}
                            />
                        ))
                    }
                </View>
                <View style={{marginBottom:Spacing.three}}>
                    <ThemedText>Or send us a message</ThemedText>
                    <View style={{marginVertical:Spacing.two}}>
                        <Input label="Your name" placeholder="Enter your full name"/>
                        <Input label="Phone or email" placeholder="How should we reach you?"/>
                        <Input label="What do you need?" placeholder="Briefly describe your project" type="message"/>
                    </View>
                </View>
                <View>
                    <Button onPress={()=>console.log("Hii")}>
                        Send Message
                    </Button>
                    <ThemedText style={{textAlign:'center'}} type="small">
                        Lagos, Nigeria · Mon-Fri, 9am-6pm
                    </ThemedText>
                </View>
        </Container>
    )
}
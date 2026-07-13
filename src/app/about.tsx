import Button from "@/components/button";
import Container from "@/components/container";
import Service from "@/components/service-card2";
import { ThemedText } from "@/components/themed-text";
import Top from "@/components/top";
import { Spacing } from "@/constants/theme";
import { useTheme } from '@/hooks/use-theme';
import { styles } from "@/style/global-styles";
import { Headphones, Users, Zap } from "lucide-react-native";
import { View } from "react-native";

export default function DetailScreen(){
    const theme = useTheme();
    return(
        <Container style={{paddingHorizontal:Spacing.three, justifyContent:'space-between',}} edges={['top', 'bottom']}>
                <View>
                    <Top text="About us"/>
                    <ThemedText type="subtitle">247 Web Solutions</ThemedText>
                    <ThemedText>We're a Nigeria-based digital agency helping businesses build websites, apps and an online presence that brings in customers.</ThemedText>
                    <View style={styles.socials}>
                        <Service 
                            title="Projects done" 
                            style={{backgroundColor:theme['container'], padding:Spacing.three,}} 
                            top="100+"
                            width={'31%'}
                        />
                        <Service 
                            title="Active years" 
                            style={{backgroundColor:theme['container'], padding:Spacing.three,}} 
                            top="6+"
                            width={'31%'}
                        />
                        <Service 
                            title="Located" 
                            style={{backgroundColor:theme['container'], padding:Spacing.three,}} 
                            top="Lagos"
                            width={'31%'}
                        />
                     </View>
                    <View style={{marginVertical:Spacing.three}}>
                        <ThemedText style={{lineHeight:Spacing.five}}>What's included</ThemedText>
                        <View style={[styles.row, {marginVertical:Spacing.two}]}>
                            <Zap size={20} color={'blue'}/><ThemedText style={{marginLeft:12, lineHeight:Spacing.three}}>
                                Fast turnaround without cutting corners
                            </ThemedText>
                        </View>
                        <View style={[styles.row, {marginVertical:Spacing.two}]}>
                            <Users size={20} color={'blue'}/><ThemedText style={{marginLeft:12, lineHeight:Spacing.three}}>
                                A dedicated team from design to launch
                            </ThemedText>
                        </View>
                        <View style={[styles.row, {marginVertical:Spacing.two}]}>
                            <Headphones size={20} color={'blue'}/><ThemedText style={{marginLeft:12, lineHeight:Spacing.three}}>
                                Support that continues after the project ends
                            </ThemedText>
                        </View>
                    </View>
                    
                </View>
                <Button onPress={()=>console.log('hii')} style={{marginVertical:Spacing.two}}>
                    Contact us
                </Button>
        </Container>
    )
}


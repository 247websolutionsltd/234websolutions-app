import Button from "@/components/button";
import Container from "@/components/container";
import { ThemedText } from "@/components/themed-text";
import Top from "@/components/top";
import Icon from "@/constants/icons";
import { Spacing } from "@/constants/theme";
import useHook from "@/hooks/generalHook";
import { useTheme } from '@/hooks/use-theme';
import { styles } from "@/style/global-styles";
import { useLocalSearchParams } from "expo-router";
import * as icons from 'lucide-react-native';
import { Check, Clock } from "lucide-react-native";
import { View } from "react-native";

export default function DetailScreen(){
    const theme = useTheme();
    const { handleLink } = useHook();
    const { title, description, icon, features, timeline } = useLocalSearchParams<{ 
        title: string;
        description: string;
        icon:keyof typeof icons;
        features: string;
        timeline: string;
    }>();
    const featuresArr: string[] = features ? JSON.parse(features) : [];
    return(
        <Container style={{paddingHorizontal:Spacing.three, justifyContent:'space-between',}} edges={['top', 'bottom']}>
                <View>
                    <Top text="Service details"/>
                    <View style={{margin:Spacing.three}}><Icon name={icon} size={28} color={theme.text}/></View>
                    <ThemedText type="subtitle">{title}</ThemedText>
                    <ThemedText>{description}</ThemedText>
                    
                    <View style={{marginVertical:Spacing.three}}>
                        <ThemedText style={{lineHeight:Spacing.five}}>What's included</ThemedText>
                        {
                            featuresArr.map((item, index)=>(
                                <View key={index} style={[styles.row, {marginVertical:Spacing.one}]}>
                                    <Check size={20} color={theme.primary}/><ThemedText style={{marginLeft:12, lineHeight:Spacing.three}}>{item}</ThemedText>
                                </View>
                            ))
                        }
                    </View>
                    <View>
                        <ThemedText>Typical Timeline</ThemedText>
                        <View style={[styles.row, styles.timeline, {backgroundColor:theme['container']}]}>
                            <Clock size={23}/>
                            <ThemedText style={{flexShrink:1, paddingLeft:Spacing.three, color:"#000"}}>{timeline}</ThemedText>
                        </View>
                    </View>
                </View>
                <Button onPress={()=>handleLink("247websolutionsltd@gmail.com", 'email')} style={{marginVertical:Spacing.two}}>
                    Request this service
                </Button>
        </Container>
    )
}


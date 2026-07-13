import Button from "@/components/button";
import Container from "@/components/container";
import { ThemedText } from "@/components/themed-text";
import Top from "@/components/top";
import Icon from "@/constants/icons";
import { Spacing } from "@/constants/theme";
import { useTheme } from '@/hooks/use-theme';
import { styles } from "@/style/global-styles";
import { useLocalSearchParams } from "expo-router";
import * as icons from 'lucide-react-native';
import { Check, Clock } from "lucide-react-native";
import { View } from "react-native";

export default function DetailScreen(){
    const theme = useTheme();
    const { title, description, icon, features, timeline } = useLocalSearchParams<{ 
        title: string;
        description: string;
        icon:keyof typeof icons;
        features: string;
        timeline: string;
    }>();
    const featuresArr: string[] = features ? JSON.parse(features) : [];
    return(
        <Container style={{paddingHorizontal:Spacing.three,}} edges={['top', 'bottom']}>
            <View style={{flex:1, justifyContent:'space-between', }}>
                <View>
                    <Top text="Service details"/>
                    <View style={{margin:Spacing.three}}><Icon name={icon} size={28}/></View>
                    <ThemedText type="subtitle">{title}</ThemedText>
                    <ThemedText>{description}</ThemedText>
                    
                    <View style={{marginVertical:Spacing.three}}>
                        <ThemedText style={{lineHeight:Spacing.five}}>What's included</ThemedText>
                        {
                            featuresArr.map((item, index)=>(
                                <View key={index} style={styles.row}>
                                    <Check size={20} color={'green'}/><ThemedText style={{marginLeft:12, lineHeight:Spacing.four}}>{item}</ThemedText>
                                </View>
                            ))
                        }
                    </View>
                    <View>
                        <ThemedText>Typical Timeline</ThemedText>
                        <View style={[styles.row, styles.timeline, {backgroundColor:theme['container']}]}>
                            <Clock size={23}/>
                            <ThemedText style={{flexShrink:1, paddingLeft:Spacing.three}}>{timeline}</ThemedText>
                        </View>
                    </View>
                </View>
                <Button onPress={()=>console.log('hii')} style={{marginVertical:Spacing.two}}>
                    Request this service
                </Button>
            </View>
        </Container>
    )
}


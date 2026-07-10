import Button from "@/components/button";
import Container from "@/components/container";
import { ThemedText } from "@/components/themed-text";
import Top from "@/components/top";
import Icon from "@/constants/icons";
import { Spacing } from "@/constants/theme";
import { styles } from "@/style/global-styles";
import { useLocalSearchParams } from "expo-router";
import * as icons from 'lucide-react-native';
import { Check } from "lucide-react-native";
import { View } from "react-native";

export default function DetailScreen(){
    const { title, description, icon, features } = useLocalSearchParams<{ 
        title: string;
         description: string;
        icon:keyof typeof icons;
        features: string;  
    }>();
    const featuresArr: string[] = features ? JSON.parse(features) : [];
    return(
        <Container style={{paddingHorizontal:Spacing.three}}>
            <View>
                <Top text="Service details"/>
                <Icon name={icon}  />
                <ThemedText type="subtitle">{title}</ThemedText>
                <ThemedText>{description}</ThemedText>
                <ThemedText>What's included</ThemedText>
                {
                    featuresArr.map((item, index)=>(
                        <View key={index} style={styles.row}>
                            <Check size={20}/><ThemedText style={{marginLeft:Spacing.two}}>{item}</ThemedText>
                        </View>
                    ))
                }
                <ThemedText>Typical Timeline</ThemedText>
                <Button onPress={()=>console.log('hii')} >
                    Request this service
                </Button>
            </View>
        </Container>
    )
}


import Container from "@/components/container";
import Service from "@/components/service-card";
import Top from "@/components/top2";
import { Spacing } from "@/constants/theme";
import { services2 } from "@/data/projects-data";
import { useTheme } from "@/hooks/use-theme";
import { router } from "expo-router";
import { View } from "react-native";

export default function ServicesScreen(){
    const theme = useTheme();
    return(
        <Container style={{paddingHorizontal:Spacing.three}}>
            <View>
                <Top
                    title="Services"
                    description="Tap a service to see details or request it."
                />
                 <View style={{marginTop:Spacing.three}}>
                    {
                        services2.map(({title, sub, description, icon, features, timeline}, index)=>(
                            <Service
                                title={title}
                                description={sub}
                                onPress={()=>router.navigate({
                                    pathname: '/detail',
                                    params: { title, description, icon, features:JSON.stringify(features), timeline }
                                })}
                                style={{backgroundColor:theme['container']}}
                                icon={icon}
                                key={index}
                            />
                        ))
                    }
                 </View>
            </View>
        </Container>
    )
}
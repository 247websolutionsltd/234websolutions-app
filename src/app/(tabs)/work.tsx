import Container from "@/components/container";
import Top from "@/components/top2";
import Work from "@/components/work";
import { Spacing } from "@/constants/theme";
import { projects } from "@/data/projects-data";
import { useTheme } from "@/hooks/use-theme";
import { FlatList, View } from "react-native";

export default function WorkScreen(){
    const theme = useTheme();
    return(
        <Container style={{paddingHorizontal:Spacing.three}}>
            <View>
                <Top
                    title="Our Work"
                    description="A few projects we've delivered."
                />
                 <FlatList
                data={projects}
                renderItem={({item})=>(
                    <Work 
                    title={item.title}
                    description={item.description}
                    style={{backgroundColor:theme['container']}}
                    />
                )}
                keyExtractor={(i, index) => index.toString()}
                contentContainerStyle={{marginTop:Spacing.two}}
                scrollEnabled={false}
                />
            </View>
        </Container>
    )
}
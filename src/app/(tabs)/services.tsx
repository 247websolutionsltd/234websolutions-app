import Container from "@/components/container";
import Card from "@/components/service-card2";
import { View } from "react-native";

export default function Services(){
    return(
        <Container style={{justifyContent:'center'}} >
            <View>
                <Card 
                    heading="Web Development"
                    subheading="We create stunning, responsive websites tailored to your business needs."
                    backgroundColor="#4B5563"
                /> 
                <Card 
                    heading="E-Commerce Solutions"
                    subheading="Build and manage your online store with our custom e-commerce platforms."
                    backgroundColor="#e5e7eb"
                /> 
                <Card 
                    heading="Custom Applications"
                    subheading="Get tailored web applications designed to solve your unique challenges."
                    backgroundColor="#4B5563"
                /> 
            </View>
        </Container>
    )
}
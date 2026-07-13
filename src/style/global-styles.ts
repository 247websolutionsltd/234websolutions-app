
import { Spacing } from "@/constants/theme";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    rowSpace:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    cardCenter:{
        alignItems:'center',
        justifyContent:'center'
    },
    service:{
        borderRadius:20,
        height:120
    },
    services:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    work:{
        borderRadius:20,
        marginVertical:Spacing.two
    },
    workImage:{
        height:120,
        
    },
    top:{
        alignItems:'flex-start'
    },
    serviceCard:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:Spacing.four,
        marginVertical:10,
        borderRadius:20,
    },
    cardIcon:{
        paddingHorizontal:20,
        alignItems:'center',
    },
    logo:{
        width:38,
        height:38,
        marginRight:Spacing.two
    },
    timeline:{
        borderRadius:10,
        padding:Spacing.three,
        marginVertical:Spacing.two
    }
});
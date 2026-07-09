import { Colors } from "@/constants/theme";
import { StyleSheet, View } from "react-native";

const Paginator = ({ data, currentIndex }: any) => {
  return (
    <View style={styles.container}>
      {data.map((_: any, index: number) => (
        <View
          key={index}
          style={[
            styles.dot,
            currentIndex === index && styles.activeDot,
          ]}
        />
      ))}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 20,
    justifyContent: "center",
  },
  dot: {
    height: 5,
    width: 12,
    backgroundColor: "#A694FF70",
    borderRadius:1,
    margin: 5,
  },
  activeDot: {
    backgroundColor: Colors.primary,
    width: 25,
    height:6
  },
});
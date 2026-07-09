import Button from "@/components/button";
import OnboardingItem from "@/components/onboard";
import Paginator from "@/components/paginator";
import { ThemedText } from "@/components/themed-text";
import { onboardingData } from "@/data/onboardData";
import useHook from "@/hooks/generalHook";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<any> | null>(null);
  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const { isLoading, setIsLoading } = useHook();
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollToNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      finishOnboarding();
    }
  };
  const finishOnboarding = async () => {
    setIsLoading(true);
    try {
      setIsLoading(false);
      await AsyncStorage.setItem(
        'onboarded',
        'true'
      );
      router.navigate("/(tabs)");
    } catch (e) {
      setIsLoading(false);
      console.error(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.skip} onPress={finishOnboarding}>
        <ThemedText>Skip</ThemedText>
      </TouchableOpacity>

      <FlatList
        data={onboardingData}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={flatListRef}
      />
      <Paginator data={onboardingData} currentIndex={currentIndex} />

      <Button onPress={scrollToNext} isLoading={isLoading}>
        {currentIndex === onboardingData.length - 1 ? "Get Started" : "Next"}
      </Button>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  skip: {
    alignSelf:'flex-end',
    padding:20
  },
});
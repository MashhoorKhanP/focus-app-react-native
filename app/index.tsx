import Focus from "@/components/Focus";
import Timer from "@/components/Timer";
import { colors } from "@/utils/colors";
import { Link } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

export default function HomeScreen() {
  const [currentSubject, setCurrentSubject] = useState<any>("test");
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <Timer focusSubject={currentSubject} onTimerEnd={() => {}} clearSubject={() => {}} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.black,
  },
  text: {
    color: colors.white,
  },
});

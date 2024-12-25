import React, { useState } from "react";
import Focus from "@/components/Focus";
import FocusHistory from "@/components/FocusHistory";
import Timer from "@/components/Timer";
import { colors } from "@/utils/colors";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

export default function HomeScreen() {
  const [currentSubject, setCurrentSubject] = useState<any>("");
  const [history, setHistory] = useState<string[]>([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject:string) => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => setCurrentSubject("")}
        />
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

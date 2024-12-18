import React, { useState } from "react";
import { StyleSheet, Text, Vibration, View } from "react-native";
import { Countdown } from "./Countdown";
import { RoundedButton } from "./RoundedButton";
import { spacing } from "@/utils/sizes";
import { colors } from "@/utils/colors";
import { ProgressBar } from "react-native-paper";
import Timing from "./Timing";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

const Timer = ({ focusSubject }: any) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  // Ensure progress is clamped and rounded
  const handleProgress = (progressValue: number) => {
    const roundedProgress = Math.min(
      1,
      Math.max(0, parseFloat(progressValue.toFixed(2)))
    );
    setProgress(roundedProgress);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={handleProgress} // Pass the clamped progress handler
          onEnd={() => {
            Vibration.vibrate(PATTERN);
          }}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing on</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          color={colors.blue}
          style={{ height: spacing.sm }}
          progress={progress} // Pass the normalized progress value
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton
          onPress={() => setIsStarted(!isStarted)}
          title={isStarted ? "Pause" : "Start"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  timingWrapper: {
    flex:0.1,
    flexDirection: "row",
    paddingTop: spacing.xl,
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: spacing.md,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  task: {
    color: colors.white,
    textAlign: "center",
  },
});

export default Timer;

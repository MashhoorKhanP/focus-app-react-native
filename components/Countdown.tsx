import React, { useState, useEffect, useRef } from "react";
import { Text, StyleSheet } from "react-native";

import { fontSizes, spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

const minutesToMillis = (min: number) => min * 1000 * 60;
const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

export const Countdown = ({
  minutes = 0.1,
  isPaused,
  onProgress,
  onEnd,
}: any) => {
  const interval = useRef<NodeJS.Timer | any>(null);

  const [millis, setMillis] = useState<number>(minutesToMillis(minutes));

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        if (interval.current) clearInterval(interval.current);
        onEnd && onEnd(); // Call onEnd if provided
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    const newMillis = minutesToMillis(minutes);
    setMillis(newMillis);
    onProgress && onProgress(newMillis / minutesToMillis(minutes)); // Update progress
  }, [minutes]);

  useEffect(() => {
    onProgress && onProgress(millis / minutesToMillis(minutes)); // Update progress on millis change
  }, [millis]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(countDown, 1000);

    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, [isPaused]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: "bold",
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: "rgba(94, 132, 226, 0.3)",
  },
});

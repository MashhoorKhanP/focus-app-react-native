import React from "react";
import { StyleSheet, View } from "react-native";
import { RoundedButton } from "./RoundedButton";

type Props = {
  onChangeTime: (minutes: number) => void;
};

const Timing = ({ onChangeTime }: Props) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="15" onPress={() => onChangeTime(15)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="20" onPress={() => onChangeTime(20)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: "center",
  },
});

export default Timing;

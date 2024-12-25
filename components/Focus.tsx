import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "./RoundedButton";
import { spacing } from "@/utils/sizes";

const Focus = ({addSubject}: any) => {
  const [subject, setSubject] = useState<any>("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on?"
          onChangeText={setSubject}
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={() => addSubject(subject)} />
        </View>
      </View>
    </View>
  );
};

const styles: any = StyleSheet.create({
  container: {
    flex: 0.1,
  },
  text: {
    color: "white",
  },
  textInput: {
    flex: 0.8,
    marginRight: spacing.sm,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});

export default Focus;

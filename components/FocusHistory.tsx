import { colors } from "@/utils/colors";
import { fontSizes, spacing } from "@/utils/sizes";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

type Props = {
  history: string[];
};

const FocusHistory = ({ history }: Props) => {
  if (!history?.length) return null;

  const renderItem = ({ item }: any) => (
    <View>
      <Text style={styles.item}>- {item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focus History</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

// 04 31

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    fontWeight: "bold",
    paddingTop: spacing.xl,
    paddingLeft: spacing.lg,
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: "bold",
    paddingTop: spacing.lg,
    paddingLeft: spacing.lg,
  },
});

export default FocusHistory;

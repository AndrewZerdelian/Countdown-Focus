import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { Colors } from "../utilities/Colors";
import { FontSize, Spacing } from "../utilities/Sizes";

const FocuseHistory = ({ history }) => {
  if (!history || history.length === 0)
    return <Text style={styles.title}> Lets Focus on somthing </Text>;
  const renderItem = ({ item }) => <Text style={styles.item}>-{item}</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Things we Focused on </Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

export default FocuseHistory;

const styles = StyleSheet.create({
  container: {
    padding: Spacing.md,
    flex: 1,
  },
  item: {
    fontSize: FontSize.md,
    color: Colors.white,
    paddingTop: Spacing.sm,
  },
  title: {
    color: Colors.white,
    fontSize: FontSize.md,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
});

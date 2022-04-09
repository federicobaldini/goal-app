import React from "react";
import { Text, View, StyleSheet } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 10,
    backgroundColor: "#5dade2",
  },
  goalText: {
    color: "#ffffff",
  },
});

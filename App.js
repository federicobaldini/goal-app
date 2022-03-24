import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default App = () => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your personal goal!" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 50,
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 15,
    width: "80%",
    marginRight: 8,
    padding: 16
  },
});

import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goalsList, setGoalsList] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setGoalsList((currentGoalsList) => [...currentGoalsList, enteredGoalText]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your personal goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {goalsList.map((goal) => {
          return <Text key={goal}>{goal}</Text>;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 50,
    padding: 30,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 15,
    width: "70%",
    marginRight: 8,
    padding: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});

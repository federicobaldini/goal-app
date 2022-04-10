import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default App = () => {
  const [goalsList, setGoalsList] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setGoalsList((currentGoalsList) => [
      ...currentGoalsList,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
        />
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
  goalsContainer: {
    flex: 5,
  },
});

import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, FlatList } from "react-native";
import Goal from "./src/Components/Goal";
import AddGoal from "./src/Components/AddGoal";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState(["Learn React Native by February 2021"]);
  const addGoalHandler = () => {
    setGoals([...goals, goal]);
    setGoal("");
  };
  const typeGoalHandler = (text) => {
    setGoal(text);
  };
  return (
    <View style={styles.container}>
      <>
        <AddGoal
          goalText={goal}
          handleGoal={addGoalHandler}
          addGoal={typeGoalHandler}
        />

        <FlatList
          data={goals}
          keyExtractor={(index) => index.toString()}
          renderItem={({ item }) => <Goal goal={item} />}
        />
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
});

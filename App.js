import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Goal from "./src/Components/Goal";
import AddGoal from "./src/Components/AddGoal";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([
    {
      id: Math.floor(Math.random() * 10 ** 5),
      title: "Learn React Native by February 2021",
    },
  ]);
  const addGoalHandler = () => {
    setGoals([
      ...goals,
      { id: Math.floor(Math.random() * 10 ** 5), title: goal },
    ]);
    setGoal("");
  };
  const typeGoalHandler = (text) => {
    setGoal(text);
  };

  const deleteGoals = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((item) => item.id !== id);
    });
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
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <Goal goal={item.title} goalDelete={() => deleteGoals(item.id)} />
          )}
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

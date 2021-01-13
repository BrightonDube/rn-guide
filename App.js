import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
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
  //Modal visibility
  const [visibility, setVisibility] = useState(false);

  const addGoalHandler = () => {
    setGoals([
      ...goals,
      { id: Math.floor(Math.random() * 10 ** 5), title: goal },
    ]);
    setGoal("");
    setVisibility(false);
  };
  const typeGoalHandler = (text) => {
    setGoal(text);
  };

  const cancelHandler = () => {
    setVisibility(false);
  };

  const deleteGoals = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((item) => item.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <>
        <Button
          title="Add New Goal"
          onPress={() => setVisibility(true)}
          color="#3A7A82"
        />
        <AddGoal
          goalText={goal}
          handleGoal={addGoalHandler}
          addGoal={typeGoalHandler}
          onCancel={cancelHandler}
          isVisible={visibility}
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

import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, FlatList } from "react-native";
import Goal from "./src/Components/Goal";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState(["Learn React Native by February 2021"]);
  const addGoalHandler = () => {
    setGoals([...goals]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Add Goal"
          value={goal}
        />
        <Button
          title="Add"
          color="#f14e4e"
          onPress={addGoalHandler}
          style={styles.buttonStyle}
        />
      </View>
      <FlatList
        data={goals}
        keyExtractor={(item) => {
          item;
        }}
        renderItem={({ item }) => {
          <Goal goal={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputStyle: {
    borderRadius: 8,
    backgroundColor: "#f0eeee",
    padding: 10,
    fontSize: 18,
    marginBottom: 10,
    width: "85%",
    height: 50,
  },
});

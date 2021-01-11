import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const Goal = ({ goal, goalDelete }) => {
  return (
    <>
      <TouchableOpacity onPress={goalDelete}>
        <Text style={styles.goalStyle}>{goal}</Text>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  goalStyle: {
    borderWidth: 1,
    borderColor: "#f0eeee",
    padding: 10,
    marginVertical: 5,
    fontSize: 16,
  },
});
export default Goal;

import React from "react";
import { Text, StyleSheet } from "react-native";

const Goal = ({ goal }) => {
  return (
    <>
      <Text style={styles.goalStyle}>{goal}</Text>
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

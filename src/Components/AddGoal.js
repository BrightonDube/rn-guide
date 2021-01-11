import React from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

const AddGoal = ({ addGoal, handleGoal, goalText }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Add Goal"
        onChangeText={addGoal}
        value={goalText}
      />

      <TouchableOpacity style={styles.buttonStyle} onPress={handleGoal}>
        <Text style={{ color: "white" }}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
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
    top: 5,
  },
  buttonStyle: {
    height: 50,
    borderRadius: 8,
    fontSize: 18,
    backgroundColor: "#3A7A82",
    justifyContent: "center",
    width: "14%",
    alignItems: "center",
  },
});
export default AddGoal;

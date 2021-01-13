import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
} from "react-native";

const AddGoal = ({ addGoal, onCancel, handleGoal, goalText, isVisible }) => {
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Add Goal"
          onChangeText={addGoal}
          value={goalText}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "80%",
          }}
        >
          <TouchableOpacity style={styles.buttonStyle} onPress={onCancel}>
            <Text style={{ color: "hotpink" }}>CANCEL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={handleGoal}>
            <Text style={{ color: "white" }}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
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
    width: "40%",
    alignItems: "center",
    marginHorizontal: 5,
  },
});
export default AddGoal;

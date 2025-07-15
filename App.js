import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Homework from "./ReusableComponents/Homework";

export default function App() {
  const [hw, setAssignment] = useState();
  const [hwItems, setItems] = useState([]);

  const handleAssignment = () => {
    setItems([...hwItems, hw]);
    setAssignment(null);
  };

  /* Deleting an item */

  const deleteAssignment = (index) => {
    let assignmentsCopy = [...hwItems];
    assignmentsCopy.splice(index, 1);
    setItems(assignmentsCopy);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.taskContainer}>
        <Text style={styles.taskTitle}>Upcoming assignments</Text>

        <View style={styles.tasks}>
          {hwItems.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => deleteAssignment(index)}
              >
                <Homework text={item} key={index} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Write an assignment */}

      <KeyboardAvoidingView
        behaviour={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.AssignmentInputContainer}
      >
        <TextInput
          style={styles.assignmentInput}
          placeholder="Write an assignment"
          value={hw}
          onChangeText={(text) => setAssignment(text)}
        ></TextInput>

        <TouchableOpacity
          style={styles.addContainer}
          onPress={() => handleAssignment()}
        >
          <Text style={styles.PLUSSIGN}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaecc6",
  },
  taskContainer: {
    paddingTop: 40,
    paddingHorizontal: 20,
    flex: 1,
  },
  taskTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2d3480",
    alignSelf: "center",
  },
  tasks: {
    marginTop: 20,
  },

  AssignmentInputContainer: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  assignmentInput: {
    padding: 10,
    width: 280,
    height: 50,
    backgroundColor: "white",
    borderRadius: 60,
    borderColor: "grey",
    borderWidth: 0.8,
  },
  addContainer: {
    backgroundColor: "white",
    height: 60,
    width: 60,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 0.8,
  },
  PLUSSIGN: {
    color: "#2d3480",
    fontSize: 24,
  },
});

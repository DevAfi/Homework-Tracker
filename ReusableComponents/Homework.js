import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const Homework = (props) => {
  return (
    <View style={styles.Assignment}>
      <View style={styles.CheckMark}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.AssignmentName}>{props.text}</Text>
      </View>
      <View style={styles.Check}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  Assignment: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  CheckMark: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    borderRadius: 5,
    marginRight: 12,
    backgroundColor: "#2d3480",
    opacity: 0.6,
  },
  AssignmentName: {
    maxWidth: "80%",
    color: "#2d3480",
    fontSize: 17,
  },
  Check: {
    width: 16,
    height: 16,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#2d3480",
  },
});

export default Homework;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Homework from './ReusableComponents/Homework';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.taskContainer}>
        <Text style={styles.taskTitle}>Upcoming tasks</Text>

        <View style={styles.tasks}>
          <Homework text="Task 1" />
          <Homework text="Task 2" />
          <Homework text="Task 3" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaecc6',
  },
  taskContainer: {
    paddingTop: 40,
    paddingHorizontal: 20,
    flex: 1,
  },
  taskTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2bc0e4',
    
  },
  tasks
  : {
  },
});

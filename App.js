import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.taskContainer}>
        <Text style={styles.taskTitle}>Upcoming tasks</Text>

        <View style={styles.tasks}>
          {/* HW */}
          {/* HW */}
          {/* HW */}
          {/* HW */}
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

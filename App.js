import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.kitContainer}>
        <View style={styles.titles}>
          <Text style={styles.title}>Home Kit 2021</Text>
          <Text style={styles.subTitle}>Starting at $59.00</Text>
        </View>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'violet',
    alignItems: 'center',
    justifyContent: 'center',
  },
  kitContainer: {
    height: "100%",
    width: "100%"
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 16,
    color: 'blue'
  }
});

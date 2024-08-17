import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Nguyen Van A", age: 18 },
    { id: 2, name: "Nguyen Van B", age: 20 },
    { id: 3, name: "Nguyen Van C", age: 42 },
    { id: 4, name: "Nguyen Van AB", age: 24 },
    { id: 5, name: "Nguyen Van AC", age: 14 },
    { id: 7, name: "Nguyen Van ABC", age: 12 },
    { id: 8, name: "Nguyen Van BAC", age: 11 },
    { id: 9, name: "Nguyen Van CBA", age: 20 },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading1}>ARRAY STUDENT</Text>
      <ScrollView>
        {students.map((item) => {
          return (
            <View>
              <Text style={styles.layoutItem}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 40,
    paddingTop: 50,
    paddingBottom: 50,
  },
  heading1: {
    fontSize: 25,
    color: "green",
    textAlign: "center",
    paddingBottom: 10,
  },
  layoutItem: {
    padding: 35,
    backgroundColor: "lightsteelblue",
    marginBottom: 15,
    borderRadius: 5,
  },
});

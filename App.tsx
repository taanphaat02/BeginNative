import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text1}>Count = {count}</Text>
        <Button title="increse" onPress={() => setCount(count + 1)} />
      </View>

      <View>
        <Text style={styles.text1}>My name is: {name}</Text>
        <TextInput
          multiline={true}
          style={styles.input}
          onChangeText={(value) => setName(value)}
        />
      </View>

      <View>
        <Text style={styles.text1}>I am {age} year old</Text>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="numeric"
          onChangeText={(value) => setAge(+value)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
  text1: {
    color: "red",
    fontSize: 20,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
  },
});

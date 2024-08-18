import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

interface ITodo {
  id: number;
  name: string;
}

export default function App() {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState<ITodo[]>([]);

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {
    if (!todo) {
      Alert.alert("Message", "Please enter todo");
      return;
    }
    setListTodo([...listTodo, { id: randomInteger(2, 50000), name: todo }]);
    setTodo("");
  };

  const handleDeleteItem = (id: number, name: string) => {
    Alert.alert("Delete", `Do you want to delete ${name}`, [
      {
        text: "Cancle",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          const newTodos = listTodo.filter((item) => item.id !== id);
          setListTodo(newTodos);
        },
      },
    ]);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.heading1}>Todo List</Text>

        <TextInput
          value={todo}
          style={styles.inputText}
          onChangeText={(value) => setTodo(value)}
        />

        <View style={styles.button}>
          <Button title="Add todo" onPress={handleAddTodo} />
        </View>

        <View style={styles.list}>
          <FlatList
            keyExtractor={(item) => item.id + ""}
            data={listTodo}
            renderItem={({ item }) => {
              return (
                <Pressable onPress={() => handleDeleteItem(item.id, item.name)}>
                  <View style={styles.group}>
                    <Text>{item.name} </Text>
                    <AntDesign name="closecircle" size={24} color="black" />
                  </View>
                </Pressable>
              );
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
    // <FlexBox />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  heading1: {
    fontSize: 25,
    textAlign: "center",
    backgroundColor: "orange",
    padding: 10,
  },
  inputText: {
    borderWidth: 0.5,
    padding: 10,
    margin: 20,
    fontSize: 18,
  },
  button: {
    marginHorizontal: 100,
    marginBottom: 15,
  },
  group: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 0.8,
    borderStyle: "dashed",
    padding: 15,
    marginBottom: 10,
  },
  list: {
    flex: 1,
  },
});

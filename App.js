import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TodoInput from "./components/TodoInput/TodoInput";
import { SafeAreaView } from "react-native";
import { useState } from "react";
import TodoItems from "./components/TodoItems/TodoItems";
import Header from "./components/Header/Header";

export default function App() {
  
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [isFocus, setFocus] = useState(false);

  const onChange = (value) => {
    setTodoText(value);
  };
  const handleAddTaskPress = () => {
    setTodos([...todos, todoText]);
    setTodoText("");

    console.log(todos);
  };
  const handleDeleteTodoPress = (index) => {
    const newList = [...todos];
    newList.splice(index, 1);
    setTodos(newList);
  };
  const handleTodoDone = () => {
    setFocus(!isFocus);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <View style={styles.headerContainer}>
          <Header />
          <Text style={styles.count}>{todos.length}</Text>
        </View>
        <StatusBar style="auto" />
        <FlatList
          keyExtractor={(item) => item + Date.now() + Math.random()}
          data={todos}
          renderItem={({ item, index  }) => (
            <TodoItems
              item={item}
              deleteTodo={() => handleDeleteTodoPress(index)}
              todoDone={() => handleTodoDone()}
            />
          )}
        />
        <TodoInput
        value={todoText}
          handleChange={onChange}
          handleAddTaskPress={handleAddTaskPress}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#260273",

    opacity: 0.8,
  },
  inner_container: {
    flex: 1,
    margin: 10,
    marginTop: 45,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  count: {
    fontSize: 30,
    fontWeight: "700",
    color: "orange",
  },
  todo_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
});

import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const TodoItems = ({ item, deleteTodo, todoDone }) => {
  return (
    <View style={styles.container}>
      <View style={styles.todo_container}>
        <TouchableOpacity style={styles.todo} onPress={todoDone} >
          <Text style={styles.todo_text}>{item}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.todo_del} onPress={deleteTodo}>
        <AntDesign name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default TodoItems;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "green",
    borderRadius: 5,
    gap: 10,
    width: "100%",
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  todo_container: {
  
    margin: 2,
    flex: 1,
  },
  todo: {
    marginRight: 10,
    
  },
  todo_del: {
    marginRight:8
  },
  todo_text: {
    fontSize: 20,
    color: "white",
    padding: 10,
    justifyContent: "center",
   
  },
});

import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import styles from "./TodoInput.styles";
import { TouchableOpacity } from "react-native";

const TodoInput = ({handleChange,handleAddTaskPress, value}) => {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Add Todo..."
        placeholderTextColor="white"
        onChangeText={handleChange}
        value={value}
      />
      <TouchableOpacity style={styles.todo_button} onPress={handleAddTaskPress}>
        <Text>ADD TASK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoInput;

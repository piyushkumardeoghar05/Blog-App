import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function CreateTodo({ handleCreate }) {
  const [todoText, setTodoText] = useState("");
  return (
    <>
      <Text>Todo Text</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => {
          setTodoText(val);
          // console.log(todoText);
        }}
      />
      <View style={styles.btnContainer}>
        <Button
          title="Create"
          color="black"
          onPress={() => handleCreate(todoText)}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  btnContainer: {
    textAlign: "center",
    // width:200,
    marginLeft: 30,
    marginRight: 30,
  },
  input: {
    borderWidth: 2,
    borderColor: "black",
    padding: 8,
    margin: 10,
    // width: 200,
  },
});

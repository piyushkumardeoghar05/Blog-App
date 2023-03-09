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
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./header";
import TodoList from "./todoList";
import CreateTodo from "./createTodo";
// import TodoList from "./todoList";
export default function App() {
  const [todos, setTodos] = useState([
    { text: "take a bath", key: 1 },
    { text: "go to parlour", key: 2 },
    { text: "take a nap", key: 3 },
    { text: "study", key: 4 },
  ]);

  const handleCreate = (text) => {
    if (text.length > 3) {
      setTodos((prevData) => {
        return [{ text: text, key: Math.random().toString() }, ...todos];
      });
    } else {
      Alert.alert("OOPS!", "Todos length cant be more than 3", [
        { text: "Ok", onPress: () => console.log("Alert Closed") },
      ]);
    }
  };
  const handleDelete = (key) => {
    setTodos((prevData) => {
      return prevData.filter((item) => item.key != key);
    });
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("touched");
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.todoForm}>
          <CreateTodo handleCreate={handleCreate} />
        </View>
        <View style={styles.todoList}>

        <FlatList
          data={todos}
          renderItem={({ item }) => {
            return <TodoList item={item} handleDelete={handleDelete} />;
            // <TodoList item={item} handleDelete={handleDelete}/>
            // <View style={styles.listItemContainer}>
            //   return(
            // <>
            //         <Text style={styles.listText}>{item.text}</Text>
            //          {console.log(item.text)}
            //          <TouchableOpacity onPress={()=>{handleDelete(item.key)}}>
            //           <Text style={styles.deleteText}>
            //             Delete
            //           </Text>
            //         </TouchableOpacity>
            //         </>
            //   )
            // </View>
          }}
         
        />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    textAlign: "center",
  },

  todoList: {
    textAlign: "center",
    // backgroundColor:'green',
    margin: 20,
    padding: 10,
    flex:1,
    // flexDirection:'row',

  },
  todoForm: {
    textAlign: "center",
    padding: 20,
  },

  listItemContainer: {
    backgroundColor: "skyblue",
    margin: 20,
    marginTop: 20,
  },
  deleteText: {
    margin: 10,
    fontSize: 16,
    // backgroundColor:'green',
    // height:100,
    padding: 10,
    backgroundColor: "red",
    width: 80,
    textAlign: "center",
  },
  listText: {
    textAlign: "center",
    margin: 10,
    fontSize: 20,
    // backgroundColor:'green',
    // height:100,
    padding: 10,
  },
});

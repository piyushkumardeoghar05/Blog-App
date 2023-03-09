import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
export default function TodoList({ item, handleDelete }) {
  return (
    <View style={styles.listItemContainer}>
      <Text style={styles.listText}>{item.text}</Text>
      <TouchableOpacity
        onPress={() => {
          handleDelete(item.key);
        }}
      >
        <MaterialIcons style={styles.delete} name="delete" size={30} color="red" />
        {/* <Text style={styles.deleteText}>Delete</Text> */}
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  listItemContainer: {
    backgroundColor: "skyblue",
    marginTop: 20,
    margin: 20,
    flex:1,
    justifyContent:'space-evenly',
    flexDirection:'row',

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
  delete:{
    padding: 10,
    margin: 10,
  }
});

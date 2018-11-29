import React, { Component } from "react"
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native"
import Main from "../ProfileApp/src/Main"
import Result from "../ProfileApp/src/Result"
import InputFormAddress from "./src/Inputs/InputFormAddress"
import InputFromGender from "./src/Inputs/InputFormGender"
import InputFormName from "../ProfileApp/src/Inputs/InputFormName"
import InputFormPhone from "../ProfileApp/src/Inputs/InputFormPhone"

class App extends Component {
  render() {
    return (
      <View style={Styles.classContainer}>
        <View style={Styles.containerPerSection}>
        
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Name</Text>
          </View>
          <TouchableOpacity style={Styles.inputContainer}>
          <View >
            <Text style={Styles.inputResult}>Name</Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Gender</Text>
          </View>
          <TouchableOpacity style={Styles.inputContainer}>
          <View>
            <Text style={Styles.inputResult}>Gender</Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Phone</Text>
          </View>
          <TouchableOpacity style={Styles.inputContainer}>
          <View>
            <Text style={Styles.inputResult}>Phone</Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Address</Text>
          </View>
          <TouchableOpacity style={Styles.inputContainer}>
          <View style={Styles.inputContainer}>
            <Text style={Styles.inputResult}>Address</Text>
          </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={Styles.buttonSubmit}>
          <Text style={Styles.textButton}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  classContainer: { flex: 1, padding: 15 },
  containerPerSection: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10
  },
  textContainer: { width: "30%" },
  text: { fontSize: 20, fontWeight: "bold" },
  inputContainer: { width: "70%", backgroundColor: "#e1f7d5" },
  inputResult: { fontSize: 20, marginLeft: 5 },
  buttonSubmit: {
    backgroundColor: "#d2d2d2",
    borderRadius: 3,
    borderWidth: 1,
    position: "absolute",
    bottom: 10,
    right: 10,
    left: 10
  },
  textButton: { textAlign: "center", margin: 10 }
})

export default App

// 1. Bikin 4-pairs inputan
// 2.
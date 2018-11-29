import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class Main extends Component {
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

export default Main

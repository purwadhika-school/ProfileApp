import React, { Component } from "react"
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native"

class App extends Component {
  render() {
    return (
      <View style={Styles.classContainer}>
        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Name</Text>
          </View>
          <View style={Styles.inputContainer}>
            <Text style={Styles.inputResult}>Name</Text>
          </View>
        </View>
        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Gender</Text>
          </View>
          <View style={Styles.inputContainer}>
            <Text style={Styles.inputResult}>Gender</Text>
          </View>
        </View>
        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Phone</Text>
          </View>
          <View style={Styles.inputContainer}>
            <Text style={Styles.inputResult}>Phone</Text>
          </View>
        </View>
        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Address</Text>
          </View>
          <View style={Styles.inputContainer}>
            <Text style={Styles.inputResult}>Address</Text>
          </View>
        </View>
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
  inputResult: { fontSize: 20, marginLeft: 5 }
})

export default App

// 1. Bikin 4-pairs inputan
// 2.

import React, { Component } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "30%" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Name</Text>
          </View>
          <View style={{ width: "70%", backgroundColor: '#e1f7d5' }}>
            <Text style={{ fontSize: 20, marginLeft: 5 }}>Name</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default App

// 1. Bikin 4-pairs inputan
// 2.

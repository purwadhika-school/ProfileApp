import React from "react"
import { View, Text, TouchableOpacity } from "react-native"

const Result = ({
  navigateToMainPage,
  userName,
  userPhone,
  userGender,
  userAddress
}) => {
  return (
    <View>
      <Text>{userName}</Text>
      <Text>{userGender}</Text>
      <Text>{userAddress}</Text>
      <Text>{userPhone}</Text>

      <TouchableOpacity
        onPress={() => navigateToMainPage()}
        style={{ backgroundColor: "green" }}
      >
        <Text style={{ margin: 20 }}>Back to Main Page</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Result

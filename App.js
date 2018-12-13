import React, { Component } from "react"
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native"
import InputFormName from "./src/inputs/InputFormName"
import InputFormGender from "./src/inputs/InputFormGender"
import InputFormPhone from "./src/inputs/InputFormPhone"
import InputFormAddress from "./src/inputs/InputFormAddress"
import Main from "./src/Main"
import Result from "./src/Result"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pageNeedsTobeRendered: "Main",
      userName: "",
      userAddress: "",
      userPhone: "",
      userGender: ""
    }
  }

  navigateToInputFormName = () =>
    this.setState({ pageNeedsTobeRendered: "inputName" })
  navigateToInputAddress = () =>
    this.setState({ pageNeedsTobeRendered: "inputAddress" })
  navigateToInputPhone = () =>
    this.setState({ pageNeedsTobeRendered: "inputPhone" })
  navigateToInputGender = () =>
    this.setState({ pageNeedsTobeRendered: "inputGender" })
  navigateToMainPage = () => this.setState({ pageNeedsTobeRendered: "Main" })

  setUserName = name => this.setState({ userName: name })
  setUserAddress = address => this.setState({ userAddress: address })
  setUserPhone = phone => this.setState({ userPhone: phone })
  setUserGender = gender => this.setState({ userGender: gender })

  render() {
    const {
      pageNeedsTobeRendered,
      userName,
      userAddress,
      userGender,
      userPhone
    } = this.state // Destructuring

    if (pageNeedsTobeRendered === "inputName") {
      return (
        <InputFormName
          navigateToMainPage={this.navigateToMainPage}
          setUserName={this.setUserName}
        />
      )
    } else if (pageNeedsTobeRendered === "inputAddress") {
      return (
        <InputFormAddress
          navigateToMainPage={this.navigateToMainPage}
          setUserAddress={this.setUserAddress}
        />
      )
    } else if (pageNeedsTobeRendered === "inputPhone") {
      return (
        <InputFormPhone
          navigateToMainPage={this.navigateToMainPage}
          setUserPhone={this.setUserPhone}
        />
      )
    } else if (pageNeedsTobeRendered === "inputGender") {
      return (
        <InputFormGender
          navigateToMainPage={this.navigateToMainPage}
          setUserGender={this.setUserGender}
        />
      )
    }

    return (
      <Main
        userName={userName}
        userAddress={userAddress}
        userGender={userGender}
        userPhone={userPhone}
        navigateToInputAddress={this.navigateToInputAddress}
        navigateToInputGender={this.navigateToInputGender}
        navigateToInputPhone={this.navigateToInputPhone}
        navigateToInputFormName={this.navigateToInputFormName}
      />
    )
  }
}

export default App

import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"
import RowText from "../components/RowText"
import { weatherType } from "../utilities/weatherType"

export default function CurrentWeather () {
  const {wrapper, container, temp, feels, highLowWrapper, highLow, bodyWrapper, description, message } = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText bodyText1="High: 8" bodyText2="Low: 6" viewStyles={highLowWrapper} bodyTextStyle1={highLow} bodyTextStyle2={highLow} />
      </View>
      <RowText bodyText1="Its sunny" bodyText2={weatherType["Thunderstorm"].message} viewStyles={bodyWrapper} bodyTextStyle1={description} bodyTextStyle2={message} />    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  temp: {
    color: "black",
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: "black"
  },
  highLow: {
    color: "black",
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: "row"
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }

})
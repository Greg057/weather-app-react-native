import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"
import RowText from "../components/RowText"
import { weatherType } from "../utilities/weatherType"

export default function CurrentWeather ({ weatherData }) {
  const {wrapper, container, tempStyles, feels, highLowWrapper, highLow, bodyWrapper, description, message } = styles
  const { main: {temp, feels_like, temp_max, temp_min}, weather } = weatherData
  const weatherCondition = weather[0].main

  return (
    <SafeAreaView style={[wrapper, {backgroundColor: weatherType[weatherCondition].backgroundColor}]}>
      <View style={container}>
        <Feather name={weatherType[weatherCondition].icon} size={100} color="white" />
        <Text style={tempStyles}>{temp}</Text>
        <Text style={feels}>Feels like {feels_like}</Text>
        <RowText bodyText1={`High: ${temp_max}`} bodyText2={`Low: ${temp_min}`} viewStyles={highLowWrapper} bodyTextStyle1={highLow} bodyTextStyle2={highLow} />
      </View>
      <RowText bodyText1={weather[0].description} bodyText2={weatherType[weatherCondition].message} viewStyles={bodyWrapper} bodyTextStyle1={description} bodyTextStyle2={message} />    
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
  tempStyles: {
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
import { NavigationContainer } from "@react-navigation/native"
import { ActivityIndicator, StyleSheet, View } from "react-native"
import Tabs from "./src/components/Tabs"
import useGetWeather from "./src/hooks/useGetWeather"
import ErrorItem from "./src/components/ErrorItem"


export default function App () {
  const [loading, error, weather] = useGetWeather()

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      {error ? <ErrorItem /> : <ActivityIndicator size={"large"} color={"blue"}/>}
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center", 
    flex: 1
  }
})

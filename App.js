import CurrentWeather from "./src/components/CurrentWeather"
import UpcomingWeather from "./src/components/UpcomingWeather"
import { View, StyleSheet } from "react-native"

export default function App () {
  return (
    <View style={styles.container}>
      <UpcomingWeather />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
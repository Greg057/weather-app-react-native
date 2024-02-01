import { SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from "react-native"
import ListItem from "../components/ListItem"

const DATA = [
    {
        dt_text: "2023-02-18 12:00:00",
        main: {
            temp_min: 8.55,
            temp_max: 7.55,
        },
        weather: [
            {
                main: "Clear",
            }
        ],
    }, 
    {
        dt_text: "2023-02-18 15:00:00",
        main: {
            temp_min: 8.55,
            temp_max: 7.55,
        },
        weather: [
            {
                main: "Clouds",
            }
        ],
    },
    {
        dt_text: "2023-02-18 18:00:00",
        main: {
            temp_min: 8.55,
            temp_max: 7.55,
        },
        weather: [
            {
                main: "Rain",
            }
        ],
    },  
]


export default function UpcomingWeather () {
    function renderItem ({ item }) {
        return <ListItem condition={item.weather[0].main} dt_text={item.dt_text} min={item.main.temp_min} max={item.main.temp_max} />
    } 
    const { container, image } = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require("../../assets/upcoming-background.jpg")} style={image}>
                <Text>Upcoming Weather</Text>
                <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.dt_text} />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "royalblue"
        
    },
    image: {
        flex: 1
    }
})
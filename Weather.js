import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"], 
    title: "Haze", 
    subtitle: "Just don't go outside." 
    },
    Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"]
    },
    Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"]
    },
    Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"]
    },
    Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"]
    },
    Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"]
    },
    Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"]
    },
    Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"]
    },
    Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"]
    },
    Smoke: {
    iconName: "weather-cloudy",
    gradient: ["#203A43", "#2C5364"]
    },
    Fog: {
    iconName: "weather-fog",
    gradient: ["#314755", "#26a0da"]
    },
    Sand: {
    iconName: "weather-cloudy",
    gradient: ["#F3904F", "#3B4371"]
    },
    Ash: {
    iconName: "weather-cloudy",
    gradient: ["#3C3B3F", "#605C3C"]
    },
    Squall: {
    iconName: "weather-pouring",
    gradient: ["#000428", "#004e92"]
    },
    Tornado: {
    iconName: "weather-tornado",
    gradient: ["#0f0c29", "#302b63"]
    }
};

export default function Weather({temp, condition}) {
    return (
        <LinearGradient style={styles.container} colors={weatherOptions[condition].gradient}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={86} color="white" />
                <Text style={styles.temp}>
                    {temp}°C
                </Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
        );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired, 
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Clear", 
        "Clouds", 
        "Mist", 
        "Haze", 
        "Dust", 
        "Smoke", 
        "Fog", 
        "Sand", 
        "Ash", 
        "Squall", 
        "Tornado"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"
    }, 
    halfContainer: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"
    }, 
    temp: {
        fontSize: 32, 
        color: "white"
    }, 
    title: {
        color: "white", 
        fontSize: 44, 
        fontWeight: "300", 
        marginBottom: 10
    }, 
    subtitle: {
        color: "white", 
        fontSize: 24, 
        fontWeight: '600'
    }, 
    textContainer: {
        paddingHorizontal: 20, 
        alignItems: "flex-start"
    }
});

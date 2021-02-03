import React from "react";
import { StyleSheet, Text, View } from "react-native"
import PropTypes from "prop-types";


export default function Weather ({temp}){
    return (
    <View style={styles.container}> 
        <Text>{temp}</Text>
    </View>
    );
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Clouds", 
        "Atmosphere", 
        "Clear"
    ]).isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    } 
})
import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName:"weather-hail",
    gradient:["#4DA0B0", "#D39D38"],
    title:"Haze",
    subtitle:"밖에 나가지 말 것",
  },
  Clear: {
    iconName:"weather-sunny",
    gradient:["#2980B9", "#6DD5FA", "#FFFFFF"],
    title:"Clear",
    subtitle:"맑고 화창함",
  },
  Thunderstorm:{
    iconName:"weather-lightning-rainy",
    gradient:["#8E2DE2","#4A00E0"],
    title:"푹풍",
    subtitle:"천둥번개가 치므로 밖에 나가지 말 것",
  },
  Drizzle:{
    iconName:"weather-rainy",
    gradient:["#8E2DE2","#4A00E0"],
    title:"Drizzle",
    subtitle:"이슬비가 내리니 우산을 챙길 것",
  },
  Rain:{
    iconName:"weather-pouring",
    gradient:["#667db6","#0082c8","#0082c8","#667db6"],
    title:"Rain",
    subtitle:"비가 많이 쏟아지니 우산을 필수로 챙길 것",
  },
  Snow:{
    iconName:"weather-snowy",
    gradient:["#E0EAFC","#CFDEF3"],
    title:"Snow",
    subtitle:"눈이 옴",
  },
  Clouds:{
    iconName:"weather-sunny-off",
    gradient:["#D3CCE3","#E9E4F0"],
    title:"Clouds",
    subtitle:"구름이 낌",
  },
  Mist:{
    iconName:"weather-fog",
    gradient:["#8e9eab","#eef2f3"],
    title:"Mist",
    subtitle:"안개가 낌",
  },
  Dust:{
    iconName:"weather-cloudy",
    gradient:["#603813","#b29f94"],
    title:"Dust",
    subtitle:"먼지가 많으므로 마스크를 착용",
  }
}

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="default"/>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons 
          size = {96} 
          name = {weatherOptions[condition].iconName}
          color = "black"
        />
        <Text style={styles.temp}>{temp}℃</Text>
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
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize:42,
    color:"black",
  },
  halfContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
    color:"black",
    fontSize:44,
    fontWeight:"300",
    marginBottom:10,
  },
  subtitle:{
    color:"black",
    fontWeight:"600",
    fontSize:24,
  },
  textContainer:{
    paddingHorizontal:20,
    alignItems: "flex-start",

  }
});
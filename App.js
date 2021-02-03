import React from 'react';
import Loading from './Loading';
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from "axios";
import Weather from './Weather';

const API_KEY = "4e964c04ccb1e43dfc643791fadaa6d8";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
      );
      //console.log(data);
      this.setState({isLoading : false, temp : data.main.temp})
  };
  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      // Send to API and get weather
      this.setState({ isLoading: false });
    } catch (error){
      Alert.alert("Cant find you.", "So sad");
    }

  }
  componentDidMount(){
    this.getLocation();
  }
  render() {
    const { isLoading, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp = {Math.round(temp)}/>;
  }
}

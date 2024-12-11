import { View, Text, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import Header from '../components/Header';

const HomeScreen = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [permission, setPermission] = useState<boolean>(false);


async function getCurrentLocation() {
  try {
    const { status } = await Location.getForegroundPermissionsAsync();

    if (status !== "granted") {
      const requestStatus = await Location.requestForegroundPermissionsAsync();
      if (requestStatus.status !== "granted") {
        Alert.alert("Permission Denied", "Location permission is required.");
        return;
      }
    }

    const location = await Location.getCurrentPositionAsync({});
    console.log(location);

    // Replace these with your state handlers
    setPermission(true);
    setLocation(location);
  } catch (error) {
    console.error("Error fetching location:", error);
    Alert.alert("Error", "Failed to fetch location.");
  }
}

  useEffect(() => {
    getCurrentLocation();
  }, []);
  return (
    <View>
      
      <MapView style={styles.map}>
      {permission ? null : <View><Button onPress={getCurrentLocation} title='Allow Location'/></View> }
      </MapView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
    alignItems : "center",
    justifyContent : "center"
  },
  text: {
    fontSize :  20 ,
    color : "red",
    backgroundColor : "white" ,
     padding : 10 
  }
});

export default HomeScreen
import * as Location from "expo-location";

const getCurrentLocation = async () => {
  try {
    let location = await Location.getCurrentPositionAsync({});
    const newRegion = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    return newRegion;
  } catch (error) {
    alert("Error: " + error.message);
  }
};

export default getCurrentLocation;

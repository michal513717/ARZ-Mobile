import { useState, useEffect } from "react";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useCurrentLocation = () => {
  const [region, setRegion] = useState({
    latitude: 50.06452,
    longitude: 19.923259,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    const getUserLocation = async () => {
      try {
        let storedRegion = await AsyncStorage.getItem("cachedRegion");
        if (storedRegion) {
          setRegion(JSON.parse(storedRegion));
        } else {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== "granted") {
            alert("Permission Denied. Please enable location access to use this feature.");
            return;
          }

          let location = await Location.getCurrentPositionAsync({});
          const newRegion = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          };
          setRegion(newRegion);
          await AsyncStorage.setItem("cachedRegion", JSON.stringify(newRegion));
        }
      } catch (error) {
        alert("Error: " + error.message);
      }
    };

    getUserLocation();
  }, []);

  return region;
};

export default useCurrentLocation;

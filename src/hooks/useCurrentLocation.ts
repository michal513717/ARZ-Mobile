import { useState, useEffect } from "react";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
import getCurrentLocation from "./getCurrentLocation";
import getStoreLocation from "./getStoreLocation";

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
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          alert("Permission Denied. Please enable location access to use this feature.");
          return;
        }

        const storedRegion = await getStoreLocation();
        if (storedRegion) {
          setRegion(storedRegion);
        } else {
          const newRegion = await getCurrentLocation();
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

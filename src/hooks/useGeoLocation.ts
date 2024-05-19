import { useState } from "react";
import * as Location from "expo-location";
import { GeoPoint } from "firebase/firestore";

const useGeoLocation = (interval: number) => {
  const [geoPoints, setGeoPoints] = useState<any[]>([]);
  const [lastSaveTime, setLastSaveTime] = useState<number | null>(null);

  const saveLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const currentTime = Date.now();
    if (lastSaveTime === null || currentTime - lastSaveTime >= interval) {
      const newGeoPoint = {
        coordinate: new GeoPoint(
          location.coords.latitude,
          location.coords.longitude
        ),
        timestamp: location.timestamp,
      };
      setGeoPoints((prevGeoPoints) => [...prevGeoPoints, newGeoPoint]);
      setLastSaveTime(currentTime);
    }
  };

  return { geoPoints, saveLocation };
};

export default useGeoLocation;

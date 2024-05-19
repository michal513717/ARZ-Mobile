import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Image } from "react-native";
import YACHT_ICON from "../../assets/yacht_icon.png";
import useCurrentLocation from "../hooks/useCurrentLocation";
import useFirestore from "../hooks/useFirestore";
import useGeoLocation from "../hooks/useGeoLocation";
import useTimer from "../hooks/useTimer";
import useFirestoreSave from "../hooks/useFirestoreSave";
import { FIRESTORE_DB } from "../utils/firebase";
import { collection } from "firebase/firestore";

const MapScreen = ({ route }: { route: any }) => {
  const { competitionId, stageId } = route.params;
  const region = useCurrentLocation();
  const markers = useFirestore(
    `Competitions/${competitionId}/CompetitionStages/${stageId}/Routes`
  );

  const resultsCollectionRef = collection(
    FIRESTORE_DB,
    `Competitions/${competitionId}/CompetitionStages/${stageId}/Results`
  );
  const { geoPoints, saveLocation } = useGeoLocation(5000);
  const saveData = useFirestoreSave(resultsCollectionRef);
  const [isRunning, setIsRunning] = useState(false);
  const timer = useTimer(isRunning);

  // Check if stageId is available
  const [currentStageId, setCurrentStageId] = useState<string | null>(null);
  useEffect(() => {
    setCurrentStageId(stageId);
  }, [stageId]);

  useEffect(() => {
    if (isRunning) {
      const locationInterval = setInterval(saveLocation, 5000);
      return () => clearInterval(locationInterval);
    }
  }, [isRunning]);

  const handleStartStop = () => {
    if (isRunning) {
      setIsRunning(false);
      saveData({ geoPoints });
    } else {
      setIsRunning(true);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={region}
        showsMyLocationButton={true}
        showsUserLocation={true}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.coordinate.latitude,
              longitude: marker.coordinate.longitude,
            }}
            title={marker.title}
            description={marker.description}
          >
            <Image source={YACHT_ICON} style={{ width: 50, height: 50 }} />
          </Marker>
        ))}
      </MapView>
      {currentStageId && (
        <View style={styles.topRightCorner}>
          <Text style={styles.timerText}>{formatTime(timer)}</Text>
        </View>
      )}
      {currentStageId && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.startStopButton,
              { backgroundColor: isRunning ? "red" : "#007AFF" },
            ]}
            onPress={handleStartStop}
          >
            <Text style={styles.buttonText}>
              {isRunning ? "STOP" : "START"}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

const styles = StyleSheet.create({
  topRightCorner: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 5,
    padding: 5,
  },
  timerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  startStopButton: {
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default MapScreen;

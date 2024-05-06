import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { TouchableOpacity } from "react-native";
import { Text, Box } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import YACHT_ICON from "../../assets/yacht_icon.png";
import useCurrentLocation from "../hooks/useCurrentLocation";

const MapScreen = () => {
  const region = useCurrentLocation();

  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const fetchedMarkers = [
      {
        id: 1,
        title: "Marker 1",
        description: "AGH",
        coordinate: { latitude: 50.06452, longitude: 19.923259 },
      },
    ];
    setMarkers(fetchedMarkers);
  }, []);

  const navigation = useNavigation<any>();

  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        region={region}
        showsMyLocationButton={true}
        showsUserLocation={true}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          >
            <Image source={YACHT_ICON} style={{ width: 50, height: 50 }} />
          </Marker>
        ))}
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Box
            bg="#ffffff"
            w={120}
            h={40}
            justifyContent="center"
            alignItems="center"
            borderColor="#6198ff"
            borderWidth={2}
            borderRadius={10}
            marginLeft={10}
            marginTop={50}
          >
            <Text color="#6b6b6b" fontWeight="$800" fontSize={16}>
              Back to Home
            </Text>
          </Box>
        </TouchableOpacity>
      </MapView>
    </View>
  );
};

export default MapScreen;

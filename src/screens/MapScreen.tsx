import React from "react";
import { View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import YACHT_ICON from "../../assets/yacht_icon.png";
import useCurrentLocation from "../hooks/useCurrentLocation";
import useFirestore from "../hooks/useFirestore";

const MapScreen = ({ route }: { route: any }) => {
  const { competitionId, stageId } = route.params;
  const region = useCurrentLocation();

  const collectionPath = `Competitions/${competitionId}/CompetitionStages/${stageId}/Routes`;
  const markers = useFirestore(collectionPath);

  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
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
    </View>
  );
};

export default MapScreen;

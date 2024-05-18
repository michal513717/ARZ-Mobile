import React from "react";
import { View } from "react-native";
import { FIREBASE_AUTH } from "../utils/firebase";
import styles from "../utils/styles/styles";
import Header from "../components/Header";
import { Box } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView from "react-native-maps";
import useCurrentLocation from "../hooks/useCurrentLocation";

const HomeScreen = () => {
  const region = useCurrentLocation();
  const navigation = useNavigation<any>()/// <-- that isn't needed, you can directly use navigation prop

  const currentUser = FIREBASE_AUTH.currentUser;
  const userEmail = currentUser?.email;
  const userDisplayName = currentUser?.displayName;

  return (
    <>
      <Header userEmail={userEmail ?? ""} userDisplayName={userDisplayName} />
      <View>
        <View style={styles.containerContent}>
          <TouchableOpacity 
            style={styles.mainMain}
            onPress={() => navigation.navigate('MapScreen')}  
          >
            <Box w={270} h={270} style={{borderRadius: 16, overflow:"hidden"}}>
              <MapView
                style={{flex: 1}}
                region={region}
                showsUserLocation={true}
              />
            </Box>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
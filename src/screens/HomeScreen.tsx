import React from "react";
import { View } from "react-native";
import { FIREBASE_AUTH } from "../utils/firebase";
import styles from "../utils/styles/styles";
import Header from "../components/Header";
import { Box, Image, Text } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import MapImage from "./../../assets/map.png";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
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
            <Box w={270} h={270} >
              <Image 
                source={MapImage} 
                size="full" 
                borderWidth="$2" 
                borderColor="$white"
                borderRadius={16}
                alt="map"
              />
            </Box>
          </TouchableOpacity>
        </View>
      </View>
    </>

  );
};

export default HomeScreen;
import React, { useState } from "react";
import { View } from "react-native";
import { FIREBASE_AUTH } from "../utils/firebase";
import styles from "../utils/styles/styles";
import Header from "../components/Header";
import { Box, Text } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView from "react-native-maps";
import useCurrentLocation from "../hooks/useCurrentLocation";
import CompetitionModal from "../components/modals/CompetitionModal";
import StageModal from "../components/modals/StageModal";

const HomeScreen = () => {
  const region = useCurrentLocation();
  const navigation = useNavigation<any>(); /// <-- that isn't needed, you can directly use navigation prop

  const currentUser = FIREBASE_AUTH.currentUser;
  const userEmail = currentUser?.email;
  const userDisplayName = currentUser?.displayName;

  const [isCompetitionModalVisible, setCompetitionModalVisible] = useState(false);
  const [currentCompetitionId, setCurrentCompetitionId] = useState<string | null>(null);
  const [currentCompetitionName, setCurrentCompetitionName] = useState<string | null>(null);

  const [isStageModalVisible, setStageModalVisible] = useState(false);
  const [currentStageId, setCurrentStageId] = useState<string | null>(null);

  const handleJoinCompetition = (
    competitionId: string,
    competitionName: string
  ) => {
    setCurrentCompetitionId(competitionId);
    setCurrentCompetitionName(competitionName);
    setCompetitionModalVisible(false);
  };

  const handleChooseStage = (stageId: string) => {
    setCurrentStageId(stageId);
    setStageModalVisible(false);
  };

  return (
    <>
      <Header userEmail={userEmail ?? ""} userDisplayName={userDisplayName} />
      <View>
        <View style={styles.containerContent}>
          {currentCompetitionName && (
            <Box mt={10} mb={10}>
              <Text fontWeight="bold" fontSize={18}>
                Current competition: {currentCompetitionName}
              </Text>
            </Box>
          )}
          {currentStageId && (
            <Box mt={10} mb={10}>
              <Text fontWeight="bold" fontSize={18}>
                Current stage: {currentStageId}
              </Text>
            </Box>
          )}

          <TouchableOpacity
            style={styles.mainMain}
            onPress={() => navigation.navigate("MapScreen", { competitionId: currentCompetitionId, stageId: currentStageId })}
          >
            <Box
              w={270}
              h={270}
              style={{ borderRadius: 16, overflow: "hidden" }}
            >
              <MapView
                style={{ flex: 1 }}
                region={region}
                showsUserLocation={true}
              />
            </Box>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setCompetitionModalVisible(true)}>
            <Box
              bg="#6198FF"
              w={300}
              h={59}
              marginTop={20}
              justifyContent="center"
              alignItems="center"
              borderRadius={10}
            >
              <Text color="#ffffff" fontWeight="$800" fontSize={24}>
                Join competition
              </Text>
            </Box>
          </TouchableOpacity>

        {currentCompetitionId && (
            <TouchableOpacity onPress={() => setStageModalVisible(true)}>
              <Box
                bg="#6198FF"
                w={300}
                h={59}
                marginTop={20}
                justifyContent="center"
                alignItems="center"
                borderRadius={10}
              >
                <Text color="#ffffff" fontWeight="$800" fontSize={24}>
                  Choose stage
                </Text>
              </Box>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <CompetitionModal
        visible={isCompetitionModalVisible}
        onClose={() => setCompetitionModalVisible(false)}
        onJoinCompetition={handleJoinCompetition}
      />
      <StageModal
        visible={isStageModalVisible}
        onClose={() => setStageModalVisible(false)}
        onChooseStage={handleChooseStage}
        competitionId={currentCompetitionId ?? ""}
      />
    </>
  );
};

export default HomeScreen;

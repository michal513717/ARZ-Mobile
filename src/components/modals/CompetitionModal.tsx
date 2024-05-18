import React from "react";
import { Modal, TouchableOpacity, FlatList } from "react-native";
import { Box, VStack, Text } from "@gluestack-ui/themed";
import useFirestore from "../../hooks/useFirestore";

interface CompetitionModalProps {
  visible: boolean;
  onClose: () => void;
  onJoinCompetition: (competitionId: string, competitionName: string) => void;
}

const CompetitionModal: React.FC<CompetitionModalProps> = ({
  visible,
  onClose,
  onJoinCompetition,
}) => {
  const competitions = useFirestore("Competitions");

  return (
    <Modal animationType="slide" visible={visible} onRequestClose={onClose}>
      <Box flex={1} justifyContent="center" alignItems="center">
        <VStack space="md" alignItems="center" width="80%">
          <Text color="#6b6b6b" fontWeight="$800" fontSize={28}>
            Available competitions
          </Text>
          <FlatList
            data={competitions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Box
                key={item.id}
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                padding="$2.5"
                borderWidth={1}
                borderColor="#ccc"
                borderRadius={8}
                marginBottom="$2.5"
              >
                <Text>{item.name}</Text>
                <TouchableOpacity
                  onPress={() => onJoinCompetition(item.id, item.name)}
                >
                  <Box
                    bg="#6198FF"
                    padding="$2.5"
                    borderRadius={8}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Text color="#ffffff" fontWeight="bold">
                      Join
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Box>
            )}
          />
          <TouchableOpacity onPress={onClose}>
            <Box
              bg="#ffffff"
              width={177}
              height={49}
              borderColor="#6198ff"
              borderWidth={2}
              borderRadius={10}
              justifyContent="center"
              alignItems="center"
              marginTop="$2.5"
            >
              <Text color="#6b6b6b" fontWeight="bold" fontSize={18}>
                Cancel
              </Text>
            </Box>
          </TouchableOpacity>
        </VStack>
      </Box>
    </Modal>
  );
};

export default CompetitionModal;

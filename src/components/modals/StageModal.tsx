import React, { useState } from "react";
import { Modal, TouchableOpacity } from "react-native";
import { Box, VStack, Text } from "@gluestack-ui/themed";
import useFirestore from "../../hooks/useFirestore";

interface StageModalProps {
  visible: boolean;
  onClose: () => void;
  onChooseStage: (stageId: string) => void;
  competitionId: string | null;
}

const StageModal: React.FC<StageModalProps> = ({
  visible,
  onClose,
  onChooseStage,
  competitionId,
}) => {
  const [selectedStageId, setSelectedStageId] = useState<string | null>(null);

  if (!competitionId) {
    competitionId = "competitionId";
  }

  const stagesCollectionPath = `Competitions/${competitionId}/CompetitionStages`;
  const stages = useFirestore(stagesCollectionPath);

  const handleChooseStage = () => {
    if (selectedStageId) {
      onChooseStage(selectedStageId);
      onClose();
    }
  };

  return (
    <Modal animationType="slide" visible={visible} onRequestClose={onClose}>
      <Box flex={1} justifyContent="center" alignItems="center">
        <VStack space="md" alignItems="center" width="80%">
          <Text color="#6b6b6b" fontWeight="$800" fontSize={28}>
            Choose stage
          </Text>
          {stages.map((stage: any) => (
            <TouchableOpacity
              key={stage.id}
              onPress={() => setSelectedStageId(stage.id)}
            >
              <Box
                bg={selectedStageId === stage.id ? "#6198FF" : "#ffffff"}
                width={300}
                height={49}
                marginTop={1}
                borderRadius={10}
                justifyContent="center"
                alignItems="center"
                borderWidth={1}
                borderColor="#ccc"
              >
                <Text
                  color={selectedStageId === stage.id ? "#ffffff" : "#6b6b6b"}
                  fontWeight="bold"
                  fontSize={18}
                >
                  {stage.id}
                </Text>
              </Box>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={handleChooseStage}>
            <Box
              bg="#6198FF"
              width={300}
              height={49}
              marginTop={40}
              borderRadius={10}
              justifyContent="center"
              alignItems="center"
            >
              <Text color="#ffffff" fontWeight="bold" fontSize={18}>
                Choose
              </Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <Box
              bg="#ffffff"
              width={300}
              height={49}
              borderColor="#6198ff"
              borderWidth={1}
              marginTop={1}
              borderRadius={10}
              justifyContent="center"
              alignItems="center"
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

export default StageModal;

import React from "react";
import { Modal, TouchableOpacity } from "react-native";
import { Box, VStack, Text, Input, InputField } from "@gluestack-ui/themed";

interface DisplayNameModalProps {
  visible: boolean;
  onClose: () => void;
  userDisplayName: string | null;
  newDisplayName: string;
  setNewDisplayName: (name: string) => void;
  onUpdateDisplayName: () => void;
}

const DisplayNameModal: React.FC<DisplayNameModalProps> = ({
  visible,
  onClose,
  userDisplayName,
  newDisplayName,
  setNewDisplayName,
  onUpdateDisplayName,
}) => {
  return (
    <Modal animationType="slide" visible={visible} onRequestClose={onClose}>
      <Box flex={1} justifyContent="center" alignItems="center">
        <VStack space="md" alignItems="center" width="80%">
          <Text color="#6b6b6b" fontWeight="$800" fontSize={28}>
            Edit name
          </Text>
          <Text
            color="#6b6b6b"
            fontWeight="$800"
            fontSize={18}
            textAlign="center"
          >
            Current name: {userDisplayName}
          </Text>
          <Input>
            <InputField
              type="text"
              placeholder="New name"
              value={newDisplayName}
              onChangeText={setNewDisplayName}
            />
          </Input>
          <TouchableOpacity onPress={onUpdateDisplayName}>
            <Box
              bg="#6198FF"
              width={177}
              height={49}
              marginTop={10}
              borderRadius={10}
              justifyContent="center"
              alignItems="center"
            >
              <Text color="#ffffff" fontWeight="bold" fontSize={18}>
                Update name
              </Text>
            </Box>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose}>
            <Box
              bg="#ffffff"
              width={177}
              height={49}
              borderColor="#6198ff"
              borderWidth={2}
              marginTop={10}
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

export default DisplayNameModal;

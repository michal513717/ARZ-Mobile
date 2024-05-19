import React from "react";
import { Modal, TouchableOpacity } from "react-native";
import { Box, VStack, Text, Input, InputField } from "@gluestack-ui/themed";

interface EmailModalProps {
  visible: boolean;
  onClose: () => void;
  userEmail: string;
  newEmail: string;
  setNewEmail: (email: string) => void;
  onUpdateEmail: () => void;
}

const EmailModal: React.FC<EmailModalProps> = ({
  visible,
  onClose,
  userEmail,
  newEmail,
  setNewEmail,
  onUpdateEmail,
}) => {
  return (
    <Modal animationType="slide" visible={visible} onRequestClose={onClose}>
      <Box flex={1} justifyContent="center" alignItems="center">
        <VStack space="md" alignItems="center" width="80%">
          <Text color="#6b6b6b" fontWeight="$800" fontSize={28}>
            Edit email
          </Text>
          <Text
            color="#6b6b6b"
            fontSize={16}
            textAlign="center"
            marginBottom={10}
          >
            Current email: {userEmail}
          </Text>
          <Input>
            <InputField
              type="text"
              placeholder="abcd@domain.com"
              value={newEmail}
              onChangeText={setNewEmail}
            />
          </Input>
          <TouchableOpacity onPress={onUpdateEmail}>
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
                Update email
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

export default EmailModal;

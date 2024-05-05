import React from "react";
import { Modal, TouchableOpacity } from "react-native";
import { Box, VStack, Text } from "@gluestack-ui/themed";

interface DeleteAccountModalProps {
  visible: boolean;
  onClose: () => void;
  onDeleteAccount: () => void;
}

const DeleteAccountModal: React.FC<DeleteAccountModalProps> = ({
  visible,
  onClose,
  onDeleteAccount,
}) => {
  return (
    <Modal animationType="slide" visible={visible} onRequestClose={onClose}>
      <Box flex={1} justifyContent="center" alignItems="center">
        <VStack space="md" alignItems="center" width="80%">
          <Text color="#6b6b6b" fontWeight="$800" fontSize={28}>
            Delete account
          </Text>
          <Text
            color="#6b6b6b"
            fontSize={16}
            textAlign="center"
            marginBottom={10}
          >
            Are you sure you want to delete your account? This action cannot be undone.
          </Text>
          <TouchableOpacity onPress={onDeleteAccount}>
            <Box
              bg="#FF6347"
              width={177}
              height={49}
              marginTop={10}
              borderRadius={10}
              justifyContent="center"
              alignItems="center"
            >
              <Text color="#ffffff" fontWeight="bold" fontSize={18}>
                Delete account
              </Text>
            </Box>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose}>
            <Box
              bg="#ffffff"
              width={177}
              height={49}
              borderColor="#FF6347"
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

export default DeleteAccountModal;

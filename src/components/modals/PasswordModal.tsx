import React from "react";
import { Modal, TouchableOpacity } from "react-native";
import { Box, VStack, Text, Input, InputField } from "@gluestack-ui/themed";

interface PasswordModalProps {
  visible: boolean;
  onClose: () => void;
  newPassword: string;
  setNewPassword: (password: string) => void;
  newConfirmPassword: string;
  setNewConfirmPassword: (password: string) => void;
  onUpdatePassword: () => void;
}

const PasswordModal: React.FC<PasswordModalProps> = ({
  visible,
  onClose,
  newPassword,
  setNewPassword,
  newConfirmPassword,
  setNewConfirmPassword,
  onUpdatePassword,
}) => {
  return (
    <Modal animationType="slide" visible={visible} onRequestClose={onClose}>
      <Box flex={1} justifyContent="center" alignItems="center">
        <VStack space="md" alignItems="center" width="80%">
          <Text color="#6b6b6b" fontWeight="$800" fontSize={28}>
            Change password
          </Text>
          <Input>
            <InputField
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChangeText={setNewPassword}
            />
          </Input>
          <Input>
            <InputField
              type="password"
              placeholder="Confirm New Password"
              value={newConfirmPassword}
              onChangeText={setNewConfirmPassword}
            />
          </Input>
          <TouchableOpacity onPress={onUpdatePassword}>
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
                Change password
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

export default PasswordModal;

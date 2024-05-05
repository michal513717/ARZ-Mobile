import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Text, Center, Box } from "@gluestack-ui/themed";
import useProfileData from "../hooks/useProfileData";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../utils/firebase";
import DisplayNameModal from "../components/modals/DisplayNameModal";
import EmailModal from "../components/modals/EmailModal";
import PasswordModal from "../components/modals/PasswordModal";
import DeleteAccountModal from "../components/modals/DeleteAccountModal";

const ProfileScreen: React.FC = () => {
  const {
    newDisplayName,
    setNewDisplayName,
    newEmail,
    setNewEmail,
    newPassword,
    setNewPassword,
    newConfirmPassword,
    setNewConfirmPassword,
    updateUserDisplayName,
    updateUserEmail,
    updateUserPassword,
    deleteUserAccount,
  } = useProfileData();

  const navigation = useNavigation<any>();

  const currentUser = FIREBASE_AUTH.currentUser;
  const userEmail = currentUser?.email;
  const userDisplayName = currentUser?.displayName;

  const [displayNameModalVisible, setDisplayNameModalVisible] = useState(false);
  const [emailModalVisible, setEmailModalVisible] = useState(false);
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [deleteAccountModalVisible, setDeleteAccountModalVisible] = useState(false);

  const handleUpdateDisplayName = () => {
    updateUserDisplayName(newDisplayName);
    setNewDisplayName("");
    setDisplayNameModalVisible(false);
  };

  const handleUpdateEmail = () => {
    updateUserEmail(newEmail);
    setNewEmail("");
    setEmailModalVisible(false);
  };

  const handleUpdatePassword = () => {
    updateUserPassword(newPassword);
    setNewPassword("");
    setNewConfirmPassword("");
    setPasswordModalVisible(false);
  };

  const handleDeleteAccount = () => {
    deleteUserAccount();
    setDeleteAccountModalVisible(false);
  };

  return (
    <Center>
      <Box paddingTop={120}>
        <Text lineHeight={82} fontSize={55} fontWeight="$700" color="#2071ff">
          Your Profile
        </Text>
      </Box>

      <TouchableOpacity onPress={() => setDisplayNameModalVisible(true)}>
        <Box
          bg="#6198FF"
          w={300}
          h={59}
          marginTop={80}
          justifyContent="center"
          alignItems="center"
          borderRadius={10}
        >
          <Text color="#ffffff" fontWeight="$800" fontSize={24}>
            Edit name
          </Text>
        </Box>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setEmailModalVisible(true)}>
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
            Edit email
          </Text>
        </Box>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setPasswordModalVisible(true)}>
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
            Change password
          </Text>
        </Box>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setDeleteAccountModalVisible(true)}>
        <Box
          bg="#FF6347"
          w={300}
          h={59}
          marginTop={50}
          justifyContent="center"
          alignItems="center"
          borderRadius={10}
        >
          <Text color="#ffffff" fontWeight="$800" fontSize={24}>
            Delete account
          </Text>
        </Box>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("HomeScreen", { forceRefresh: true })
        }
      >
        <Box
          bg="#ffffff"
          w={177}
          h={59}
          marginTop={50}
          borderColor="#6198ff"
          justifyContent="center"
          alignItems="center"
          borderWidth={2}
          borderRadius={10}
        >
          <Text color="#6b6b6b" fontWeight="$800" fontSize={24}>
            Back to home
          </Text>
        </Box>
      </TouchableOpacity>

      <DisplayNameModal
        visible={displayNameModalVisible}
        onClose={() => setDisplayNameModalVisible(false)}
        userDisplayName={userDisplayName}
        newDisplayName={newDisplayName}
        setNewDisplayName={setNewDisplayName}
        onUpdateDisplayName={handleUpdateDisplayName}
      />

      <EmailModal
        visible={emailModalVisible}
        onClose={() => setEmailModalVisible(false)}
        userEmail={userEmail}
        newEmail={newEmail}
        setNewEmail={setNewEmail}
        onUpdateEmail={handleUpdateEmail}
      />

      <PasswordModal
        visible={passwordModalVisible}
        onClose={() => setPasswordModalVisible(false)}
        newPassword={newPassword}
        setNewPassword={setNewPassword}
        newConfirmPassword={newConfirmPassword}
        setNewConfirmPassword={setNewConfirmPassword}
        onUpdatePassword={handleUpdatePassword}
      />

      <DeleteAccountModal
        visible={deleteAccountModalVisible}
        onClose={() => setDeleteAccountModalVisible(false)}
        onDeleteAccount={handleDeleteAccount}
      />
    </Center>
  );
};

export default ProfileScreen;

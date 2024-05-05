import { updateProfile, updateEmail, updatePassword, deleteUser} from "firebase/auth";
import { useState } from "react";
import { FIREBASE_AUTH } from "../utils/firebase";

const useProfileData = () => {
  const [newDisplayName, setNewDisplayName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newConfirmPassword, setNewConfirmPassword] = useState("");

  const updateUserDisplayName = async (newDisplayName: string) => {
    try {
      await updateProfile(FIREBASE_AUTH.currentUser, {
        displayName: newDisplayName,
      });
    } catch (error) {
      alert("Failed to update display name: " + error.message);
    }
  };

  const updateUserEmail = async (newEmail: string) => {
    try {
      await updateEmail(FIREBASE_AUTH.currentUser, newEmail);
    } catch (error) {
      alert("Failed to update email: " + error.message);
    }
  };

  const updateUserPassword = async (newPassword: string) => {
    if (newPassword !== newConfirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    try {
      await updatePassword(FIREBASE_AUTH.currentUser, newPassword);
    } catch (error) {
      alert("Failed to update password: " + error.message);
    }
  };

  const deleteUserAccount = async () => {
    try {
      await deleteUser(FIREBASE_AUTH.currentUser);
    } catch (error) {
      alert("Failed to delete user account: " + error.message);
    }
  };

  return {
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
  };
};

export default useProfileData;

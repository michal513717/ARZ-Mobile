import { Box, Text, Image, SafeAreaView } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import React from "react";
import USER_PHOTO from "../../assets/user.png";
import LOGOUT_ICON from "../../assets/logout.png";
import useFirebaseAuth from "../hooks/useFirebaseAuth";

const Header: React.FC<{ userEmail: string; userDisplayName?: string }> = ({
  userEmail,
  userDisplayName,
}) => {
	
  const { signOut } = useFirebaseAuth();

  return (
    <SafeAreaView>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        padding="$3"
      >
        <Image source={USER_PHOTO} size="xs" />
        <Text pr="$3">
          {userDisplayName ? ` ${userDisplayName}` : ` ${userEmail}`}
        </Text>

        <TouchableOpacity onPress={signOut}>
          <Image source={LOGOUT_ICON} size="xs" />
        </TouchableOpacity>
      </Box>
    </SafeAreaView>
  );
};

export default Header;

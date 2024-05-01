import { Box, Text, Image, SafeAreaView } from '@gluestack-ui/themed';
import React from 'react';
import USER_PHOTO from '../../assets/user.png';

const Header: React.FC<{ userEmail: string }> = ({ userEmail }) => {
  return (
    <SafeAreaView>
      <Box
        flexDirection="row"
        alignItems="center"
        padding="$3"
      >
        <Image 
          source={USER_PHOTO}
          size="xs"
        />
        <Text pl="$3">
          email: {userEmail} 
        </Text>
      </Box>
    </SafeAreaView>
  )
}

export default Header;
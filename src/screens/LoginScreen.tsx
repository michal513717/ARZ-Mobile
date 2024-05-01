import React from "react";
import { TouchableOpacity } from "react-native";
import useFirebaseAuth from "../hooks/useFirebaseAuth";
import { useNavigation } from "@react-navigation/native";
import { Center, Text, Box, VStack, InputField, Input } from "@gluestack-ui/themed";

const LoginScreen = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    signIn
  } = useFirebaseAuth();

  const navigation = useNavigation<any>();

  return (
    <Center>
      <Box paddingTop={120}>
        <Text
          lineHeight={82}
          fontSize={55}
          fontWeight="$700"
          color="#2071ff"
        > Log In </Text>
      </Box>

      <VStack space="xs" width="80%" paddingTop={60}>
        <Text color="$text500" lineHeight="$xs">
          Email
        </Text>
        <Input>
          <InputField type="text" placeholder="abcd@domain.com" onChangeText={setEmail} value={email}/>
        </Input>
      </VStack>

      <VStack space="xs" width="80%" paddingTop={30}>
        <Text color="$text500" lineHeight="$xs">
          Password
        </Text>
        <Input>
          <InputField type="password" placeholder="**********" onChangeText={setPassword} value={password}/>
        </Input>
      </VStack>

      <TouchableOpacity
        onPress={signIn}
      >
        <Box
          bg="#6198FF"
          w={177} h={59}
          justifyContent="center"
          alignItems="center"
          marginTop={120}
          borderRadius={10}
        >
          <Text
            color="#ffffff"
            fontWeight="$800"
            fontSize={24}
          >
            Log In
          </Text>
        </Box>
      </TouchableOpacity>

      <Box flexDirection='row' alignItems='center' paddingTop={10} paddingBottom={10}>
        <Box width={60} height={1} backgroundColor='black' />
        <Box>
          <Text width={50} textAlign='center'>Or</Text>
        </Box>
        <Box width={60} height={1} backgroundColor='black' />
      </Box>

      <TouchableOpacity
        onPress={ ()=> navigation.navigate('RegisterScreen') }
      >
        <Box
          bg="#ffffff"
          w={177} h={59}
          justifyContent="center"
          alignItems="center"
          borderColor="#6198ff"
          borderWidth={2}
          borderRadius={10}
        >
          <Text
            color="#6b6b6b"
            fontWeight="$800"
            fontSize={24}
          >
            Sign Up
          </Text>
        </Box>
      </TouchableOpacity>
    </Center>
  );
}

export default LoginScreen;
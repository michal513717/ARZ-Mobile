import React from 'react'
import { TouchableOpacity } from "react-native";
import { Center, Text, Box, VStack, InputField, Input } from "@gluestack-ui/themed";
import useFirebaseAuth from '../hooks/useFirebaseAuth';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    displayName,
    setDisplayName,
    loading,
    signUp
  } = useFirebaseAuth();

  const navigation = useNavigation<any>();

  return (
    (
      <Center>
        <Box paddingTop={120}>
          <Text
            lineHeight={82}
            fontSize={55}
            fontWeight="$700"
            color="#2071ff"
          > Sign Up </Text>
        </Box>

        <VStack space="xs" width="80%" paddingTop={50}>
          <Text color="#000000" lineHeight="$xs">
            Email
          </Text>
          <Input>
            <InputField type="text" placeholder="abcd@domain.com" value={email} onChangeText={setEmail}/>
          </Input>
        </VStack>

        <VStack space="xs" width="80%" paddingTop={10}>
          <Text color="#000000" lineHeight="$xs">
            Name (Optional)
          </Text>
          <Input>
            <InputField type="text" placeholder="Your name" value={displayName} onChangeText={setDisplayName}/>
          </Input>
        </VStack>

        <VStack space="xs" width="80%" paddingTop={30}>
          <Text color="#000000" lineHeight="$xs">
            Password
          </Text>
          <Input>
            <InputField type="password" placeholder="**********" value={password} onChangeText={setPassword}/>
          </Input>
        </VStack>

        <VStack space="xs" width="80%" paddingTop={10}>
          <Text color="#000000" lineHeight="$xs">
            Confirm Password
          </Text>
          <Input>
            <InputField type="password" placeholder="**********" value={confirmPassword} onChangeText={setConfirmPassword}/>
          </Input>
        </VStack>

        <TouchableOpacity
          onPress={signUp}
        >
          <Box
            bg="#6198FF"
            w={177} h={59}
            marginTop={80}
            justifyContent="center"
            alignItems="center"
            borderRadius={10}
          >
            <Text
              color="#ffffff"
              fontWeight="$800"
              fontSize={24}
            >
              Sign Up
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

        <TouchableOpacity onPress={ ()=> navigation.navigate('LoginScreen')}>
          <Box
            bg="#ffffff"
            w={177} h={59}
            borderColor="#6198ff"
            justifyContent="center"
            alignItems="center"
            borderWidth={2}
            borderRadius={10}
          >
            <Text
              color="#6b6b6b"
              fontWeight="$800"
              fontSize={24}
            >
              Log In
            </Text>
          </Box>
        </TouchableOpacity>
      </Center>
    )
  )
}

export default RegisterScreen
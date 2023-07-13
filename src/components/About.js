import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";

export default function About({ color }) {
  const profile = ProfileArray();
  return (
    <>
      <Container maxW={"3xl"} id="about">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                01
              </Text>
              <Text fontWeight={800}>About</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <img className="profile-pic" alt="Profile" src="https://media.licdn.com/dms/image/D4E03AQGfXqTOUqqDzw/profile-displayphoto-shrink_400_400/0/1687435863833?e=1694649600&v=beta&t=CS8GTIGiX9IKtdtYS1RSkuboS0mDog9xEzoRahkd1zE" />
          <Text color={"gray.600"} fontSize={"xl"} px={4}>
            {profile.about}
          </Text>
        </Stack>
      </Container>
    </>
  );
}


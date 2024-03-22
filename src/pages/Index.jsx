import React from "react";
import { Box, Flex, Heading, Text, Button, Avatar, Spacer, VStack, HStack, IconButton, Input, Link } from "@chakra-ui/react";
import { FaGithub, FaDocker, FaMapMarkedAlt, FaBug } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.900" color="white" minH="100vh">
      <Flex p={4} alignItems="center">
        <Avatar name="Devin" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwYXZhdGFyfGVufDB8fHx8MTcxMTA2ODEwM3ww&ixlib=rb-4.0.3&q=80&w=1080" />
        <Spacer />
        <HStack spacing={4}>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Contact</Button>
        </HStack>
      </Flex>

      <VStack spacing={8} mt={20} alignItems="center" textAlign="center">
        <Heading as="h1" size="2xl">
          Hi, I'm Devin 👋
        </Heading>
        <Text fontSize="xl" maxW="600px">
          I'm a software engineer. Send me a coding task and I'll get it done for you!
        </Text>

        <HStack spacing={4}>
          <Button leftIcon={<FaGithub />} colorScheme="blue">
            Run my Github repo
          </Button>
          <Button leftIcon={<FaBug />} colorScheme="red">
            Debug & fix tests
          </Button>
          <Button leftIcon={<FaDocker />} colorScheme="teal">
            Setup LLM in Docker
          </Button>
          <Button leftIcon={<FaMapMarkedAlt />} colorScheme="green">
            CA Wildfires Map 2023
          </Button>
        </HStack>
      </VStack>

      <Flex p={4} justifyContent="space-between" mt={20}>
        <HStack>
          <Button variant="link">Request Access</Button>
          <Button variant="link">About Us</Button>
        </HStack>
        <Spacer />
        <Flex alignItems="center">
          <Input placeholder="Ask me anything..." bg="gray.800" mr={2} />
          <IconButton icon={<FaMapMarkedAlt />} colorScheme="green" />
        </Flex>
      </Flex>

      <Box p={4} fontSize="sm" textAlign="center">
        <Text>
          Can you create an interactive map of California wildfires in 2023 using this CSV data?{" "}
          <Link color="blue.400" href="https://example.com/ca-wildfires-2023.csv">
            https://example.com/ca-wildfires-2023.csv
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Index;

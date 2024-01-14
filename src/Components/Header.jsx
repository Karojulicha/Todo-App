import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

export function Header() {
  return (
    <Flex
      direction="column"
      align="center"
      p={10}
      mb={6}
      gap={4}
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
    >
      <Heading mb={5} as="h1" color="#8a7e66">
        TodoApp
      </Heading>
      <Flex w="100%" align="center">
        <Input
          placeholder="Add your new ToDo"
          variant="filled"
          borderRadius={5}
          flex="1"
          h={30}
        />
        <Button
          colorScheme="blue"
          borderRadius={5}
          ml={2}
          h={33}
          _hover={{ background: "#a79b83" }}
        >
          <AiOutlinePlus size={25} />
        </Button>
      </Flex>
    </Flex>
  );
}


import PropTypes from 'prop-types';
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { Button, Flex, Stack, Text } from '@chakra-ui/react';

export default function TaskCard({ content }) {
    return (
        <Flex
            border="2px solid #bbb2a1"
            borderRadius={5}
            alignItems="center"
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
            width={{ base: '90%', md: '70%', lg: '60%' }}
        >
              <Stack spacing={8} direction='row' alignItems="center">
                <Button
                    as={AiOutlineHeart}
                    fontSize="20px"
                    color="#9fd6d2"
                    _hover={{ color: '#8a7e66' }}
                    pl={2}
                />
                <Text fontSize="22px">{content}</Text>
            </Stack>
            <Flex pr="4"justifyContent="end" width="100%" gap={4} >
                <Button
                    background="#d0ecea"
                    borderColor="#d0ecea"
                    borderRadius={8}
                    _hover={{ background: '#78b3a4' }}
                    width="20%"
                    padding="8px"
                >
                    <FiEdit />
                </Button>
                <Button
                    background="#d1dbc8"
                    borderColor="#d1dbc8"
                    borderRadius={8}
                    _hover={{ background: '#847b6d' }}
                    width="20%"
                    padding="8px"
                >
                    <MdDelete />
                </Button>
            </Flex>
        </Flex>
    )
}

TaskCard.propTypes = {
    content: PropTypes.string.isRequired,
};


TaskCard.propTypes = {
    content: PropTypes.string.isRequired,
};

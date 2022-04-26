import { Box, Flex, Switch, Text, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex align={['center']} gap={3} onClick={toggleColorMode} cursor={'pointer'}>
            <Box my={'auto'}>{colorMode === 'light' ? <FaMoon color="grey" /> : <FaSun color="orange" />}</Box>
            <Text fontSize="sm" as="b">
                Click to toggle {colorMode === 'dark' ? 'light' : 'dark'}
            </Text>
        </Flex>
    );
};

export default ModeSwitch;

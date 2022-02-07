import { Flex, Switch, Text, useColorMode } from '@chakra-ui/react';

const ModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex align={['center']} gap={5}>
            <Text fontSize='sm' as='b'>
                Toggle {colorMode === 'dark' ? 'light' : 'dark'}
            </Text>
            <Switch size='md' onChange={toggleColorMode} />
        </Flex>
    );
};

export default ModeSwitch;

import { CloseIcon } from '@chakra-ui/icons';
import { Box, Drawer, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, IconButton, Image, Menu, MenuButton, useDisclosure } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import AutoSuggestion from '../../AutoSuggestion';
import Sidebar from '../Sidebar';

const Header: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Flex alignItems={'center'} height={'10%'}>
                <Box flex={1} p={1}>
                    <Menu>
                        <MenuButton as={IconButton} aria-label="Options" icon={<GiHamburgerMenu />} variant="outline" onClick={onOpen} />
                    </Menu>
                </Box>
                <AutoSuggestion />
            </Flex>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Heading variant={'h2'} size={'lg'} flex={1}>
                                CatchaTrailer
                            </Heading>
                            <IconButton aria-label="Close Sidebar" variant="outline" onClick={onClose}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                    </DrawerHeader>
                    <Sidebar />
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Header;

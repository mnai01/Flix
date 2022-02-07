import { Flex } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import SidebarSection from './SidebarSection';
import ModeSwitch from '../../ModeSwitch';

export interface MenuItemProps {
    path: string;
    label: string;
    leftIcon?: JSX.Element;
    isFullWidth: boolean;
}

const NavigationMenu: MenuItemProps[] = [
    {
        path: '/',
        label: 'Home',
        leftIcon: <FaHome />,
        isFullWidth: true,
    },
    {
        path: '/movies',
        label: 'Movies',
        leftIcon: <FaHome />,
        isFullWidth: true,
    },
    {
        path: '/tv',
        label: 'TV',
        leftIcon: <FaHome />,
        isFullWidth: true,
    },
];

const CategoryMenu: MenuItemProps[] = [
    {
        path: '/category/action',
        label: 'Action',
        leftIcon: <FaHome />,
        isFullWidth: true,
    },
    {
        path: '/category/horror',
        label: 'Horror',
        leftIcon: <FaHome />,
        isFullWidth: true,
    },
    {
        path: '/category/adventure',
        label: 'Adventure',
        leftIcon: <FaHome />,
        isFullWidth: true,
    },
];

const Sidebar = () => {
    return (
        <Flex direction='column' width='200px' height='100%' justify='space-around' p={1}>
            <SidebarSection title={'Navigation'} items={NavigationMenu} />
            <SidebarSection title={'Categories'} items={CategoryMenu} />
            <ModeSwitch />
        </Flex>
    );
};

export default Sidebar;

import { Flex } from '@chakra-ui/react';
import { FaDesktop, FaFilm, FaHome } from 'react-icons/fa';
import SidebarSection from './SidebarSection';
import AutoSuggestion from '../../AutoComplete';
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
        leftIcon: <FaFilm />,
        isFullWidth: true,
    },
    {
        path: '/tv',
        label: 'TV',
        leftIcon: <FaDesktop />,
        isFullWidth: true,
    },
];

const CategoryMenu: MenuItemProps[] = [
    {
        path: '/category/action',
        label: 'Action',
        isFullWidth: true,
    },
    {
        path: '/category/horror',
        label: 'Horror',
        isFullWidth: true,
    },
    {
        path: '/category/adventure',
        label: 'Adventure',
        isFullWidth: true,
    },
];

const Sidebar = () => {
    return (
        <Flex direction='column' width='240px' height='100%' justify='space-around' p={1}>
            <AutoSuggestion />
            <SidebarSection title={'Navigation'} items={NavigationMenu} />
            <SidebarSection title={'Categories'} items={CategoryMenu} />
            <ModeSwitch />
        </Flex>
    );
};

export default Sidebar;

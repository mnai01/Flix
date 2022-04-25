import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import { BsMegaphoneFill } from 'react-icons/bs';
import { FaDesktop, FaFilm, FaHome } from 'react-icons/fa';
import SidebarSection from './SidebarSection';
// eslint-disable-next-line import/no-named-as-default
import useGenreParams from '../../../utils/hooks/useGenreParams';
import AutoSuggestion from '../../AutoSuggestion';
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
    {
        path: '/updates',
        label: 'Updates',
        leftIcon: <BsMegaphoneFill />,
        isFullWidth: true,
    },
];

const Sidebar = () => {
    const { data, type, loading } = useGenreParams();
    const [isLessThan768] = useMediaQuery('(max-width: 768px)');

    return (
        // other sites use 240px
        <Flex direction="column" flexBasis={'220px'} flexGrow={0} flexShrink={0} height="fit-content" justify="space-around" p={1}>
            {!isLessThan768 && <AutoSuggestion />}
            <Box p={3}>
                <ModeSwitch />
            </Box>
            <SidebarSection title={'Navigation'} items={NavigationMenu} />
            <SidebarSection title={type === 'tv' ? 'TV Categories' : type === 'movies' ? 'Movie Categories' : 'Categories'} items={data} loading={loading} />
        </Flex>
    );
};

export default Sidebar;

import { Flex } from '@chakra-ui/react';
import { FaDesktop, FaFilm, FaHome } from 'react-icons/fa';
import SidebarSection from './SidebarSection';
import { uncapitalize } from '../../../utils/helper/FirstCharacterHelper';
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
];

const Sidebar = () => {
    const { data, type } = useGenreParams();

    const genreArr: MenuItemProps[] | undefined = data?.map((i: any) => {
        return { path: `/${type}/category/${uncapitalize(i.name)}`, label: i.name, isFullWidth: true };
    });

    return (
        <Flex direction="column" flexBasis={'240px'} flexGrow={0} flexShrink={0} height="100%" justify="space-around" p={1}>
            <AutoSuggestion />
            <SidebarSection title={'Navigation'} items={NavigationMenu} />
            {type === 'tv' || type === 'movies' ? <SidebarSection title={'Categories'} items={genreArr} /> : ''}
            <ModeSwitch />
        </Flex>
    );
};

export default Sidebar;

import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useGenres } from '../../components/Providers/GenreProvider';
import { uncapitalize } from '../helper/FirstCharacterHelper';

export interface MenuItemProps {
    path: string;
    label: string;
    leftIcon?: JSX.Element;
    isFullWidth: boolean;
}

interface genreSelectedProps {
    name: string;
    id: string;
}

const useGenreParams = () => {
    const { data, loading, error } = useGenres();

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const temp = pathname.split('/')[1] as 'tv' | 'movies' | 'home';
    const type: 'tv' | 'movies' | 'home' = temp === 'tv' || temp === 'movies' ? temp : 'home';
    const { genre } = useParams() as { genre: string };
    const [genreSelected, setGenreSelected] = useState<genreSelectedProps>();

    const customCategory = { home: [{ name: 'Top Trending', id: '000000' }] };
    const customData = { ...data?.Genres, ...customCategory };

    useEffect(() => {
        if (genre && !loading && type && customData[type]?.find((i) => i.name === genre.replace(/\b\w/g, (c) => c.toUpperCase()))) {
            setGenreSelected(customData[type]?.find((i) => i.name === genre.replace(/\b\w/g, (c) => c.toUpperCase())));
        }
        if (genre && !loading && type && !customData[type]?.find((i) => i.name === genre.replace(/\b\w/g, (c) => c.toUpperCase()))) {
            navigate('/NotFound');
        }
    }, [genre, loading, data, type]);

    const parseGenreData: MenuItemProps[] | undefined = customData[type]?.map((i: any) => {
        return { path: `/${type}/category/${uncapitalize(i.name)}`, label: i.name, isFullWidth: true };
    });

    return { genre: genreSelected, loading, error, data: parseGenreData, type };
};

export default useGenreParams;

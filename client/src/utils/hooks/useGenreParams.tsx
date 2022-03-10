import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Genres_Genres_movies } from '../../apollo/generated/Genres';
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

export const useGenreParams = () => {
    const { data: genreApiData, error, loading } = useGenres();

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const temp = pathname.split('/')[1] as 'tv' | 'movies' | 'home';
    const type: 'tv' | 'movies' | 'home' = temp === 'tv' || temp === 'movies' ? temp : 'home';
    const { genre } = useParams() as { genre: string };
    const [genreSelected, setGenreSelected] = useState<genreSelectedProps>();

    // If you dont want custom home genres switch { home: [{ __typename: 'Genre', name: 'Top Trending', id: '000000' }] } to { home: undefined }] }
    const customGenres: { home?: Array<Genres_Genres_movies> } = { home: [{ __typename: 'Genre', name: 'Top Trending', id: '000000' }] };

    const data = customGenres.home !== undefined ? { ...genreApiData?.Genres, ...customGenres } : { ...genreApiData?.Genres };

    useEffect(() => {
        if (genre && !loading && type && data[type]?.find((i) => i.name === genre.replace(/\b\w/g, (c) => c.toUpperCase()))) {
            setGenreSelected(data[type]?.find((i) => i.name === genre.replace(/\b\w/g, (c) => c.toUpperCase())));
        }
        if (genre && !loading && type && !data[type]?.find((i) => i.name === genre.replace(/\b\w/g, (c) => c.toUpperCase()))) {
            navigate('/NotFound');
        }
    }, [genre, loading, genreApiData, type]);

    const parseGenreButtonData: MenuItemProps[] | undefined = data[type]?.map((i: any) => {
        return { path: `/${type}/category/${uncapitalize(i.name)}`, label: i.name, isFullWidth: true };
    });

    return { genre: genreSelected, loading, error, data: parseGenreButtonData, type };
};

export default useGenreParams;

import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Genres, Genres_Genres } from '../../apollo/generated/Genres';
import { GET_GENRES } from '../../apollo/queries';
import { useGenres } from '../../components/Providers/GenreProvider';

const useGenreParams = () => {
    const { data, loading, error } = useGenres();

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const temp = pathname.split('/')[1] as 'tv' | 'movies' | 'home';
    const type: 'tv' | 'movies' | 'home' = temp === 'tv' || temp === 'movies' ? temp : 'home';
    const { genre } = useParams() as { genre: string };
    const [genreSelected, setGenreSelected] = useState<any>();

    const customCategory = { home: [{ name: 'Top Trending', id: '9999999' }] };
    const customData = { ...data?.Genres, ...customCategory };

    useEffect(() => {
        if (genre && !loading && type && customData[type]?.find((i) => i.name === genre.replace(/\b\w/g, (c) => c.toUpperCase()))) {
            setGenreSelected(customData[type]?.find((i) => i.name === genre.replace(/\b\w/g, (c) => c.toUpperCase())));
        }
        if (genre && !loading && type && !customData[type]?.find((i) => i.name === genre.replace(/\b\w/g, (c) => c.toUpperCase()))) {
            navigate('/NotFound');
        }
    }, [genre, loading, data, type]);

    return { genre: genreSelected, loading, error, data: customData, type };
};

export default useGenreParams;

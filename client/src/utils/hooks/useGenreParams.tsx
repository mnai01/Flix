import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Genres, Genres_Genres } from '../../apollo/generated/Genres';
import { GET_GENRES } from '../../apollo/queries';
import { useGenres } from '../../components/Providers/GenreProvider';
import { uncapitalize } from '../helper/FirstCharacterHelper';

const useGenreParams = () => {
    const { data, loading, error } = useGenres();

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const temp = pathname.split('/')[1] as 'tv' | 'movies' | 'home';
    const type: 'tv' | 'movies' | false = temp === 'tv' || temp === 'movies' ? temp : false;
    const { genre } = useParams() as { genre: string };
    const [genreSelected, setGenreSelected] = useState<any>();

    useEffect(() => {
        if (genre && !loading && type && data?.Genres[type]?.find((i) => i.name === genre.replace(/\b\w/g, (c) => c.toUpperCase()))) {
            setGenreSelected(data?.Genres[type]?.find((i) => i.name === genre.replace(/\b\w/g, (c) => c.toUpperCase())));
        }
        if (genre && !loading && type && !data?.Genres[type]?.find((i) => i.name === genre.replace(/\b\w/g, (c) => c.toUpperCase()))) {
            navigate('/NotFound');
        }
    }, [genre, loading, data, type]);

    return {
        genre: genreSelected,
        loading,
        error,
        data: type
            ? data?.Genres[type]?.map((i: any) => {
                  return { path: `/${type}/category/${uncapitalize(i.name)}`, label: i.name, isFullWidth: true };
              })
            : (false as const),
        type,
    };
};

export default useGenreParams;

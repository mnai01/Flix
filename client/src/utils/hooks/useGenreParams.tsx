import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Genres, Genres_Genres } from '../../apollo/generated/Genres';
import { GET_GENRES } from '../../apollo/queries';
import { useGenres } from '../../components/Providers/GenreProvider';

interface useGenreParamsProps {
    genreType: 'tv' | 'movie';
}

const useGenreParams = () => {
    const { data, loading, error } = useGenres();

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const temp = pathname.split('/')[1] as 'tv' | 'movies';
    const type = temp === 'tv' || temp === 'movies' ? temp : 'movies';
    console.log(type);
    const { genre } = useParams() as { genre: string };
    const [genreSelected, setGenreSelected] = useState<any>();

    useEffect(() => {
        if (genre && !loading && type && data?.Genres[type].find((i) => i.name === genre.replace(/\b\w/g, (c) => c.toUpperCase()))) {
            setGenreSelected(data?.Genres[type].find((i) => i.name === genre.replace(/\b\w/g, (c) => c.toUpperCase())));
        }
        if (genre && !loading && type && !data?.Genres[type].find((i) => i.name === genre.replace(/\b\w/g, (c) => c.toUpperCase()))) {
            navigate('/NotFound');
        }
    }, [genre, loading, data, type]);

    console.log(genreSelected);
    return { genre: genreSelected, loading, error, data: data?.Genres[type], type };
};

export default useGenreParams;

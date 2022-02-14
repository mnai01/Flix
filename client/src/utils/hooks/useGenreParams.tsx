import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Genres_genres } from '../../apollo/generated/Genres';
import { useGenres } from '../../components/Providers/GenreProvider';

const useGenreParams = () => {
    const { data, loading, error } = useGenres();
    const navigate = useNavigate();
    const { genre } = useParams() as { genre: string };
    const [genreSelected, setGenreSelected] = useState<Genres_genres>();

    useEffect(() => {
        if (data?.genres.find((i) => i.name === genre.replace(/\b\w/g, (c) => c.toUpperCase()))) {
            setGenreSelected(data?.genres.find((i) => i.name === genre.replace(/\b\w/g, (c) => c.toUpperCase())));
        }
        if (!loading && !data?.genres.find((i) => i.name === genre.replace(/\b\w/g, (c) => c.toUpperCase()))) {
            navigate('/NotFound');
        }
    }, [genre, loading, data]);

    return { genre: genreSelected, loading, error };
};

export default useGenreParams;

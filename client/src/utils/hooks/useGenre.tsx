import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { genreProps, getGenreByName } from '../helper/getGenre';

const useGenre = () => {
    const navigate = useNavigate();
    const { genre } = useParams() as { genre: string };
    const [genreSelected, setGenreSelected] = useState<genreProps>({ id: 0, name: 'none' });

    useEffect(() => {
        const temp = getGenreByName(genre);
        setGenreSelected(temp);
        if (temp.id === 0) {
            navigate('/NotFound');
        }
    }, [genre]);

    return { genre: genreSelected };
};

export default useGenre;

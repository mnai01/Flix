import { ApolloError, useQuery } from '@apollo/client';
import { createContext, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FindMovieByTMDB, FindMovieByTMDBVariables } from '../../../apollo/generated/FindMovieByTMDB';
import { GET_MOVIE_FROM_TMDB } from '../../../apollo/queries';

interface SelectedMovieContextProps {
    error?: ApolloError;
    loading: boolean;
    data?: FindMovieByTMDB;
    movie?: any;
    tmdb?: string;
}

const SelectedMovieContext = createContext<SelectedMovieContextProps | undefined>(undefined);

const SelectedMovieProvider: React.FC = ({ children }) => {
    const { id } = useParams();
    const [movie, setMovie] = useState<any>();

    const { data, loading, error } = useQuery<FindMovieByTMDB, FindMovieByTMDBVariables>(GET_MOVIE_FROM_TMDB, {
        onCompleted: (data) => {
            setMovie(data);
            console.log(data);
        },
        fetchPolicy: 'network-only',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        variables: { movieId: id! },
        skip: !id,
    });

    return <SelectedMovieContext.Provider value={{ data, loading, error, movie, tmdb: id }}>{children}</SelectedMovieContext.Provider>;
};
const useSelectedMovie = (): SelectedMovieContextProps => {
    const context = useContext(SelectedMovieContext);
    if (context === undefined) {
        throw new Error('useSelectedMovie must be used within a SelectedMovieProvider');
    }
    return context;
};

export { SelectedMovieProvider, useSelectedMovie };

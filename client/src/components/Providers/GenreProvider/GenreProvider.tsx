import { ApolloError, useQuery } from '@apollo/client';
import { createContext, useContext } from 'react';
import { Genres } from '../../../apollo/generated/Genres';
import { GET_GENRES } from '../../../apollo/queries';

interface GenreContextProps {
    error?: ApolloError;
    loading: boolean;
    data?: Genres;
}

const GenreContext = createContext<GenreContextProps | undefined>(undefined);

const GenreProvider: React.FC = ({ children }) => {
    const { loading, error, data } = useQuery<Genres>(GET_GENRES, {
        fetchPolicy: 'network-only',
    });

    return <GenreContext.Provider value={{ error, loading, data }}>{children}</GenreContext.Provider>;
};
const useGenres = (): GenreContextProps => {
    const context = useContext(GenreContext);
    if (context === undefined) {
        throw new Error('useGenre must be used within a GenreProvider');
    }
    return context;
};

export { GenreProvider, useGenres };

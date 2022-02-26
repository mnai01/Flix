import { ApolloError, useQuery } from '@apollo/client';
import { createContext, useContext } from 'react';
import { Genres } from '../../../apollo/generated/Genres';
import { GET_GENRES } from '../../../apollo/queries';
import { removeGenres } from '../../../utils/helper/ParseGenres';

interface GenreContextProps {
    error?: ApolloError;
    loading: boolean;
    data?: Genres;
}

const GenreContext = createContext<GenreContextProps | undefined>(undefined);

const GenreProvider: React.FC = ({ children }) => {
    const { loading, error, data } = useQuery<Genres>(GET_GENRES, {
        fetchPolicy: 'cache-first',
    });

    return (
        <GenreContext.Provider value={{ error, loading, data: removeGenres(['Soap', 'News', 'Family', 'Talk'], data) as Genres }}>
            {children}
        </GenreContext.Provider>
    );
};
const useGenres = (): GenreContextProps => {
    const context = useContext(GenreContext);
    if (context === undefined) {
        throw new Error('useGenre must be used within a GenreProvider');
    }
    return context;
};

export { GenreProvider, useGenres };

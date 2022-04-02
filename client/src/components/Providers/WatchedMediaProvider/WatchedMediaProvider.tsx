import { ApolloError, useQuery } from '@apollo/client';
import { createContext, useContext } from 'react';
import { WatchedMovies } from '../../../apollo/generated/WatchedMovies';
import { GET_WATCHED_MOVIES } from '../../../apollo/queries';

interface WatchedMediaContextProps {
    error?: ApolloError;
    loading: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
}

const WatchedMediaContext = createContext<WatchedMediaContextProps | undefined>(undefined);

const WatchedMediaProvider: React.FC = ({ children }) => {
    const { data, loading, error } = useQuery<WatchedMovies>(GET_WATCHED_MOVIES, {
        fetchPolicy: 'network-only',
    });

    return <WatchedMediaContext.Provider value={{ data, loading, error }}>{children}</WatchedMediaContext.Provider>;
};

const useWatchedMedia = (): WatchedMediaContextProps => {
    const context = useContext(WatchedMediaContext);
    if (context === undefined) {
        throw new Error('useWatchedMedia must be used within a WatchedMediaProvider');
    }
    return context;
};

export { WatchedMediaProvider, useWatchedMedia };

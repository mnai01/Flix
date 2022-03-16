import { ApolloError, useQuery } from '@apollo/client';
import { createContext, useContext, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { FindMovieByTMDB, FindMovieByTMDBVariables } from '../../../apollo/generated/FindMovieByTMDB';
import { FindTVByTMDB, FindTVByTMDBVariables } from '../../../apollo/generated/FindTVByTMDB';
import { GET_MOVIE_FROM_TMDB, GET_TV_FROM_TMDB } from '../../../apollo/queries';

interface SelectedMediaContextProps {
    error?: ApolloError;
    loading: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
    tmdb?: string;
    isTV: boolean;
}

const SelectedMediaContext = createContext<SelectedMediaContextProps | undefined>(undefined);

const SelectedMediaProvider: React.FC = ({ children }) => {
    const location = useLocation();
    const { id } = useParams();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [media, setMedia] = useState<any>();
    const isTV = location.pathname.split('/')[1] === 'tv';

    const { loading: movieLoading } = useQuery<FindMovieByTMDB, FindMovieByTMDBVariables>(GET_MOVIE_FROM_TMDB, {
        onCompleted: (data) => {
            setMedia(data);
        },
        fetchPolicy: 'cache-first',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        variables: { movieId: id! },
        skip: isTV,
    });

    const { loading: tvLoading } = useQuery<FindTVByTMDB, FindTVByTMDBVariables>(GET_TV_FROM_TMDB, {
        onCompleted: (data) => {
            setMedia(data);
        },
        fetchPolicy: 'cache-first',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        variables: { tvShowId: id! },
        skip: !isTV,
    });

    return (
        <SelectedMediaContext.Provider value={{ data: media, loading: movieLoading || tvLoading, tmdb: id, isTV: isTV }}>
            {children}
        </SelectedMediaContext.Provider>
    );
};

const useSelectedMedia = (): SelectedMediaContextProps => {
    const context = useContext(SelectedMediaContext);
    if (context === undefined) {
        throw new Error('useSelectedMedia must be used within a SelectedMediaProvider');
    }
    return context;
};

export { SelectedMediaProvider, useSelectedMedia };

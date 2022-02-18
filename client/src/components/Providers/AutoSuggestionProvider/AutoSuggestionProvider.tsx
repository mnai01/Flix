import { ApolloError, LazyQueryResult, useLazyQuery } from '@apollo/client';
import { createContext, useContext } from 'react';
import { SearchVideos, SearchVideosVariables } from '../../../apollo/generated/SearchVideos';
import { SearchVideosQuery } from '../../../apollo/queries';

interface AutoSuggestionContextProps {
    error?: ApolloError;
    loading: boolean;
    data?: SearchVideos;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    autoSuggestResults: (options?: any) => Promise<LazyQueryResult<SearchVideos, SearchVideosVariables>>;
}

const AutoSuggestionContext = createContext<AutoSuggestionContextProps | undefined>(undefined);

const AutoSuggestionProvider: React.FC = ({ children }) => {
    const [autoSuggestResults, { loading, error, data }] = useLazyQuery<SearchVideos, SearchVideosVariables>(SearchVideosQuery, {
        fetchPolicy: 'network-only',
    });

    return <AutoSuggestionContext.Provider value={{ error, loading, data, autoSuggestResults }}>{children}</AutoSuggestionContext.Provider>;
};
const useAutoSuggestion = (): AutoSuggestionContextProps => {
    const context = useContext(AutoSuggestionContext);
    if (context === undefined) {
        throw new Error('useAutoSuggestion must be used within a AutoSuggestionProvider');
    }
    return context;
};

export { AutoSuggestionProvider, useAutoSuggestion };

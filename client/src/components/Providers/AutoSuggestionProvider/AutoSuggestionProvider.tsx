import { ApolloError, useQuery } from '@apollo/client';
import { createContext, useContext, useState } from 'react';
import { SearchVideos, SearchVideosVariables } from '../../../apollo/generated/SearchVideos';
import { SearchVideosQuery } from '../../../apollo/queries';

interface AutoSuggestionContextProps {
    error?: ApolloError;
    loading: boolean;
    data?: SearchVideos;
    // eslint-disable-next-line no-unused-vars
    setValue: (data: string) => void;
}

const AutoSuggestionContext = createContext<AutoSuggestionContextProps | undefined>(undefined);

const AutoSuggestionProvider: React.FC = ({ children }) => {
    const [value, setValue] = useState<string>('');

    const { loading, error, data } = useQuery<SearchVideos, SearchVideosVariables>(SearchVideosQuery, {
        fetchPolicy: 'network-only',
        variables: { query: value },
        skip: !value,
    });
    return <AutoSuggestionContext.Provider value={{ error, loading, data, setValue }}>{children}</AutoSuggestionContext.Provider>;
};
const useAutoSuggestion = (): AutoSuggestionContextProps => {
    const context = useContext(AutoSuggestionContext);
    if (context === undefined) {
        throw new Error('useAutoSuggestion must be used within a AutoSuggestionProvider');
    }
    return context;
};

export { AutoSuggestionProvider, useAutoSuggestion };

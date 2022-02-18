import { useQuery } from '@apollo/client';
import { Flex } from '@chakra-ui/react';
import { GET_MOVIES_BY_GENRE } from '../apollo/queries';
import { MediaList, MediaListHeader } from '../components/Media';
import { useAutoSuggestion } from '../components/Providers/AutoSuggestionProvider';

const SearchPage = () => {
    const { data, loading } = useAutoSuggestion();
    return (
        <Flex direction='column'>
            <MediaListHeader />
            <MediaList loading={loading} medias={data && data.SearchVideos ? data.SearchVideos : undefined} />
        </Flex>
    );
};

export default SearchPage;

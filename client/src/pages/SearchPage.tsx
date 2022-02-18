import { Flex } from '@chakra-ui/react';
import { MediaList, MediaListHeader } from '../components/Media';
import { useAutoSuggestion } from '../components/Providers/AutoSuggestionProvider';

const SearchPage = () => {
    const { data, loading } = useAutoSuggestion();

    return (
        <Flex direction="column">
            <MediaListHeader />
            <MediaList loading={loading} medias={data && data.SearchVideos.results ? data.SearchVideos.results : undefined} />
        </Flex>
    );
};

export default SearchPage;

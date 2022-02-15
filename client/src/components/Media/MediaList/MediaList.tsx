import { Box, Flex, Skeleton } from '@chakra-ui/react';
import { MediaCard } from '../';
import { SearchVideos_SearchVideos } from '../../../apollo/generated/SearchVideos';

interface MediaListProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    medias?: any[];
    loading?: boolean;
    horizontal?: boolean;
}

const MediaList: React.FC<MediaListProps> = ({ medias, loading, horizontal = true }) => {
    return (
        <Flex wrap={horizontal ? 'nowrap' : 'wrap'} overflowX={'scroll'}>
            {loading ? (
                Array(36)
                    .fill(0)
                    .map((_, i) => (
                        <Box key={i} p={1.5}>
                            <Skeleton width='185px' height='278px' />
                        </Box>
                    ))
            ) : medias && medias.length > 0 ? (
                medias.map((i: SearchVideos_SearchVideos) => (
                    <Box key={i.id} p={1.5}>
                        <MediaCard media={i} />
                    </Box>
                ))
            ) : (
                <h1>No result found</h1>
            )}
        </Flex>
    );
};

export default MediaList;

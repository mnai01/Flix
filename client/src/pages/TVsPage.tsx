import { useQuery } from '@apollo/client';
import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { DiscoverTV, DiscoverTVVariables } from '../apollo/generated/DiscoverTV';
import { DiscoverTVSortBy } from '../apollo/generated/globalTypes';
import { GET_TV_BY_GENRE } from '../apollo/queries';
import { PageContentWrapper } from '../components/Layout/PageWrapper';
import { MediaList } from '../components/Media';
import { useWatchedMedia } from '../components/Providers/WatchedMediaProvider';

const TVsPage: React.FC = () => {
    const { data: watchedMedia, loading: loadingWatched } = useWatchedMedia();

    const { data, loading } = useQuery<DiscoverTV, DiscoverTVVariables>(GET_TV_BY_GENRE, {
        fetchPolicy: 'cache-first',
        variables: {
            sortBy: DiscoverTVSortBy.popularityDesc,
        },
    });

    const { data: bestByRating, loading: loadingByRating } = useQuery<DiscoverTV, DiscoverTVVariables>(GET_TV_BY_GENRE, {
        fetchPolicy: 'cache-first',
        variables: {
            sortBy: DiscoverTVSortBy.vote_averageDesc,
            voteCountGte: 5000,
            voteAverageGte: 7,
        },
    });

    return (
        <PageContentWrapper>
            <Flex direction={'column'} width={'100%'} height={'100%'}>
                <Box mb={2}>
                    <MediaList medias={data?.Media?.results} loading={loading} horizontal title={'Top Trending'} />
                </Box>
                <Box mb={2}>
                    <MediaList medias={bestByRating?.Media.results} loading={loadingByRating} horizontal title={'Top Rated Shows'} />
                </Box>
                <Box mb={2}>
                    <MediaList
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        medias={watchedMedia?.WatchedMovies.filter((media: any) => media.type === 'tv')}
                        loading={loadingWatched}
                        title={'Recently Watched'}
                        horizontal
                    />
                </Box>
            </Flex>
        </PageContentWrapper>
    );
};

export default TVsPage;

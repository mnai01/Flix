import { useQuery } from '@apollo/client';
import { Box, Flex } from '@chakra-ui/react';
import { DiscoverMovies, DiscoverMoviesVariables } from '../apollo/generated/DiscoverMovies';
import { DiscoverMovieSortBy } from '../apollo/generated/globalTypes';
import { GET_MOVIES_BY_GENRE } from '../apollo/queries';
import { MediaCarousel, MediaList } from '../components/Media';
import { useWatchedMedia } from '../components/Providers/WatchedMediaProvider';

const HomePage = () => {
    const { data: watchedMedia, loading: loadingWatched } = useWatchedMedia();

    const { data, loading } = useQuery<DiscoverMovies, DiscoverMoviesVariables>(GET_MOVIES_BY_GENRE, {
        fetchPolicy: 'cache-first',
        variables: {
            sortBy: DiscoverMovieSortBy.popularityDesc,
        },
    });

    const { data: bestByRating, loading: loadingByRating } = useQuery<DiscoverMovies, DiscoverMoviesVariables>(GET_MOVIES_BY_GENRE, {
        fetchPolicy: 'cache-first',
        variables: {
            sortBy: DiscoverMovieSortBy.vote_averageDesc,
            voteCountGte: 10000,
            voteAverageGte: 7,
        },
    });

    return (
        <Flex direction={'column'} width={'100%'} height={'100%'} mb={50}>
            <MediaCarousel data={data?.Media?.results} loading={loading} height={50} />
            <Box my={2}>
                <MediaList medias={bestByRating?.Media.results} loading={loadingByRating} title={'Top Rated Movies'} horizontal />
            </Box>
            <Box my={2}>
                <MediaList medias={watchedMedia?.WatchedMovies} loading={loadingWatched} title={'Recently Watched'} horizontal />
            </Box>
        </Flex>
    );
};

export default HomePage;

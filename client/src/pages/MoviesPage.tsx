import { useQuery } from '@apollo/client';
import { Box, Flex } from '@chakra-ui/react';
import { DiscoverMovies, DiscoverMoviesVariables } from '../apollo/generated/DiscoverMovies';
import { DiscoverMovieSortBy } from '../apollo/generated/globalTypes';
import { GET_MOVIES_BY_GENRE } from '../apollo/queries';
import { MediaList } from '../components/Media';

const MoviesPage: React.FC = () => {
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
        <Flex direction={'column'} width={'100%'} height={'100%'} my={50}>
            <Box my={2}>
                <MediaList medias={data?.Media?.results} loading={loading} horizontal title={'Top Trending'} navigateTo={'/movies/category/top'} />
            </Box>
            <Box my={2}>
                <MediaList medias={bestByRating?.Media.results} loading={loadingByRating} horizontal title={'Top Rated Movies'} />
            </Box>
        </Flex>
    );
};

export default MoviesPage;

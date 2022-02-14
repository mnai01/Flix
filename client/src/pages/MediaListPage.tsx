import { useQuery } from '@apollo/client';
import { Flex } from '@chakra-ui/react';
import { DiscoverMovies, DiscoverMoviesVariables } from '../apollo/generated/DiscoverMovies';
import { GET_MOVIES_BY_GENRE } from '../apollo/queries';
import { MediaList, MediaListHeader } from '../components/Media';
import useGenreParams from '../utils/hooks/useGenreParams';

const MediaListPage = () => {
    const { genre } = useGenreParams();

    const { data, loading } = useQuery<DiscoverMovies, DiscoverMoviesVariables>(GET_MOVIES_BY_GENRE, {
        fetchPolicy: 'network-only',
        skip: !genre,
        variables: { withGenres: genre?.id },
    });
    return (
        <Flex direction='column'>
            <MediaListHeader />
            {/*  this should be some sort of header */}
            <h2>{genre && genre.name}</h2>
            <MediaList medias={data?.discoverMovies.results} loading={loading} />
        </Flex>
    );
};

export default MediaListPage;

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
        // An initial setting on flex items is min-width: auto. This means that a flex item, by default, cannot be smaller than the size of its content.
        // Therefore, text-overflow: ellipsis cannot work because a flex item will simply expand, rather than permit an overflow. (Scroll bars will not render either, for the same reason.)
        // To override this behavior, use min-width: 0 or overflow: hidden.
        <Flex direction="column" style={{ overflow: 'hidden', minWidth: 0 }}>
            <MediaListHeader title={genre && genre.name} />
            <MediaList medias={data?.discoverMovies.results} loading={loading} />
        </Flex>
    );
};

export default MediaListPage;

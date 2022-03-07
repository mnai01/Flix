import { useLazyQuery } from '@apollo/client';
import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { DiscoverMovies, DiscoverMoviesVariables } from '../apollo/generated/DiscoverMovies';
import { DiscoverTV, DiscoverTVVariables } from '../apollo/generated/DiscoverTV';
import { GetTrending } from '../apollo/generated/GetTrending';
import { GET_MOVIES_BY_GENRE, GET_TRENDING, GET_TV_BY_GENRE } from '../apollo/queries';
import { MediaList, MediaListHeader } from '../components/Media';
import useGenreParams from '../utils/hooks/useGenreParams';

const CatagoryMediaPage = () => {
    const { genre, type } = useGenreParams();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [discover, setDiscover] = useState<any>();

    useEffect(() => {
        if (type === 'tv' && genre?.id) {
            discoverTV({ variables: { withGenres: genre.id } });
        } else if (type === 'movies' && genre?.id) {
            discoverMovies({ variables: { withGenres: genre.id } });
        } else if (type === 'home') {
            trendingMedia();
        }
    }, [type, genre]);

    const [discoverMovies, { loading: loadingMovies }] = useLazyQuery<DiscoverMovies, DiscoverMoviesVariables>(GET_MOVIES_BY_GENRE, {
        fetchPolicy: 'cache-first',
        onCompleted: (data) => {
            console.log('called');
            setDiscover(data.DiscoverMovies);
        },
    });

    const [discoverTV, { loading: loadingTV }] = useLazyQuery<DiscoverTV, DiscoverTVVariables>(GET_TV_BY_GENRE, {
        fetchPolicy: 'cache-first',
        onCompleted: (data) => {
            setDiscover(data.DiscoverTV);
        },
    });

    const [trendingMedia, { loading: loadingTrending }] = useLazyQuery<GetTrending>(GET_TRENDING, {
        fetchPolicy: 'cache-first',
        onCompleted: (data) => {
            setDiscover(data.GetTrending);
        },
        onError: (err) => {
            console.log(err);
        },
    });

    return (
        // An initial setting on flex items is min-width: auto. This means that a flex item, by default, cannot be smaller than the size of its content.
        // Therefore, text-overflow: ellipsis cannot work because a flex item will simply expand, rather than permit an overflow. (Scroll bars will not render either, for the same reason.)
        // To override this behavior, use min-width: 0 or overflow: hidden.
        <Flex direction="column" style={{ overflow: 'hidden', minWidth: 0 }}>
            <MediaListHeader title={genre && genre.name} />
            <MediaList medias={discover && discover.results} loading={loadingMovies || loadingTV} />
        </Flex>
    );
};

export default CatagoryMediaPage;

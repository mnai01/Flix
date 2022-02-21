import { useQuery } from '@apollo/client';
import { Box, Center, Heading, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {
    FindMovieTrailersByTMDB,
    FindMovieTrailersByTMDB_FindMovieTrailersByTMDB_results,
    FindMovieTrailersByTMDBVariables,
} from '../../../../apollo/generated/FindMovieTrailersByTMDB';
import { GET_MOVIE_TRAILER_FROM_TMDB } from '../../../../apollo/queries';
import { useSelectedMovie } from '../../../Providers/SelectedMovieProvider';

const MovieTrailer: React.FC = () => {
    const { tmdb } = useSelectedMovie();
    const [iframeLoading, setIframeLoading] = useState(true);

    const { data } = useQuery<FindMovieTrailersByTMDB, FindMovieTrailersByTMDBVariables>(GET_MOVIE_TRAILER_FROM_TMDB, {
        fetchPolicy: 'network-only',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        variables: { movieId: tmdb! },
        skip: !tmdb,
    });

    const trailers = data?.FindMovieTrailersByTMDB?.results?.filter((i: FindMovieTrailersByTMDB_FindMovieTrailersByTMDB_results) => {
        if (i.site === 'YouTube') {
            return true;
        } else {
            return false;
        }
    });

    useEffect(() => {
        if (trailers && trailers?.length <= 0) {
            setIframeLoading(false);
        }
    }, [data]);

    return (
        <Box width={'100%'} height={'100%'}>
            {iframeLoading && (
                <Center h={'100%'}>
                    <Spinner size="xl" />
                </Center>
            )}
            {trailers && trailers?.length > 0 ? (
                <iframe
                    allow="fullscreen"
                    src={`https://www.youtube.com/embed/${trailers[0].key}`}
                    width={'100%'}
                    height={'100%'}
                    onLoad={() => setIframeLoading(false)}
                    style={{ display: iframeLoading ? 'none' : 'block' }}
                />
            ) : (
                <Center height={'100%'}>
                    <Heading>No Trailer Found</Heading>
                </Center>
            )}
        </Box>
    );
};

export default MovieTrailer;

import { Box, Center, Heading, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSelectedMedia } from '../../../Providers/SelectedMediaProvider';

const MovieSrc: React.FC = () => {
    const { data } = useSelectedMedia();

    const [iframeLoading, setIframeLoading] = useState(true);
    useEffect(() => {
        if (!data?.FindMovieByTMDB || !data?.FindMovieByTMDB.imdb_id) setIframeLoading(false);
    }, []);

    return (
        <Box width={'100%'} height={'100%'}>
            {!data?.FindMovieByTMDB ||
                !data?.FindMovieByTMDB.imdb_id ||
                (iframeLoading && (
                    <Center h={'100%'}>
                        <Spinner size="xl" />
                    </Center>
                ))}
            {data?.FindMovieByTMDB && data?.FindMovieByTMDB.imdb_id ? (
                <iframe
                    allow="fullscreen"
                    onLoad={() => setIframeLoading(false)}
                    onError={(err) => console.log(err)}
                    style={{ width: '100%', height: '100%', display: iframeLoading ? 'none' : 'block' }}
                    src={`${process.env.REACT_APP_SOURCE}${data?.FindMovieByTMDB.imdb_id}`}
                />
            ) : (
                <Center height={'100%'}>
                    <Heading>No Movie Found</Heading>
                </Center>
            )}
        </Box>
    );
};

export default MovieSrc;

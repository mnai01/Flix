import { Box, Center, Spinner } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSelectedMovie } from '../../../Providers/SelectedMovieProvider';

const MovieSrc: React.FC = () => {
    const { data } = useSelectedMovie();
    const [iframeLoading, setIframeLoading] = useState(true);

    return (
        <Box width={'100%'} height={'100%'}>
            {iframeLoading && (
                <Center h={'100%'}>
                    <Spinner size="xl" />
                </Center>
            )}
            {data?.FindMovieByTMDB.imdb_id && (
                <iframe
                    allow="fullscreen"
                    onLoad={() => setIframeLoading(false)}
                    onError={(err) => console.log(err)}
                    style={{ width: '100%', height: '100%', display: iframeLoading ? 'none' : 'block' }}
                    src={`${process.env.REACT_APP_SOURCE}${data?.FindMovieByTMDB.imdb_id}/`}
                />
            )}
        </Box>
    );
};

export default MovieSrc;

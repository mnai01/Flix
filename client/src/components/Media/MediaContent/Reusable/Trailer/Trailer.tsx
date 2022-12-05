import { useMutation } from '@apollo/client';
import { Center, Heading, Skeleton, Spinner } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AddToWatched, AddToWatchedVariables } from '../../../../../apollo/generated/AddToWatched';
import { ADD_WATCHED } from '../../../../../apollo/mutations';

interface TrailerProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    trailers: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any;
    isTV: boolean;
}

const Trailer: React.FC<TrailerProps> = ({ trailers, data, isTV }) => {
    const [iframeLoading, setIframeLoading] = useState(true);

    const [addWatched] = useMutation<AddToWatched, AddToWatchedVariables>(ADD_WATCHED);

    const handleVideoLoad = () => {
        if (data && data.id) {
            addWatched({ variables: { tmdb: String(data.id), type: isTV ? 'tv' : 'movie', posterPath: data.poster_path } });
        }
        setIframeLoading(false);
    };

    return (
        <>
            {trailers && trailers?.length > 0 && iframeLoading && (
                <Center h={'100%'}>
                    <Skeleton width="100%" height={'100%'} />
                    <Spinner size="xl" position={'absolute'} />
                </Center>
            )}
            {trailers && trailers?.length > 0 ? (
                <iframe
                    allow="fullscreen"
                    src={`https://www.youtube.com/embed/${trailers[0].key}`}
                    width={'100%'}
                    height={'100%'}
                    onLoad={() => handleVideoLoad()}
                    onError={() => setIframeLoading(true)}
                    style={{ display: iframeLoading ? 'none' : 'block' }}
                />
            ) : (
                <Center height={'100%'}>
                    <Heading>No Trailer Found</Heading>
                </Center>
            )}
        </>
    );
};

export default Trailer;

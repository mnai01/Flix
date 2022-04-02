import { useMutation } from '@apollo/client';
import { Center, Heading, Skeleton, Spinner } from '@chakra-ui/react';
import { useState } from 'react';
import { AddToWatched, AddToWatchedVariables } from '../../../../../apollo/generated/AddToWatched';
import { ADD_WATCHED } from '../../../../../apollo/mutations';

interface SrcVideoProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any;
    loading: boolean;
    link: string;
    imdb?: string | null;
    isTV: boolean;
}

const SrcVideo: React.FC<SrcVideoProps> = ({ data, link, imdb, isTV }) => {
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
            {data && imdb && iframeLoading && (
                <Center h={'100%'}>
                    <Skeleton width="100%" height={'100%'} />
                    <Spinner size="xl" position={'absolute'} />
                </Center>
            )}

            {data && imdb ? (
                <iframe
                    allow="fullscreen"
                    onLoad={() => handleVideoLoad()}
                    onError={() => setIframeLoading(false)}
                    style={{ width: '100%', height: '100%', display: iframeLoading ? 'none' : 'block' }}
                    src={link}
                />
            ) : (
                <Center height={'100%'}>
                    <Heading>No Movie Found</Heading>
                </Center>
            )}
        </>
    );
};

export default SrcVideo;

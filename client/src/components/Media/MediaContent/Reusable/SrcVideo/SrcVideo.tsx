import { useMutation } from '@apollo/client';
import { Button, Center, Heading, Skeleton, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { AddToWatched, AddToWatchedVariables } from '../../../../../apollo/generated/AddToWatched';
import { ADD_WATCHED } from '../../../../../apollo/mutations';

interface SrcVideoProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any;
    tmdbLink?: string;
    imdbLink?: string;
    loading: boolean;
    isTV: boolean;
    imdb?: string | null;
}

interface SetSourceProps {
    title: string;
    disabled: boolean;
    link?: string;
}

const SrcVideo: React.FC<SrcVideoProps> = ({ data, imdb, tmdbLink, imdbLink, isTV }) => {
    const [iframeLoading, setIframeLoading] = useState(true);
    const [source, setSource] = useState<SetSourceProps[]>([]);

    const activeLink = source?.filter((i: SetSourceProps) => {
        return i.disabled;
    })[0]?.link;

    useEffect(() => {
        setSource([
            // { title: 'Source 1', disabled: true, link: tmdbLink },
            { title: 'Source 1', disabled: true, link: imdbLink },
        ]);
    }, [imdbLink, tmdbLink]);

    const [addWatched] = useMutation<AddToWatched, AddToWatchedVariables>(ADD_WATCHED);

    const handleVideoLoad = () => {
        if (data && data.id) {
            addWatched({ variables: { tmdb: String(data.id), type: isTV ? 'tv' : 'movie', posterPath: data.poster_path } });
        }
        setIframeLoading(false);
    };

    const handleButtonSwitch = () => {
        setSource(
            source.map((i: SetSourceProps) => {
                return { ...i, disabled: !i.disabled };
            }),
        );
        setIframeLoading(true);
    };

    return (
        <>
            {data && imdb && iframeLoading && (
                <Center h={'100%'}>
                    <Skeleton width="100%" height={'100%'} />
                    <Spinner size="xl" position={'absolute'} />
                </Center>
            )}

            {data && imdb && source.length === 1 && activeLink ? (
                <iframe
                    allow="fullscreen"
                    onLoad={() => handleVideoLoad()}
                    onError={() => setIframeLoading(false)}
                    style={{ width: '100%', height: '100%', display: iframeLoading ? 'none' : 'block' }}
                    src={activeLink}
                    // sandbox="allow-scripts allow-same-origin"
                />
            ) : (
                <Center height={'100%'}>
                    <Heading>No Media Found</Heading>
                </Center>
            )}
            {source.length > 0 &&
                source.map((i: SetSourceProps) => {
                    return (
                        <Button key={i.title} disabled={i.disabled} onClick={handleButtonSwitch} mr={5} mt={3}>
                            {i.title}
                        </Button>
                    );
                })}
        </>
    );
};

export default SrcVideo;

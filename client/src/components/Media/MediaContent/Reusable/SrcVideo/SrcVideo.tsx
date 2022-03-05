import { Center, Heading, Skeleton, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ContentWrapperContainer } from '../../ContentWrapper/ContentWrapperStyles';

interface SrcVideoProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any;
    loading: boolean;
    link: string;
    imdb?: string | null;
}

const SrcVideo: React.FC<SrcVideoProps> = ({ data, link, imdb }) => {
    const [iframeLoading, setIframeLoading] = useState(true);
    console.log(data, imdb);

    return (
        <ContentWrapperContainer>
            {data && imdb && iframeLoading && (
                <Center h={'100%'}>
                    <Skeleton width="100%" height={'100%'} />
                    <Spinner size="xl" position={'absolute'} />
                </Center>
            )}

            {data && imdb ? (
                <iframe
                    allow="fullscreen"
                    onLoad={() => setIframeLoading(false)}
                    onError={() => setIframeLoading(false)}
                    style={{ width: '100%', height: '100%', display: iframeLoading ? 'none' : 'block' }}
                    src={link}
                />
            ) : (
                <Center height={'100%'}>
                    <Heading>No Movie Found</Heading>
                </Center>
            )}
        </ContentWrapperContainer>
    );
};

export default SrcVideo;

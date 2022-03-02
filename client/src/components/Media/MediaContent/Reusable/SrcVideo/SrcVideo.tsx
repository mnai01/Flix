import { Center, Heading, Spinner } from '@chakra-ui/react';
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
    useEffect(() => {
        if (!data || !data.imdb_id) setIframeLoading(false);
    }, []);

    return (
        <ContentWrapperContainer>
            {(!data || !imdb || iframeLoading) && (
                <Center h={'100%'}>
                    <Spinner size="xl" />
                </Center>
            )}
            {data && imdb ? (
                <iframe
                    allow="fullscreen"
                    onLoad={() => setIframeLoading(false)}
                    // onError={(err) => console.log(err)}
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

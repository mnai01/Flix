import { Center, Heading, Skeleton, Spinner } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ContentWrapperContainer } from '../../ContentWrapper/ContentWrapperStyles';

interface TrailerProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    trailers: any;
}

const Trailer: React.FC<TrailerProps> = ({ trailers }) => {
    const [iframeLoading, setIframeLoading] = useState(true);

    return (
        <ContentWrapperContainer>
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
                    onLoad={() => setIframeLoading(false)}
                    onError={() => setIframeLoading(true)}
                    style={{ display: iframeLoading ? 'none' : 'block' }}
                />
            ) : (
                <Center height={'100%'}>
                    <Heading>No Trailer Found</Heading>
                </Center>
            )}
        </ContentWrapperContainer>
    );
};

export default Trailer;

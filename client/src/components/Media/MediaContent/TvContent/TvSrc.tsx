import { Box, Center, Heading, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FindTVByTMDB } from '../../../../apollo/generated/FindTVByTMDB';
import { useSelectedMedia } from '../../../Providers/SelectedMediaProvider';

interface selectedTVProps {
    data?: FindTVByTMDB;
    loading: boolean;
    tmdb?: string;
}

const TvSrc: React.FC = () => {
    const { data }: selectedTVProps = useSelectedMedia();
    const { s, e } = useParams();

    const [iframeLoading, setIframeLoading] = useState(true);
    useEffect(() => {
        if (!data?.FindTVByTMDB || !data?.FindTVByTMDB.external_ids.imdb_id) setIframeLoading(false);
    }, []);

    return (
        <Box width={'100%'} height={'100%'}>
            {!data?.FindTVByTMDB ||
                !data?.FindTVByTMDB.external_ids.imdb_id ||
                (iframeLoading && (
                    <Center h={'100%'}>
                        <Spinner size="xl" />
                    </Center>
                ))}
            {data?.FindTVByTMDB && data?.FindTVByTMDB.external_ids.imdb_id ? (
                <iframe
                    allow="fullscreen"
                    onLoad={() => setIframeLoading(false)}
                    onError={(err) => console.log(err)}
                    style={{ width: '100%', height: '100%', display: iframeLoading ? 'none' : 'block' }}
                    src={`${process.env.REACT_APP_SOURCE}${data?.FindTVByTMDB.external_ids.imdb_id}/${s}-${e}`}
                />
            ) : (
                <Center height={'100%'}>
                    <Heading>No TV Show Found</Heading>
                </Center>
            )}
        </Box>
    );
};

export default TvSrc;

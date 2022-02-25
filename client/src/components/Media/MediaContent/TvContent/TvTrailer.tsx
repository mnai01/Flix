import { Box, Center, Heading, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FindTVByTMDB, FindTVByTMDB_FindTVByTMDB_videos_results } from '../../../../apollo/generated/FindTVByTMDB';
import { useSelectedMedia } from '../../../Providers/SelectedMediaProvider';

interface selectedMovieProps {
    data?: FindTVByTMDB;
    loading?: boolean;
    tmdb?: string;
}
const TvTrailer: React.FC = () => {
    const { data }: selectedMovieProps = useSelectedMedia();
    const mediaData = data?.FindTVByTMDB;
    const [iframeLoading, setIframeLoading] = useState(true);

    const trailers = mediaData?.videos.results?.filter((i: FindTVByTMDB_FindTVByTMDB_videos_results) => {
        if (i.site === 'YouTube' && i.name.toLowerCase().match(/trailer/)) {
            return true;
        } else {
            return false;
        }
    });
    useEffect(() => {
        if (!trailers || trailers?.length <= 0) {
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

export default TvTrailer;

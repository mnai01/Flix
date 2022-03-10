import { Box, Image, Skeleton } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchVideos_SearchVideos_results } from '../../../apollo/generated/SearchVideos';

interface MediaProps {
    media: SearchVideos_SearchVideos_results;
}

const MediaCard: React.FC<MediaProps> = ({ media }) => {
    const { id, poster_path, title } = media;
    const navigate = useNavigate();
    const type = title ? 'movie' : 'tv';
    const [load, setLoad] = useState(false);

    return (
        <>
            {media && (
                <Box onClick={() => navigate(`/${type}/${id}`)} height="278px" width="100%">
                    <Image
                        as="img"
                        height={'100%'}
                        borderRadius="md"
                        src={`https://image.tmdb.org/t/p/w154/${poster_path}`}
                        fallbackSrc="https://via.placeholder.com/150"
                        htmlWidth="185px"
                        htmlHeight="278px"
                        onLoad={() => setLoad(true)}
                        onError={() => setLoad(true)}
                        display={load ? 'block' : 'none'}
                    />
                    {!load && <Skeleton width="100%" height={'100%'} />}
                </Box>
            )}
        </>
    );
};

export default React.memo(MediaCard);

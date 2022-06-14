import { Box, Image, Skeleton, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface MediaProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    media: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    width?: any;
    label?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    skeletonHeight?: any;
}

const MediaCard: React.FC<MediaProps> = ({ media, width, label, skeletonHeight }) => {
    const { id, poster_path, title, type, name } = media;
    const navigate = useNavigate();
    const typeOfMedia = type ? type : title ? 'movie' : 'tv';
    const [load, setLoad] = useState(false);

    return (
        <>
            {media && (
                <Box onClick={() => navigate(`/${typeOfMedia}/${id}`)} height="auto" width={width ? `${width}` : '100%'} cursor={'pointer'}>
                    <Image
                        as="img"
                        height={'100%'}
                        borderRadius="md"
                        src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
                        fallbackSrc="https://via.placeholder.com/185x278"
                        // htmlWidth="185px"
                        // htmlHeight="278px"
                        onLoad={() => setLoad(true)}
                        onError={() => setLoad(true)}
                        display={load ? 'block' : 'none'}
                    />

                    {!load ? (
                        <>
                            <Skeleton height={skeletonHeight} mb={'4px'} /> <Skeleton height={'18px'} />
                        </>
                    ) : label ? (
                        <Text noOfLines={1} fontWeight={500} fontSize={'sm'} mt={1}>
                            {title ? title : name}
                        </Text>
                    ) : (
                        label !== false && <Skeleton height={'18px'} mt={1} />
                    )}
                </Box>
            )}
        </>
    );
};

export default React.memo(MediaCard);

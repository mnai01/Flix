import { Box, Heading, Skeleton } from '@chakra-ui/react';

interface MediaListHeaderProps {
    title?: string;
}

const MediaListHeader: React.FC<MediaListHeaderProps> = ({ title }) => {
    return (
        <Box mx={'6px'} my={'10px'}>
            {title ? (
                <Heading variant={'h3'} size={'sm'}>
                    {title}
                </Heading>
            ) : (
                <Skeleton width={'100px'} height={'25px'} />
            )}
        </Box>
    );
};

export default MediaListHeader;

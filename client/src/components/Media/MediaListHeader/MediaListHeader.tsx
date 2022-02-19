import { Box, Heading } from '@chakra-ui/react';

interface MediaListHeaderProps {
    title?: string;
}

const MediaListHeader: React.FC<MediaListHeaderProps> = ({ title }) => {
    return (
        <Box mx={'6px'} my={'10px'}>
            <Heading variant={'h3'} size={'sm'}>
                {title ? title : 'Search'}
            </Heading>
        </Box>
    );
};

export default MediaListHeader;

import { Box, Flex } from '@chakra-ui/react';
import { MediaListItem } from '../';

const MediaList = () => {
    return (
        <Flex wrap={'wrap'}>
            {Array(36)
                .fill(0)
                .map((_, i) => (
                    <Box key={i} p={1.5}>
                        <MediaListItem />
                    </Box>
                ))}
        </Flex>
    );
};

export default MediaList;

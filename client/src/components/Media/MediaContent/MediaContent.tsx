import { Flex, Grid, GridItem, Skeleton } from '@chakra-ui/react';
import YouTube from 'react-youtube';

const opts = {
    height: '600',
    width: '1080',
};

const MediaContent = () => {
    return (
        <Flex direction={'column'} position={'relative'} width={'100%'} height={'70%'} justify={'center'} p={50}>
            {/* This should be the title */}
            <Skeleton width={'100%'} height={'10%'} p={'10'}></Skeleton>
            {/* This should be the title */}
            <Grid h="95%" w="100%" p="20" border="2px" border-radius="20px" templateRows="repeat(2, 1fr)" templateColumns="repeat(7, 1fr)" gap={4} area="auto">
                <GridItem rowSpan={2} colSpan={1} bg="tomato" />
                <YouTube videoId={'v7v1hIkYH24'} opts={opts} />
                <GridItem rowSpan={5} colSpan={1} bg="tomato" />
            </Grid>
        </Flex>
    );
};

export default MediaContent;

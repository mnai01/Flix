import { Flex, Skeleton } from '@chakra-ui/react';

const MediaContent = () => {
    return (
        <Flex direction={'column'} position={'relative'} width={'100%'} height={'100%'} justify={'center'}>
            <Skeleton width='60%' height='100%' />
        </Flex>
    );
};

export default MediaContent;

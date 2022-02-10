import { Flex, Skeleton } from '@chakra-ui/react';

const MediaContent = () => {
    return (
        <Flex direction={'column'} position={'relative'} width={'100%'} justify={'center'}>
            <Skeleton width='60%' height='50%' />
        </Flex>
    );
};

export default MediaContent;

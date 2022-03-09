import { Flex, Heading } from '@chakra-ui/react';

interface MediaListHeaderProps {
    title?: string;
}

const MediaListHeader: React.FC<MediaListHeaderProps> = ({ title }) => {
    return (
        <Flex mx={'6px'} my={'10px'} justify={'space-between'}>
            <Heading variant={'h3'} size={'sm'}>
                {title ? title : 'Search'}
            </Heading>
        </Flex>
    );
};

export default MediaListHeader;

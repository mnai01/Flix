import { Flex, Heading } from '@chakra-ui/react';

interface MediaListHeaderProps {
    title?: string;
}

const MediaListHeader: React.FC<MediaListHeaderProps> = ({ title }) => {
    return (
        <Flex justify={'space-between'} pb={2.5}>
            <Heading variant={'h3'} size={'sm'}>
                {title ? title : 'Search'}
            </Heading>
        </Flex>
    );
};

export default MediaListHeader;

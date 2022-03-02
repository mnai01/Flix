import { Divider, Heading } from '@chakra-ui/react';
import { MediaList } from '../../../MediaList';

interface SimilarProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    medias?: any;
    loading?: boolean;
    horizontal?: boolean;
}

const Similar: React.FC<SimilarProps> = ({ medias, horizontal, loading }) => {
    return (
        <>
            <Divider p={5} mb={5} width={'auto'} />
            <Heading my={2} size={'md'}>
                Similar Movies
            </Heading>
            <MediaList medias={medias} horizontal={horizontal} loading={loading} />
        </>
    );
};

export default Similar;

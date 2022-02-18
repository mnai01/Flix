import { Box, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { SearchVideos_SearchVideos_results } from '../../../apollo/generated/SearchVideos';

interface MediaProps {
    media: SearchVideos_SearchVideos_results;
}

const MediaCard: React.FC<MediaProps> = ({ media }) => {
    const { id, poster_path, title } = media;
    const navigate = useNavigate();
    const type = title ? 'movie' : 'tv';

    return (
        <>
            {media && (
                <Box onClick={() => navigate(`/${type}/${id}`)} height="278px">
                    <Image
                        height={'100%'}
                        borderRadius="md"
                        src={`https://image.tmdb.org/t/p/w154/${poster_path}`}
                        fallbackSrc="https://via.placeholder.com/150"
                        htmlWidth="185px"
                        htmlHeight="278px"
                    />
                </Box>
            )}
        </>
    );
};

export default MediaCard;

import { Box, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { SearchVideos_SearchVideos } from '../../../apollo/generated/SearchVideos';
interface MediaProps {
    media: SearchVideos_SearchVideos;
}

const MediaCard: React.FC<MediaProps> = ({ media }) => {
    const { id, poster_path } = media;
    const navigate = useNavigate();

    return (
        <>
            {media && (
                <Box onClick={() => navigate(`/movie/1`)} width='185px' height='278px'>
                    <h1>{id}</h1>
                    <Image
                        borderRadius='md'
                        src={`https://image.tmdb.org/t/p/w154/${poster_path}`}
                        fallbackSrc='https://via.placeholder.com/150'
                        htmlWidth='185px'
                        htmlHeight='278px'
                    />
                </Box>
            )}
        </>
    );
};

export default MediaCard;

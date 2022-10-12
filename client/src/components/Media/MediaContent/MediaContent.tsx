import { Box, Button, useMediaQuery } from '@chakra-ui/react';
// import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { MoviePoster, MovieSrc, MovieTrailer } from './Movie';
import { TvPoster, TvSrc, TvTrailer } from './TV';
import EpisodeList from './TV/EpisodeList';

const MediaContent: React.FC = () => {
    const [isLessThan768] = useMediaQuery('(max-width: 768px)');

    const location = useLocation();
    const navigate = useNavigate();

    // const Animation = motion.div;

    // const [toggleMovie, setToggleMovie] = useState(false);
    // const [toggleTrailer, setToggleTrailer] = useState(false);

    const isVideo = location.pathname.split('/')[3] === 'video';
    const isTrailer = location.pathname.split('/')[3] === 'trailer';
    const isTV = location.pathname.split('/')[1] === 'tv';
    // useEffect(() => {
    //     if (location.pathname.split('/')[3] === 'video') {
    //         setToggleMovie(true);
    //     } else {
    //         setToggleMovie(false);
    //     }

    //     if (location.pathname.split('/')[3] === 'trailer') {
    //         setToggleTrailer(true);
    //     } else {
    //         setToggleTrailer(false);
    //     }
    // }, [location]);

    return (
        <Box height={'100%'} width={'100%'} mt={isLessThan768 ? 0 : '20px'} mb={5} display={'flex'} flexDirection={'column'}>
            <Button leftIcon={<FaArrowLeft />} variant="outline" onClick={() => navigate(-1)} mb={3} size={'sm'} height={'2rem'} width={'10rem'}>
                Navigate back
            </Button>
            <Box height={'60%'}>
                {isTV ? (
                    isVideo || isTrailer ? (
                        isVideo ? (
                            <TvSrc />
                        ) : (
                            <TvTrailer />
                        )
                    ) : (
                        <Box flex={1} height={'100%'}>
                            <TvPoster />
                            <EpisodeList />
                        </Box>
                    )
                ) : isVideo || isTrailer ? (
                    isVideo ? (
                        <MovieSrc />
                    ) : (
                        <MovieTrailer />
                    )
                ) : (
                    <Box flex={1} height={'100%'}>
                        <MoviePoster />
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default MediaContent;

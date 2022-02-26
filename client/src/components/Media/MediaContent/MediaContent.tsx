import { Box, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { MoviePoster, MovieSrc, MovieTrailer } from './MovieContent';
import { TvPoster, TvSrc, TvTrailer } from './TvContent';
import EpisodeList from './TvContent/EpisodeList';

const MediaContent: React.FC = () => {
    const location = useLocation();

    const Animation = motion.div;

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
        <>
            <Flex direction={'column'} width={'100%'} height={'75vh'} p={50}>
                {isTV ? (
                    isVideo || isTrailer ? (
                        isVideo ? (
                            <TvSrc />
                        ) : (
                            <TvTrailer />
                        )
                    ) : (
                        <Box height={'100%'}>
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
                    <MoviePoster />
                )}
            </Flex>
        </>
    );
};

export default MediaContent;

import { Box, Flex } from '@chakra-ui/react';
// import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { MoviePoster, MovieSrc, MovieTrailer } from './Movie';
import { TvPoster, TvSrc, TvTrailer } from './TV';
import EpisodeList from './TV/EpisodeList';

const MediaContent: React.FC = () => {
    const location = useLocation();

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
        <>
            <Flex direction={'column'} width={'100%'} height={'100%'} p={50}>
                <Box height={'100%'}>
                    {isTV ? (
                        isVideo || isTrailer ? (
                            isVideo ? (
                                <TvSrc />
                            ) : (
                                <TvTrailer />
                            )
                        ) : (
                            <>
                                <TvPoster />
                                <EpisodeList />
                            </>
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
                </Box>
            </Flex>
        </>
    );
};

export default MediaContent;

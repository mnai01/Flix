import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviePoster from './MoviePoster';
import MovieSrc from './MovieSrc';
import MovieTrailer from './MovieTrailer';

const MediaContent: React.FC = () => {
    const location = useLocation();

    const Animation = motion.div;

    // const [toggleMovie, setToggleMovie] = useState(false);
    // const [toggleTrailer, setToggleTrailer] = useState(false);

    const isMovie = location.pathname.split('/')[3] === 'video';
    const isTrailer = location.pathname.split('/')[3] === 'trailer';
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
            <Flex direction={'column'} width={'100%'} height={'75%'} p={50}>
                {isMovie || isTrailer ? isMovie ? <MovieSrc /> : <MovieTrailer /> : <MoviePoster />}
            </Flex>
        </>
    );
};

export default MediaContent;

import { Box, Button, Flex, Heading, Image, Tag, Text, useColorMode, useTheme } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { FindTVByTMDB, FindTVByTMDB_FindTVByTMDB_genres } from '../../../../apollo/generated/FindTVByTMDB';
import { useSelectedMedia } from '../../../Providers/SelectedMediaProvider';

interface selectedTVProps {
    data?: FindTVByTMDB;
    loading: boolean;
    tmdb?: string;
}

const TvPoster = () => {
    const { data, loading, tmdb }: selectedTVProps = useSelectedMedia();
    const mediaData = data?.FindTVByTMDB;
    const navigate = useNavigate();
    const theme = useTheme();
    const { colorMode } = useColorMode();
    return (
        <Box height={'100%'} width={'100%'} position={'relative'}>
            <Box zIndex={1} padding={50} position={'absolute'} style={{ color: '#FFFFFF' }} bottom={'25%'} width={'35%'}>
                <Heading variant={'h2'} size={'xl'} fontWeight={700} mb={2}>
                    {mediaData?.name ? mediaData?.name.toUpperCase() : ''}
                </Heading>
                <Flex mb={25} gap={15}>
                    <Text fontWeight={500}>{mediaData?.number_of_seasons} Seasons</Text>
                    <Text>|</Text>
                    <Text fontWeight={500}>{mediaData?.first_air_date}</Text>
                </Flex>

                <Flex mb={25} flexWrap={'wrap'} gap={2}>
                    {mediaData?.genres?.map((genre: FindTVByTMDB_FindTVByTMDB_genres) => {
                        return (
                            <Tag size={'md'} key={genre.id} variant="outline" colorScheme="blue">
                                {genre.name}
                            </Tag>
                        );
                    })}
                </Flex>
                <Flex justifyContent={'space-between'} mb={25}>
                    <Button width={'45%'} onClick={() => navigate(`/tv/${tmdb}/video`)}>
                        Play Movie
                    </Button>
                    <Button width={'45%'} onClick={() => navigate(`/tv/${tmdb}/trailer`)}>
                        Play Trailer
                    </Button>
                </Flex>
                <StarRatings
                    rating={mediaData?.vote_average ? mediaData?.vote_average * 0.5 : 0}
                    starDimension="25px"
                    starSpacing="7px"
                    starRatedColor={colorMode === 'dark' ? theme.colors.yellow[400] : theme.colors.yellow[400]}
                />
            </Box>
            {/* This is causing extra height on the poster compared to the vid */}
            <Image
                position={'absolute'}
                top={0}
                objectFit={'cover'}
                overflow={'hidden'}
                width={'100%'}
                height={'100%'}
                src={
                    !loading && mediaData?.backdrop_path
                        ? `https://image.tmdb.org/t/p/original${mediaData?.backdrop_path}`
                        : 'https://s28504.pcdn.co/wp-content/themes/idology/images/video-place-holder.png'
                }
                placeholder={'https://s28504.pcdn.co/wp-content/themes/idology/images/video-place-holder.png'}
            />
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    top: 0,
                    backgroundImage:
                        'linear-gradient(to right, rgb(0, 0, 0, 1) 20%, transparent), url(data:image/png;base64,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)',
                }}
            />
        </Box>
    );
};

export default TvPoster;

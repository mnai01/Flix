import { Box, Button, Flex, Heading, Tag, Text, useColorMode, useTheme } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { convertMinsToHrsMins } from '../../../../../utils/helper/ConvertMinutes';

interface PosterContentProps {
    title?: string | null;
    release_date?: string | null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    genres?: any;
    vote_average?: number | null;
    runtime?: number;
    runtimeNative?: number;
    nav_src: string;
    nav_trailer: string;
    remove_src?: boolean;
    overview?: string | null;
}

interface PosterContentObject {
    posterContent: PosterContentProps;
}

const PosterContent: React.FC<PosterContentObject> = ({ posterContent }) => {
    const { title, runtime, runtimeNative, release_date, genres, vote_average, nav_src, nav_trailer, overview, remove_src = true } = posterContent;
    const { colorMode } = useColorMode();
    const navigate = useNavigate();
    const theme = useTheme();
    const contentItemPadding = { base: 1, sm: 2, md: 3, lg: 4 };
    return (
        <Box p={{ base: 5, sm: 5, md: 10, lg: 10 }} height={'100%'}>
            <Heading variant={'h2'} size={'xl'} fontWeight={700} mb={2}>
                {title && title.toUpperCase()}
            </Heading>
            <Flex mb={contentItemPadding} gap={15}>
                {runtime && (
                    <>
                        <Text fontWeight={500}>{runtimeNative ? runtimeNative + ' Seasons' : convertMinsToHrsMins(runtime)}</Text> <Text>|</Text>
                    </>
                )}

                {release_date && <Text fontWeight={500}>{release_date}</Text>}
            </Flex>
            {genres && (
                <Flex mb={contentItemPadding} flexWrap={'wrap'} gap={2}>
                    {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        genres?.map((genre: any) => {
                            return (
                                <Tag
                                    size={'md'}
                                    cursor={'pointer'}
                                    key={genre.id}
                                    variant="outline"
                                    colorScheme="blue"
                                    onClick={() => navigate(`/movies/category/${genre.name}`)}>
                                    {genre.name}
                                </Tag>
                            );
                        })
                    }
                </Flex>
            )}
            {overview && (
                <Text fontWeight={500} mb={contentItemPadding} width={{ md: '100%', lg: '100%' }} maxHeight={'25%'} noOfLines={5} overflowY={'auto'}>
                    {overview}
                </Text>
            )}
            <Flex justifyContent={'space-between'} mb={contentItemPadding}>
                {!remove_src && (
                    <Button width={'45%'} onClick={() => navigate(nav_src)}>
                        Play Movie
                    </Button>
                )}
                <Button width={'45%'} onClick={() => navigate(nav_trailer)}>
                    Play Trailer
                </Button>
            </Flex>
            {vote_average && (
                <StarRatings
                    rating={vote_average ? vote_average * 0.5 : 0}
                    starDimension="25px"
                    starSpacing="7px"
                    starRatedColor={colorMode === 'dark' ? theme.colors.yellow[400] : theme.colors.yellow[400]}
                />
            )}
        </Box>
    );
};

export default PosterContent;

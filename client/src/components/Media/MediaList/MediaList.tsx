import { Box, Flex, Heading, Skeleton, Text } from '@chakra-ui/react';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import SwiperCore, { Lazy, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MediaCard } from '../';
import { SearchVideos_SearchVideos_results } from '../../../apollo/generated/SearchVideos';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

interface MediaListProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    medias?: any;
    loading?: boolean;
    horizontal?: boolean;
    title?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lastElementRef?: any;
    navigateTo?: string;
}

SwiperCore.use([Navigation, Pagination, Scrollbar, Lazy]);

const MediaList: React.FC<MediaListProps> = ({ medias, loading, horizontal = false, title, navigateTo, lastElementRef }) => {
    const navigate = useNavigate();
    const childrenSwiper =
        loading && !medias ? (
            Array(36)
                .fill(0)
                .map((_, i) => (
                    <SwiperSlide key={i} style={{ width: 'auto' }}>
                        <Box
                            pr={3}
                            width={{ base: '130px', sm: '130px', md: '154px', lg: '185px' }}
                            height={{ base: '177px', sm: '200px', md: '227px', lg: '268px' }}>
                            <Skeleton width="100%" height={'100%'} />
                        </Box>
                    </SwiperSlide>
                ))
        ) : medias && medias.length > 0 ? (
            medias.map((i: SearchVideos_SearchVideos_results) => (
                <SwiperSlide key={i.id} style={{ width: 'auto' }}>
                    <Box pr={3} width={{ base: '130px', sm: '130px', md: '154px', lg: '185px' }}>
                        <MediaCard media={i} skeletonHeight={{ base: '177px', sm: '200px', md: '227px', lg: '268px' }} />
                    </Box>
                </SwiperSlide>
            ))
        ) : (
            <SwiperSlide key={1}>
                <h1>No result found</h1>
            </SwiperSlide>
        );

    const childrenVertical =
        loading && !medias ? (
            Array(35)
                .fill(0)
                .map((_, i) => (
                    <Box
                        pr={1.5}
                        pb={1.5}
                        key={i}
                        width={{ base: '130px', sm: '130px', md: '154px', lg: '185px' }}
                        height={{ base: '177px', sm: '200px', md: '227px', lg: '268px' }}
                        m="auto"
                        mb={5}>
                        <Skeleton width="100%" height={'100%'} mb={'4px'} />
                        <Skeleton height={'18px'} />
                    </Box>
                ))
        ) : medias && medias.length > 0 ? (
            medias.map((i: SearchVideos_SearchVideos_results, index: number) => {
                // make last item contain a ref so we can tell if we are at the bottom of the list
                if (medias.length === index + 1 && lastElementRef) {
                    return (
                        <Box pr={1.5} pb={1.5} key={i.id} width={{ base: '130px', sm: '130px', md: '154px', lg: '185px' }} ref={lastElementRef} m="auto" mb={5}>
                            <MediaCard media={i} skeletonHeight={{ base: '177px', sm: '200px', md: '227px', lg: '268px' }} />
                        </Box>
                    );
                }

                return (
                    <Box pr={1.5} pb={1.5} key={i.id} width={{ base: '130px', sm: '130px', md: '154px', lg: '185px' }} m="auto" mb={5}>
                        <MediaCard media={i} label skeletonHeight={{ base: '177px', sm: '200px', md: '227px', lg: '268px' }} />
                    </Box>
                );
            })
        ) : (
            <h1>No result found</h1>
        );

    // EX. can be found in example.txt file
    // This has to be seperated and cant be thrown in the childrenVertical since if the childrenVertical changed its conditional it will rerender a new section and since they arent identical since one
    // has a skeleton and the other doesnt it will case a flashing of content. If they both just had media and no skeleton it should work fine because they all have the same keys and content but once you
    // change the keys on one of the sections the flashing will come back
    const skeletonVerticalLoadExtra =
        loading &&
        medias &&
        Array(30)
            .fill(0)
            .map((_, i) => (
                <Box
                    pr={1.5}
                    pb={1.5}
                    key={i}
                    width={{ base: '130px', sm: '130px', md: '154px', lg: '185px' }}
                    height={{ base: '177px', sm: '200px', md: '227px', lg: '268px' }}
                    m="auto"
                    mb={5}>
                    <Skeleton width="100%" height={'100%'} mb={'4px'} />
                    <Skeleton height={'18px'} />
                </Box>
            ));

    return (
        <>
            {title && (
                <Box pb={2.5}>
                    <Heading size={'sm'} display={'flex'} onClick={() => (navigateTo ? navigate(navigateTo) : {})} cursor={'pointer'}>
                        {title}{' '}
                        <Text as={'i'} fontSize={'xs'} my="auto" ml={2} opacity={0.5} fontWeight={500}>
                            Drag to scroll
                        </Text>
                        {navigateTo && <IoIosArrowForward style={{ marginLeft: '5px', marginTop: 'auto' }} />}
                    </Heading>
                </Box>
            )}
            {horizontal ? (
                <>
                    <Swiper
                        // onReachEnd={() => console.log('end')}
                        style={{ width: '100%' }}
                        slidesPerGroup={1}
                        grabCursor={true}
                        spaceBetween={2}
                        centeredSlides={false}
                        slidesPerView={'auto'}
                        // loop={medias && medias.length <= 9 ? false : true}
                        loopedSlides={0}
                        pagination={false}
                        initialSlide={0}
                        observer={true}
                        scrollbar={true}
                        lazy={true}>
                        {childrenSwiper}
                    </Swiper>
                </>
            ) : (
                <Flex wrap={horizontal ? 'nowrap' : 'wrap'} overflowX={horizontal ? 'scroll' : 'hidden'}>
                    {childrenVertical}
                    {skeletonVerticalLoadExtra}
                </Flex>
            )}
        </>
    );
};

export default MediaList;

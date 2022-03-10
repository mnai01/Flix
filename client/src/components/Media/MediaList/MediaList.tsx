import { Box, Flex, Heading, Skeleton } from '@chakra-ui/react';
import { IoIosArrowForward } from 'react-icons/io';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MediaCard } from '../';
import { SearchVideos_SearchVideos_results } from '../../../apollo/generated/SearchVideos';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { useNavigate } from 'react-router-dom';

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

SwiperCore.use([Navigation, Pagination]);

const MediaList: React.FC<MediaListProps> = ({ medias, loading, horizontal = false, title, lastElementRef, navigateTo }) => {
    const navigate = useNavigate();
    const childrenSwiper = loading ? (
        Array(36)
            .fill(0)
            .map((_, i) => (
                <SwiperSlide key={i} style={{ width: 'auto' }}>
                    <Box pr={3}>
                        <Skeleton width={'100%'} height="278px" />
                    </Box>
                </SwiperSlide>
            ))
    ) : medias && medias.length > 0 ? (
        medias.map((i: SearchVideos_SearchVideos_results) => (
            <SwiperSlide key={i.id} style={{ width: 'auto' }}>
                <Box pr={3}>
                    <MediaCard media={i} />
                </Box>
            </SwiperSlide>
        ))
    ) : (
        <SwiperSlide key={1}>
            <h1>No result found</h1>
        </SwiperSlide>
    );

    // MAYBE TRY TO
    const childrenVertical =
        loading && !medias ? (
            Array(20)
                .fill(0)
                .map((_, i) => (
                    <Box p={1.5} key={i} width="185px" height="278px">
                        <Skeleton width="100%" height={'100%'} />
                    </Box>
                ))
        ) : medias && medias.length > 0 ? (
            medias.map((i: SearchVideos_SearchVideos_results, index: number) => {
                // make last item contain a ref so we can tell if we are at the bottom of the list
                if (medias.length === index + 1 && lastElementRef) {
                    return (
                        <Box p={1.5} key={i.id} style={{ width: '185px' }} ref={lastElementRef}>
                            <MediaCard media={i} />
                        </Box>
                    );
                }

                return (
                    <Box p={1.5} key={i.id} style={{ width: '185px' }}>
                        <MediaCard media={i} />
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
        Array(20)
            .fill(0)
            .map((_, i) => (
                <Box p={1.5} key={i} width="185px" height="278px">
                    <Skeleton width="100%" height={'100%'} />
                </Box>
            ));

    return (
        <>
            {title && (
                <Box py={2.5}>
                    <Heading size={'sm'} display={'flex'} onClick={() => (navigateTo ? navigate(navigateTo) : {})} cursor={'pointer'}>
                        {title}
                        {navigateTo && <IoIosArrowForward style={{ marginLeft: '5px', marginTop: 'auto' }} />}
                    </Heading>
                </Box>
            )}
            {horizontal ? (
                <Swiper
                    // onReachEnd={() => console.log('end')}
                    style={{ width: '100%' }}
                    slidesPerGroup={1}
                    grabCursor={true}
                    spaceBetween={2}
                    centeredSlides={false}
                    slidesPerView={'auto'}
                    loop={true}
                    loopedSlides={0}
                    pagination={false}
                    initialSlide={0}
                    observer={true}>
                    {childrenSwiper}
                </Swiper>
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

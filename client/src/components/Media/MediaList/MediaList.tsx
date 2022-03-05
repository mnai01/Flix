import { Box, Flex, Heading, Skeleton } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
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
}

SwiperCore.use([Navigation, Pagination]);

const MediaList: React.FC<MediaListProps> = ({ medias, loading, horizontal = false, title }) => {
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

    const childrenVertical = loading ? (
        Array(36)
            .fill(0)
            .map((_, i) => (
                <Box p={1.5} key={i} width="185px" height="278px">
                    <Skeleton width="100%" height={'100%'} />
                </Box>
            ))
    ) : medias && medias.length > 0 ? (
        medias.map((i: SearchVideos_SearchVideos_results) => (
            <Box p={1.5} key={i.id} style={{ width: '185px' }}>
                <MediaCard media={i} />
            </Box>
        ))
    ) : (
        <h1>No result found</h1>
    );

    return (
        <>
            {title && (
                <Box py={2.5}>
                    <Heading size={'sm'}>{title}</Heading>
                </Box>
            )}
            {horizontal ? (
                <Swiper
                    // onReachEnd={() => console.log('end')}
                    style={{ width: '100%' }}
                    slidesPerGroup={5}
                    grabCursor={true}
                    spaceBetween={2}
                    centeredSlides={false}
                    slidesPerView={8}
                    pagination={false}
                    initialSlide={0}
                    breakpoints={{
                        '576': {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        '768': {
                            slidesPerView: 4,
                            spaceBetween: 0,
                        },
                        '992': {
                            slidesPerView: 5,
                            spaceBetween: 0,
                        },
                        '1200': {
                            slidesPerView: 6,
                            spaceBetween: 0,
                        },
                        '1400': {
                            slidesPerView: 9,
                            spaceBetween: 0,
                        },
                    }}>
                    {childrenSwiper}
                </Swiper>
            ) : (
                <Flex wrap={horizontal ? 'nowrap' : 'wrap'} overflowX={horizontal ? 'scroll' : 'hidden'}>
                    {childrenVertical}
                </Flex>
            )}
        </>
    );
};

export default MediaList;

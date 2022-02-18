import { Box, Flex, Skeleton } from '@chakra-ui/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
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
}
SwiperCore.use([Navigation, Pagination]);

const MediaList: React.FC<MediaListProps> = ({ medias, loading, horizontal }) => {
    const childrenSwiper = loading ? (
        Array(36)
            .fill(0)
            .map((_, i) => (
                <SwiperSlide key={i}>
                    <Box p={1.5}>
                        <Skeleton width="185px" height="278px" />
                    </Box>
                </SwiperSlide>
            ))
    ) : medias && medias.length > 0 ? (
        medias.map((i: SearchVideos_SearchVideos_results) => (
            <SwiperSlide key={i.id} style={{ width: 'auto' }}>
                <Box p={1.5}>
                    <MediaCard media={i} />
                </Box>
            </SwiperSlide>
        ))
    ) : (
        <h1>No result found</h1>
    );

    const childrenVertical = loading ? (
        Array(36)
            .fill(0)
            .map((_, i) => (
                <Box p={1.5} key={i}>
                    <Skeleton width="185px" height="278px" />
                </Box>
            ))
    ) : medias && medias.length > 0 ? (
        medias.map((i: SearchVideos_SearchVideos_results) => (
            <Box p={1.5} key={i.id}>
                <MediaCard media={i} />
            </Box>
        ))
    ) : (
        <h1>No result found</h1>
    );

    return (
        <>
            {horizontal ? (
                <Swiper
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

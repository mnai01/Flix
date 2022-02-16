import { Box, Flex, Skeleton } from '@chakra-ui/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MediaCard } from '../';
import { SearchVideos_SearchVideos } from '../../../apollo/generated/SearchVideos';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

interface MediaListProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    medias?: any[];
    loading?: boolean;
    horizontal?: boolean;
}
SwiperCore.use([Navigation, Pagination]);

const MediaList: React.FC<MediaListProps> = ({ medias, loading, horizontal = true }) => {
    return (
        <div>
            <Swiper grabCursor={true} centeredSlides={true} slidesPerView={8} pagination={false}>
                {loading ? (
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
                    medias.map((i: SearchVideos_SearchVideos) => (
                        <SwiperSlide key={i.id}>
                            <Box p={1.5}>
                                <MediaCard media={i} />
                            </Box>
                        </SwiperSlide>
                    ))
                ) : (
                    <h1>No result found</h1>
                )}
            </Swiper>
        </div>
    );
};

export default MediaList;

import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Poster } from '../MediaContent/Reusable';

SwiperCore.use([Navigation, Pagination, Autoplay]);

interface MediaCarouselProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any[] | null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error?: any;
    loading?: boolean;
    height?: number;
}

const MediaCarousel: React.FC<MediaCarouselProps> = ({ data, loading, height }) => {
    // const { data: genreCollection } = useGenres();

    // let collect: any = [];
    // if (genreCollection && genreCollection?.Genres.tv && genreCollection.Genres.movies) {
    //     collect = [...genreCollection?.Genres.movies, ...genreCollection.Genres.tv];
    // }

    // const newItems = data?.TopRatedMovies?.results?.map((i) => {
    //     if (i === collect.find((j: any) => j.id === i)) {
    //         return genreCollection?.Genres;
    //     }
    // });

    // console.log(newItems);

    return (
        <Swiper
            style={{ width: '100%', height: `${height ? height + 'vh' : 'auto'}` }}
            slidesPerGroup={1}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            spaceBetween={0}
            centeredSlides={false}
            slidesPerView={1}
            pagination={{ clickable: true }}
            initialSlide={0}
            navigation={true}
            breakpoints={{
                '576': {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                '768': {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                '992': {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                '1200': {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                '1400': {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
            }}>
            {!loading &&
                data &&
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                data.map((i: any) => (
                    <SwiperSlide key={i.title} style={{ width: 'auto' }}>
                        <Poster
                            loading={loading}
                            title={i.title}
                            overview={i.overview}
                            vote_average={i.vote_average}
                            backdrop_path={i.backdrop_path}
                            release_date={i.release_date}
                            nav_src={`/movie/${i.id}/video`}
                            nav_trailer={`/movie/${i.id}/trailer`}
                        />
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

export default MediaCarousel;

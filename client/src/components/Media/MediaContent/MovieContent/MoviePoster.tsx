import { Box, Image } from '@chakra-ui/react';
import { FindMovieByTMDB } from '../../../../apollo/generated/FindMovieByTMDB';
import { useSelectedMedia } from '../../../Providers/SelectedMediaProvider';
import { PosterContent } from '../PosterContent';

interface selectedMovieProps {
    data?: FindMovieByTMDB;
    loading: boolean;
    tmdb?: string;
}

const MoviePoster = () => {
    const { data, loading, tmdb }: selectedMovieProps = useSelectedMedia();
    const mediaData = data?.FindMovieByTMDB;
    return (
        <PosterContent
            title={mediaData?.title}
            release_date={mediaData?.release_date}
            genres={mediaData?.genres}
            vote_average={mediaData?.vote_average}
            runtime={mediaData?.runtime}
            nav_src={`/movie/${tmdb}/video`}
            nav_trailer={`/movie/${tmdb}/trailer`}
            loading={loading}
            backdrop_path={mediaData?.backdrop_path}
        />
    );
};

export default MoviePoster;

import { FindTVByTMDB } from '../../../../apollo/generated/FindTVByTMDB';
import { useSelectedMedia } from '../../../Providers/SelectedMediaProvider';
import { PosterContent } from '../PosterContent';

interface SelectedTVProps {
    data?: FindTVByTMDB;
    loading: boolean;
    tmdb?: string;
}

const TvPoster = () => {
    const { data, loading, tmdb }: SelectedTVProps = useSelectedMedia();
    const mediaData = data?.FindTVByTMDB;

    return (
        <PosterContent
            title={mediaData?.name}
            release_date={mediaData?.first_air_date}
            genres={mediaData?.genres}
            vote_average={mediaData?.vote_average}
            runtimeNative={mediaData?.number_of_seasons}
            nav_src={`/tv/${tmdb}/video`}
            nav_trailer={`/tv/${tmdb}/trailer`}
            loading={loading}
            backdrop_path={mediaData?.backdrop_path}
        />
    );
};

export default TvPoster;

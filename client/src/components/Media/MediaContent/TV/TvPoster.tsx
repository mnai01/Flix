import { FindTVByTMDB } from '../../../../apollo/generated/FindTVByTMDB';
import { useSelectedMedia } from '../../../Providers/SelectedMediaProvider';
import { Poster, Similar } from '../Reusable';

interface SelectedTVProps {
    data?: FindTVByTMDB;
    loading: boolean;
    tmdb?: string;
}

const TvPoster = () => {
    const { data, loading, tmdb }: SelectedTVProps = useSelectedMedia();
    const mediaData = data?.FindTVByTMDB;

    return (
        <>
            <Poster
                title={mediaData?.name}
                release_date={mediaData?.first_air_date}
                genres={mediaData?.genres}
                vote_average={mediaData?.vote_average}
                runtimeNative={mediaData?.number_of_seasons}
                nav_src={`/tv/${tmdb}/video`}
                nav_trailer={`/tv/${tmdb}/trailer`}
                loading={loading}
                backdrop_path={mediaData?.backdrop_path}
                remove_src
                overview={mediaData?.overview}
            />
            <Similar medias={mediaData?.similar.results} loading={loading} horizontal />
        </>
    );
};

export default TvPoster;

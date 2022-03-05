import { FindMovieByTMDB, FindMovieByTMDB_FindMovieByTMDB_videos_results } from '../../../../apollo/generated/FindMovieByTMDB';
import { useSelectedMedia } from '../../../Providers/SelectedMediaProvider';
import { Similar, Trailer } from '../Reusable';

interface selectedMovieProps {
    data?: FindMovieByTMDB;
    loading?: boolean;
    tmdb?: string;
}
const MovieTrailer: React.FC = () => {
    const { data, loading }: selectedMovieProps = useSelectedMedia();
    const mediaData = data?.FindMovieByTMDB;

    const trailers = mediaData?.videos.results?.filter((i: FindMovieByTMDB_FindMovieByTMDB_videos_results) => {
        if (i.site === 'YouTube' && i.name.toLowerCase().match(/trailer/)) {
            return true;
        } else {
            return false;
        }
    });

    return (
        <>
            <Trailer trailers={trailers} />
            <Similar medias={mediaData?.similar.results} loading={loading} horizontal />
        </>
    );
};

export default MovieTrailer;

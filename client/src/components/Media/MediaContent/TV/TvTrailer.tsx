import { FindTVByTMDB, FindTVByTMDB_FindTVByTMDB_videos_results } from '../../../../apollo/generated/FindTVByTMDB';
import { useSelectedMedia } from '../../../Providers/SelectedMediaProvider';
import { Similar } from '../Reusable';
import { Trailer } from '../Reusable/Trailer';

interface TvTrailerProps {
    data?: FindTVByTMDB;
    loading: boolean;
}
const TvTrailer: React.FC = () => {
    const { data, loading }: TvTrailerProps = useSelectedMedia();
    const mediaData = data?.FindTVByTMDB;

    const trailers = mediaData?.videos.results?.filter((i: FindTVByTMDB_FindTVByTMDB_videos_results) => {
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

export default TvTrailer;

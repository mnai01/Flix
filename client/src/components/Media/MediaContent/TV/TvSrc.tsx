import { useParams } from 'react-router-dom';
import { FindTVByTMDB } from '../../../../apollo/generated/FindTVByTMDB';
import { useSelectedMedia } from '../../../Providers/SelectedMediaProvider';
import { Similar, SrcVideo } from '../Reusable';

interface TvSrcProps {
    data?: FindTVByTMDB;
    loading: boolean;
    isTV: boolean;
}

const TvSrc: React.FC = () => {
    const { data, loading, isTV }: TvSrcProps = useSelectedMedia();
    const { s, e } = useParams();

    return (
        <>
            <SrcVideo
                data={data?.FindTVByTMDB}
                loading={loading}
                link={`${process.env.REACT_APP_SOURCE}${data?.FindTVByTMDB.external_ids.imdb_id}/${s}-${e}`}
                imdb={data?.FindTVByTMDB.external_ids.imdb_id}
                isTV={isTV}
            />
            <Similar medias={data?.FindTVByTMDB.similar.results} loading={loading} horizontal />
        </>
    );
};

export default TvSrc;

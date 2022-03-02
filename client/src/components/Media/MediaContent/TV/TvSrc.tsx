import { useParams } from 'react-router-dom';
import { FindTVByTMDB } from '../../../../apollo/generated/FindTVByTMDB';
import { useSelectedMedia } from '../../../Providers/SelectedMediaProvider';
import { Similar } from '../Reusable';
import { SrcVideo } from '../Reusable/SrcVideo';

interface TvSrcProps {
    data?: FindTVByTMDB;
    loading: boolean;
}

const TvSrc: React.FC = () => {
    const { data, loading }: TvSrcProps = useSelectedMedia();
    const { s, e } = useParams();

    return (
        <>
            <SrcVideo
                data={data?.FindTVByTMDB}
                loading={loading}
                link={`${process.env.REACT_APP_SOURCE}${data?.FindTVByTMDB.external_ids.imdb_id}/${s}-${e}`}
                imdb={data?.FindTVByTMDB.external_ids.imdb_id}
            />
            <Similar medias={data?.FindTVByTMDB.similar.results} loading={loading} horizontal />
        </>
    );
};

export default TvSrc;

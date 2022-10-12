import { Box } from '@chakra-ui/react';
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
        <Box height={'60%'}>
            <SrcVideo
                data={data?.FindTVByTMDB}
                loading={loading}
                imdbLink={`${process.env.REACT_APP_SOURCE}${data?.FindTVByTMDB.external_ids.imdb_id}/${s}-${e}`}
                tmdbLink={`${process.env.REACT_APP_SOURCE1}tv?id=${data?.FindTVByTMDB.id}&s=${s}&e=${e}`}
                isTV={isTV}
                imdb={data?.FindTVByTMDB.external_ids.imdb_id}
            />
            <Similar medias={data?.FindTVByTMDB.similar.results} loading={loading} horizontal />
        </Box>
    );
};

export default TvSrc;

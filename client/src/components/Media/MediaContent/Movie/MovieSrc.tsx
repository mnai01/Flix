import { FindMovieByTMDB } from '../../../../apollo/generated/FindMovieByTMDB';
import { useSelectedMedia } from '../../../Providers/SelectedMediaProvider';
import { Similar, SrcVideo } from '../Reusable';

interface MovieSrcProps {
    data?: FindMovieByTMDB;
    loading: boolean;
    isTV?: boolean;
}

const MovieSrc: React.FC = () => {
    const { data, loading, isTV }: MovieSrcProps = useSelectedMedia();
    return (
        <>
            <SrcVideo
                data={data?.FindMovieByTMDB}
                loading={loading}
                link={`${process.env.REACT_APP_SOURCE}${data?.FindMovieByTMDB.imdb_id}`}
                imdb={data?.FindMovieByTMDB.imdb_id}
                isTV={isTV}
            />
            <Similar medias={data?.FindMovieByTMDB.similar.results} loading={loading} horizontal />
        </>
    );
};

//

export default MovieSrc;

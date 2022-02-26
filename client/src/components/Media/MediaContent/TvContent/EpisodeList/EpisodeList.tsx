import { useQuery } from '@apollo/client';
import { Select } from '@chakra-ui/react';
import { useState } from 'react';
import EpisodeItem from './EpisodeItem';
import { FindEpisodeByTMDB, FindEpisodeByTMDB_FindEpisodeByTMDB_episodes, FindEpisodeByTMDBVariables } from '../../../../../apollo/generated/FindEpisodeByTMDB';
import { FindTVByTMDB } from '../../../../../apollo/generated/FindTVByTMDB';
import { GET_SEASON_DETAILS } from '../../../../../apollo/queries';
import { useSelectedMedia } from '../../../../Providers/SelectedMediaProvider';

interface selectedTVProps {
    data?: FindTVByTMDB;
    loading: boolean;
    tmdb?: string;
}
const EpisodeList = () => {
    const { data: TvShowData, tmdb }: selectedTVProps = useSelectedMedia();
    const [season, setSeason] = useState<number | undefined>(undefined);

    const { data } = useQuery<FindEpisodeByTMDB, FindEpisodeByTMDBVariables>(GET_SEASON_DETAILS, {
        // onCompleted: (data) => {
        //     setMovie(data);
        //     console.log(data);
        // },
        fetchPolicy: 'cache-first',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        variables: { tvShowId: tmdb!, seasonNumber: season! },
        skip: !tmdb || !season, // !season,
    });

    return (
        <>
            <h1>EpisodeList</h1>
            <Select
                onChange={(i) => {
                    if (i.target.value === '0') {
                        setSeason(undefined);
                    } else {
                        setSeason(parseInt(i.target.value));
                    }
                }}>
                <option key={'Select a Season'} value={0}>
                    Select a Season
                </option>
                {TvShowData?.FindTVByTMDB.seasons?.map((i, index) => {
                    // Check if season starts from season 0 (needs to start from season 1)
                    if (i.season_number === 0) {
                        return false;
                    }

                    return (
                        <option key={i.season_number} value={i.season_number}>
                            {i.season_number} Season
                        </option>
                    );
                })}
            </Select>
            {data?.FindEpisodeByTMDB.episodes?.map((i: FindEpisodeByTMDB_FindEpisodeByTMDB_episodes) => (
                <EpisodeItem key={i.name} episode={i} />
            ))}
        </>
    );
};

export default EpisodeList;

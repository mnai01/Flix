import { useQuery } from '@apollo/client';
import { Box, useTheme } from '@chakra-ui/react';
import React, { useState } from 'react';
import EpisodeItem from './EpisodeItem';
import { FindEpisodeByTMDB, FindEpisodeByTMDB_FindEpisodeByTMDB_episodes, FindEpisodeByTMDBVariables } from '../../../../../apollo/generated/FindEpisodeByTMDB';
import { FindTVByTMDB } from '../../../../../apollo/generated/FindTVByTMDB';
import { GET_SEASON_DETAILS } from '../../../../../apollo/queries';
import { MediaList } from '../../../../Media';
import { useSelectedMedia } from '../../../../Providers/SelectedMediaProvider';

interface selectedTVProps {
    data?: FindTVByTMDB;
    loading: boolean;
    tmdb?: string;
}
const EpisodeList = () => {
    const { data: TvShowData, tmdb }: selectedTVProps = useSelectedMedia();
    const [season, setSeason] = useState();
    const theme = useTheme();

    const { data } = useQuery<FindEpisodeByTMDB, FindEpisodeByTMDBVariables>(GET_SEASON_DETAILS, {
        // onCompleted: (data) => {
        //     setMovie(data);
        //     console.log(data);
        // },
        fetchPolicy: 'cache-first',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        variables: { tvShowId: tmdb!, seasonNumber: 1 },
        skip: !tmdb, // !season,
    });

    return (
        <>
            <h1>EpisodeList</h1>
            {data?.FindEpisodeByTMDB.episodes?.map((i: FindEpisodeByTMDB_FindEpisodeByTMDB_episodes) => (
                <EpisodeItem key={i.name} episode={i} />
            ))}
        </>
    );
};

export default EpisodeList;

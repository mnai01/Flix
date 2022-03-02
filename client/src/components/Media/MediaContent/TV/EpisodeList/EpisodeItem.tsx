import { Flex, Heading, Image, Text, useTheme } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FindEpisodeByTMDB_FindEpisodeByTMDB_episodes } from '../../../../../apollo/generated/FindEpisodeByTMDB';
import { useSelectedMedia } from '../../../../Providers/SelectedMediaProvider';

interface EpisodeItemProps {
    episode: FindEpisodeByTMDB_FindEpisodeByTMDB_episodes;
}

const EpisodeItem: React.FC<EpisodeItemProps> = ({ episode }) => {
    const { tmdb } = useSelectedMedia();

    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <Flex
            my={2}
            p={2}
            bgColor={theme.colors.gray[700]}
            borderRadius={3}
            onClick={() => navigate(`/tv/${tmdb}/video/${episode.season_number}/${episode.episode_number}`)}>
            <Image
                src={episode.still_path ? `https://image.tmdb.org/t/p/w185${episode.still_path}` : 'https://via.placeholder.com/185x104'}
                borderRadius={3}
                placeholder={'https://via.placeholder.com/185x104'}
            />
            <Flex direction={'column'} px={3}>
                <Heading size={'md'} variant={'h3'}>
                    {episode.name ? episode.name : 'NA'}
                </Heading>
                <Text variant={'p'}>{episode.overview ? episode.overview : 'NA'}</Text>
            </Flex>
        </Flex>
    );
};

export default EpisodeItem;

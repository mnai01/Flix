/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Heading, Select } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface MediaListHeaderProps {
    title?: string;
    // eslint-disable-next-line no-unused-vars
    setFilter?: ({ variables }: any) => void;
    isCustomGenre?: boolean;
}

const MediaListHeader: React.FC<MediaListHeaderProps> = ({ title, setFilter, isCustomGenre = true }) => {
    console.log(isCustomGenre);
    const [sortBy, setSortBy] = useState<any>('popularityDesc');

    useEffect(() => {
        setSortBy('popularityDesc');
    }, [title]);

    return (
        <Flex justify={'space-between'} pb={2.5} py={5} pr={3}>
            <Heading variant={'h3'} size={'sm'}>
                {title ? title : 'Search'}
            </Heading>
            {!isCustomGenre && (
                <Select
                    value={sortBy}
                    width={'25%'}
                    onChange={(e) => {
                        setSortBy(e.target.value);
                        setFilter && setFilter({ variables: { sortBy: e.target.value } });
                    }}>
                    <option value="popularityDesc">Most Popular</option>
                    <option value="popularityAsc">Least Popular</option>
                    <option value="vote_countDesc">Most Votes</option>
                    <option value="vote_countAsc">Least Votes</option>
                    <option value="vote_averageDesc">Best Vote Average</option>
                    <option value="vote_averageAsc">Worst Vote Average</option>
                </Select>
            )}
        </Flex>
    );
};

export default MediaListHeader;

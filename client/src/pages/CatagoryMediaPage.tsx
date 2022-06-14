import { Flex } from '@chakra-ui/react';
import { DocumentNode } from 'graphql';
import { useEffect, useState } from 'react';
import { GET_MOVIES_BY_GENRE, GET_TRENDING, GET_TV_BY_GENRE } from '../apollo/queries';
import { MediaList, MediaListHeader } from '../components/Media';
import { useCustomLazyQuery } from '../utils/hooks/useCustomLazyQuery';
import { default as useGenreParams } from '../utils/hooks/useGenreParams';

interface QueryProps {
    queryReference: DocumentNode;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    variables?: any;
}

const CatagoryMediaPage = () => {
    const { genre, type } = useGenreParams();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [query, setQuery] = useState<QueryProps>({ queryReference: GET_TRENDING, variables: undefined });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSetQuery = ({ variables }: any) => {
        setQuery({ ...query, variables: variables });
    };

    // Since component never changed state never gets reset. So this useEffect will set pages back to 1
    // and it hardcodes page # to 1 since the state value of pageNumber is not reliable due to component not being rerendered for each category
    useEffect(() => {
        if (type === 'tv' && genre?.id) {
            setQuery({ queryReference: GET_TV_BY_GENRE, variables: { withGenres: genre.id } });
        } else if (type === 'movies' && genre?.id) {
            setQuery({ queryReference: GET_MOVIES_BY_GENRE, variables: { withGenres: genre.id } });
        } else if (type === 'home' && genre?.name === 'Top Trending') {
            setQuery({ queryReference: GET_TRENDING, variables: {} });
        }
    }, [type, genre]);

    // pageObj.page !== pageObj.totalPages checks to see if there are more pages, if not return nothing in the callback function
    // eslint-disable-next-line @typescript-eslint/no-empty-function

    const { data, loading, lastElementRef } = useCustomLazyQuery(query?.queryReference, { withGenres: genre?.id, ...query.variables }, [
        query.queryReference,
        query.variables,
    ]);

    return (
        // An initial setting on flex items is min-width: auto. This means that a flex item, by default, cannot be smaller than the size of its content.
        // Therefore, text-overflow: ellipsis cannot work because a flex item will simply expand, rather than permit an overflow. (Scroll bars will not render either, for the same reason.)
        // To override this behavior, use min-width: 0 or overflow: hidden.
        <Flex direction="column" style={{ overflow: 'hidden', minWidth: 0 }}>
            {/* Check if custom genre is selected (EX. Top Trending) Top Trending doesnt have filter options on backend */}
            <MediaListHeader title={genre && genre.name} setFilter={handleSetQuery} isCustomGenre={genre?.id === '000000'} />
            <MediaList medias={data && data?.results} loading={loading} lastElementRef={lastElementRef} label={true} />
        </Flex>
    );
};

export default CatagoryMediaPage;

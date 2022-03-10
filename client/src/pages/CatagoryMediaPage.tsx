import { useLazyQuery } from '@apollo/client';
import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { DiscoverMovies, DiscoverMovies_DiscoverMovies, DiscoverMoviesVariables } from '../apollo/generated/DiscoverMovies';
import { DiscoverTV, DiscoverTV_DiscoverTV, DiscoverTVVariables } from '../apollo/generated/DiscoverTV';
import { GetTrending, GetTrending_GetTrending, GetTrendingVariables } from '../apollo/generated/GetTrending';
import { GET_MOVIES_BY_GENRE, GET_TRENDING, GET_TV_BY_GENRE } from '../apollo/queries';
import { MediaList, MediaListHeader } from '../components/Media';
import { default as useGenreParams } from '../utils/hooks/useGenreParams';
import useInfiniteScroll from '../utils/hooks/useInfiniteScroll';

interface PageObject {
    page: number;
    totalPages: number;
}

const CatagoryMediaPage = () => {
    const { genre, type } = useGenreParams();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [discover, setDiscover] = useState<any>();
    const [pageObj, setPageObj] = useState<PageObject>({ page: 1, totalPages: 1 });

    // Since component never changed state never gets reset. So this useEffect will set pages back to 1
    // and it hardcodes page # to 1 since the state value of pageNumber is not reliable due to component not being rerendered for each category
    useEffect(() => {
        if (type === 'tv' && genre?.id) {
            discoverTV({ variables: { withGenres: genre.id, page: 1 } });
            setPageObj({ page: 1, totalPages: 1 });
        } else if (type === 'movies' && genre?.id) {
            discoverMovies({ variables: { withGenres: genre.id, page: 1 } });
            setPageObj({ page: 1, totalPages: 1 });
        } else if (type === 'home' && genre?.name === 'Top Trending') {
            trendingMedia({ variables: { page: 1 } });
            setPageObj({ page: 1, totalPages: 1 });
        }
        return () => {
            setDiscover({});
        };
    }, [type, genre]);

    const [discoverMovies, { loading: loadingMovies }] = useLazyQuery<DiscoverMovies, DiscoverMoviesVariables>(GET_MOVIES_BY_GENRE, {
        fetchPolicy: 'cache-first',
        onCompleted: (data: DiscoverMovies) => {
            setDiscover((prevState: DiscoverMovies_DiscoverMovies) => {
                return prevState?.page >= 1 ? { ...prevState, results: [...prevState.results, ...data.DiscoverMovies.results] } : { ...data.DiscoverMovies };
            });
            setPageObj((prev: PageObject) => {
                return {
                    page: prev.page + 1,
                    totalPages: data.DiscoverMovies.total_pages,
                };
            });
        },
    });

    const [discoverTV, { loading: loadingTV }] = useLazyQuery<DiscoverTV, DiscoverTVVariables>(GET_TV_BY_GENRE, {
        fetchPolicy: 'cache-first',
        onCompleted: (data: DiscoverTV) => {
            setDiscover((prevState: DiscoverTV_DiscoverTV) => {
                return prevState?.page >= 1 ? { ...prevState, results: [...prevState.results, ...data.DiscoverTV.results] } : { ...data.DiscoverTV };
            });
            setPageObj((prev: PageObject) => {
                return {
                    page: prev.page + 1,
                    totalPages: data.DiscoverTV.total_pages,
                };
            });
        },
    });

    const [trendingMedia, { loading: loadingTrending }] = useLazyQuery<GetTrending, GetTrendingVariables>(GET_TRENDING, {
        fetchPolicy: 'cache-first',
        onCompleted: (data) => {
            setDiscover((prevState: GetTrending_GetTrending) => {
                return prevState?.page >= 1 ? { ...prevState, results: [...prevState.results, ...data.GetTrending.results] } : { ...data.GetTrending };
            });
            setPageObj((prev: PageObject) => {
                return {
                    page: prev.page + 1,
                    totalPages: data.GetTrending.total_pages,
                };
            });
        },
    });

    const fetchItems = () => {
        if (type === 'tv' && genre?.id) {
            discoverTV({ variables: { withGenres: genre.id, page: pageObj.page } });
        } else if (type === 'movies' && genre?.id) {
            discoverMovies({ variables: { withGenres: genre.id, page: pageObj.page } });
        } else if (type === 'home' && genre?.name === 'Top Trending') {
            trendingMedia({ variables: { page: pageObj.page } });
        }
    };

    // pageObj.page !== pageObj.totalPages checks to see if there are more pages, if not return nothing in the callback function
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const [lastElementRef] = useInfiniteScroll(pageObj.page !== pageObj.totalPages ? fetchItems : () => {}, loadingMovies || loadingTV || loadingTrending);

    return (
        // An initial setting on flex items is min-width: auto. This means that a flex item, by default, cannot be smaller than the size of its content.
        // Therefore, text-overflow: ellipsis cannot work because a flex item will simply expand, rather than permit an overflow. (Scroll bars will not render either, for the same reason.)
        // To override this behavior, use min-width: 0 or overflow: hidden.
        <Flex direction="column" style={{ overflow: 'hidden', minWidth: 0 }}>
            <MediaListHeader title={genre && genre.name} />
            <MediaList medias={discover && discover.results} loading={loadingMovies || loadingTV || loadingTrending} lastElementRef={lastElementRef} />
        </Flex>
    );
};

export default CatagoryMediaPage;

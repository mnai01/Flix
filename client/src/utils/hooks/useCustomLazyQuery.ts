/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import { DiscoverMovies, DiscoverMovies_DiscoverMovies, DiscoverMoviesVariables } from '../../apollo/generated/DiscoverMovies';
import { DiscoverTV, DiscoverTV_DiscoverTV, DiscoverTVVariables } from '../../apollo/generated/DiscoverTV';
import { GET_MOVIES_BY_GENRE, GET_TV_BY_GENRE } from '../../apollo/queries';

interface PageObject {
    page: number;
    totalPages: number;
}

// NOT WORKING
export const useQueryMutation = () => {
    // const { genre, type } = useGenreParams();
    const [discover, setDiscover] = useState<any>();
    const [pageObj, setPageObj] = useState<PageObject>({ page: 1, totalPages: 4 });

    const [discoverMovies, { data, loading: loadingMovies, error: errorMovies }] = useLazyQuery<DiscoverMovies, DiscoverMoviesVariables>(GET_MOVIES_BY_GENRE, {
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
    return {
        query: {
            discoverMovies: {
                discoverMoviesFunc: discoverMovies,
                Data: data,
                Loading: loadingMovies,
                Error: errorMovies,
            },
        },
        pageDetails: { page: pageObj.page, totalPages: pageObj.totalPages },
        loading: loadingTV || loadingMovies,
    };
};

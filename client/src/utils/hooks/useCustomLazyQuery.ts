/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useLazyQuery, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import useGenreParams from './useGenreParams';
import useInfiniteScroll from './useInfiniteScroll';

interface PageObject {
    page: number;
    totalPages: number;
}

// NOT WORKING
export const useCustomLazyQuery = (query: any, variables: any, dependecies: any = []) => {
    const { genre, type, loading: loadingGenre } = useGenreParams();
    const [pageObj, setPageObj] = useState<PageObject>({ page: 1, totalPages: 0 });
    const [discover, setDiscover] = useState<any>(undefined);

    // Modulized query that uses media data (specifically for discoverTV and discoverMovie
    // api which has an alias of Media
    const [lazy, { data, loading, error }] = useLazyQuery(query, {
        fetchPolicy: 'no-cache',
        onCompleted: (data) => {
            setDiscover((prevState: any) => {
                return prevState?.page >= 1 ? { ...prevState, results: [...prevState.results, ...data.Media.results] } : { ...data.Media };
            });
            setPageObj((prev: PageObject) => {
                return {
                    page: prev.page + 1,
                    totalPages: data && data?.Media ? data.Media?.total_pages : 1,
                };
            });
        },
    });

    useEffect(() => {
        lazy({ variables: { ...variables, page: 1 } });
        setPageObj({ page: 1, totalPages: 1 });
        return () => {
            setDiscover({});
        };
    }, [...dependecies, genre, type, loadingGenre]);

    const fetchItems = () => {
        lazy({ variables: { ...variables, page: pageObj.page } });
    };

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const [lastElementRef] = useInfiniteScroll(pageObj.page !== pageObj.totalPages ? fetchItems : () => {}, loading);

    return {
        data: discover,
        loading,
        error,
        lastElementRef,
    };
};

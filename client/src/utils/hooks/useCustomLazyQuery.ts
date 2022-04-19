/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useGenreParams } from './useGenreParams';
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
    const { data, loading, error, fetchMore, refetch } = useQuery(query, {
        variables: { page: pageObj.page, ...variables },
        fetchPolicy: 'no-cache',
        onCompleted: (data) => {
            console.log(data);
            setDiscover((prevState: any) => {
                return prevState?.page >= 1
                    ? { ...prevState, results: data && data.Media ? [...prevState.results, ...data.Media.results] : [...prevState.results] }
                    : { ...data?.Media };
            });
        },
    });

    useEffect(() => {
        setPageObj({ page: 1, totalPages: 0 });
        refetch();
        return () => {
            setDiscover({});
        };
    }, [...dependecies, genre, type]);

    const fetchy = () => {
        fetchMore({ variables: { ...variables, page: pageObj.page } });
        setPageObj((prev: PageObject) => {
            return {
                page: prev.page + 1,
                totalPages: data && data?.Media ? data.Media?.total_pages : 1,
            };
        });
    };

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const [lastElementRef] = useInfiniteScroll(pageObj.page !== pageObj.totalPages ? fetchy : () => {}, loading);

    return {
        data: discover,
        loading,
        error,
        lastElementRef,
    };
};

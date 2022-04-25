import { Center, Spinner } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import CustomAlert from '../../components/Alert/Alert';
import Layout from '../../components/Layout';
import { AutoSuggestionProvider } from '../../components/Providers/AutoSuggestionProvider';
import { GenreProvider } from '../../components/Providers/GenreProvider';
import { WatchedMediaProvider } from '../../components/Providers/WatchedMediaProvider';

const TVsPage = lazy(() => import('../TVsPage'));
const MoviesPage = lazy(() => import('../MoviesPage'));
const CatagoryMediaPage = lazy(() => import('../CatagoryMediaPage'));
const HomePage = lazy(() => import('../HomePage'));
const MediaContentPage = lazy(() => import('../MediaContentPage'));
const NotFound = lazy(() => import('../NotFound'));
const SearchPage = lazy(() => import('../SearchPage'));
const UpdatesPage = lazy(() => import('../UpdatesPage'));

const PageRoutes = () => {
    return (
        <AutoSuggestionProvider>
            <GenreProvider>
                <WatchedMediaProvider>
                    <Layout>
                        <CustomAlert />
                        <Suspense
                            fallback={
                                <Center h={'100vh'}>
                                    <Spinner size="xl" position={'absolute'} />
                                </Center>
                            }>
                            <Routes>
                                <Route path="*" element={<NotFound />} />
                                <Route path="/" element={<HomePage />} />
                                <Route path="/movies" element={<MoviesPage />} />
                                <Route path="/tv" element={<TVsPage />} />
                                <Route path="/updates" element={<UpdatesPage />} />
                                <Route path="/search" element={<SearchPage />} />
                                <Route path="/movies/category/:genre" element={<CatagoryMediaPage />} />
                                <Route path="/tv/category/:genre" element={<CatagoryMediaPage />} />
                                <Route path="/home/category/:genre" element={<CatagoryMediaPage />} />
                                <Route path="/movie/:id" element={<MediaContentPage />} />
                                <Route path="/tv/:id" element={<MediaContentPage />} />
                                <Route path="/movie/:id/video" element={<MediaContentPage />} />
                                <Route path="/movie/:id/trailer" element={<MediaContentPage />} />
                                <Route path="/tv/:id/video/:s/:e" element={<MediaContentPage />} />
                                <Route path="/tv/:id/trailer" element={<MediaContentPage />} />
                            </Routes>
                        </Suspense>
                    </Layout>
                </WatchedMediaProvider>
            </GenreProvider>
        </AutoSuggestionProvider>
    );
};

export default PageRoutes;

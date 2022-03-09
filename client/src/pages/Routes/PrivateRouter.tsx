import { Flex } from '@chakra-ui/react';
import { Route, Routes } from 'react-router';
import PageWrapper from '../../components/Layout/PageWrapper';
import Sidebar from '../../components/Layout/Sidebar';
import { AutoSuggestionProvider } from '../../components/Providers/AutoSuggestionProvider';
import { GenreProvider } from '../../components/Providers/GenreProvider';
import { CatagoryMediaPage, HomePage, MediaContentPage, NotFound, SearchPage } from '../index';
import MoviesPage from '../MoviesPage';
import TVsPage from '../TVsPage';

const PageRoutes = () => {
    return (
        <AutoSuggestionProvider>
            <GenreProvider>
                <Flex height={'100%'} width={'100%'}>
                    <Sidebar />
                    <PageWrapper>
                        <Routes>
                            <Route path="*" element={<NotFound />} />
                            <Route path="/" element={<HomePage />} />
                            <Route path="/movies" element={<MoviesPage />} />
                            <Route path="/tv" element={<TVsPage />} />
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
                    </PageWrapper>
                </Flex>
            </GenreProvider>
        </AutoSuggestionProvider>
    );
};

export default PageRoutes;

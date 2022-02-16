import { Flex } from '@chakra-ui/react';
import { Route, Routes } from 'react-router';
import PageWrapper from '../../components/Layout/PageWrapper';
import Sidebar from '../../components/Layout/Sidebar';
import { AutoSuggestionProvider } from '../../components/Providers/AutoSuggestionProvider';
import { GenreProvider } from '../../components/Providers/GenreProvider';
import { HomePage, MediaListPage, MovieContent, NotFound, SearchPage } from '../index';
import MoviesPage from '../MoviesPage';
import TVsPage from '../TVsPage';

const PageRoutes = () => {
    return (
        <AutoSuggestionProvider>
            <GenreProvider>
                <Flex>
                    <Sidebar />
                    <PageWrapper>
                        <Routes>
                            <Route path="*" element={<NotFound />} />
                            <Route path="/" element={<HomePage />} />
                            <Route path="/movies" element={<MoviesPage />} />
                            <Route path="/tv" element={<TVsPage />} />
                            <Route path="/search" element={<SearchPage />} />
                            <Route path="/category/:genre" element={<MediaListPage />} />
                            <Route path="/movie/:id" element={<MovieContent />} />
                        </Routes>
                    </PageWrapper>
                </Flex>
            </GenreProvider>
        </AutoSuggestionProvider>
    );
};

export default PageRoutes;

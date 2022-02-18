import { Flex } from '@chakra-ui/react';
import { Route, Routes } from 'react-router';
import Sidebar from '../../components/Layout/Sidebar';
import { AutoSuggestionProvider } from '../../components/Providers/AutoSuggestionProvider';
import { GenreProvider } from '../../components/Providers/GenreProvider';
import { CatagoryMediaPage, HomePage, MovieContent, NotFound, SearchPage } from '../index';
import MoviesPage from '../MoviesPage';
import TVsPage from '../TVsPage';

const PageRoutes = () => {
    return (
        <AutoSuggestionProvider>
            <GenreProvider>
                <Flex>
                    <Sidebar />
                    <Routes>
                        <Route path="*" element={<NotFound />} />
                        <Route path="/" element={<HomePage />} />
                        <Route path="/movies" element={<MoviesPage />} />
                        <Route path="/tv" element={<TVsPage />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/movies/category/:genre" element={<CatagoryMediaPage />} />
                        <Route path="/tv/category/:genre" element={<CatagoryMediaPage />} />
                        <Route path="/movie/:id" element={<MovieContent />} />
                        <Route path="/tv/:id" element={<MovieContent />} />
                    </Routes>
                </Flex>
            </GenreProvider>
        </AutoSuggestionProvider>
    );
};

export default PageRoutes;
